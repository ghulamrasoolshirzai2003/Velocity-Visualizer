import { useState, useCallback, useRef, useEffect } from 'react';
import { useNodesState, useEdgesState, addEdge, useReactFlow, ReactFlowProvider } from '@xyflow/react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import useAutoSave from '../hooks/useAutoSave';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';
import useHistory from '../hooks/useHistory';
import { getTemplateById } from '../data/templates';
import { ToastProvider, useToast } from '../components/Toast';
import Sidebar from '../components/Sidebar';
import FlowCanvas from '../components/FlowCanvas';
import Header from '../components/Header';
import AutoSaveIndicator from '../components/AutoSaveIndicator';
import NodeInfoPanel from '../components/NodeInfoPanel';
import WorkspaceToolbar from '../components/WorkspaceToolbar';
import KeyboardShortcutsModal from '../components/KeyboardShortcutsModal';
import ValidationWarnings from '../components/ValidationWarnings';
import SuccessModal from '../components/SuccessModal';
import ConfirmModal from '../components/ConfirmModal';

const API_BASE_URL = 'http://localhost:5000/api';

function WorkspacePage() {
    return (
        <ReactFlowProvider>
            <ToastProvider>
                <WorkspaceContent />
            </ToastProvider>
        </ReactFlowProvider>
    );
}

function WorkspaceContent() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [blueprints, setBlueprints] = useState([]);
    const [currentBlueprintId, setCurrentBlueprintId] = useState(null);
    const [currentBlueprintName, setCurrentBlueprintName] = useState('Untitled Blueprint');
    const [autoSaveStatus, setAutoSaveStatus] = useState(null); // 'saving', 'saved', 'error'
    const [lastSaved, setLastSaved] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const [showShortcutsModal, setShowShortcutsModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successModalData, setSuccessModalData] = useState({ title: '', message: '', blueprintName: '' });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [blueprintToDelete, setBlueprintToDelete] = useState(null);
    const [showClearCanvasModal, setShowClearCanvasModal] = useState(false);
    const reactFlowWrapper = useRef(null);
    const nodeIdCounter = useRef(0);
    const { user } = useAuth();
    const location = useLocation();
    const { showToast } = useToast();
    const { fitView } = useReactFlow();

    // History management for undo/redo
    const history = useHistory({ nodes: [], edges: [] });

    // Sync history with nodes/edges
    useEffect(() => {
        history.set({ nodes, edges });
    }, [nodes, edges]);

    // Load blueprints on mount
    useEffect(() => {
        if (user) {
            fetchBlueprints();
        }
    }, [user]);

    // Load template from URL parameter
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const templateId = params.get('template');

        if (templateId) {
            const template = getTemplateById(templateId);
            if (template) {
                setNodes(template.nodes);
                setEdges(template.edges);
                setCurrentBlueprintName(template.name + ' (from template)');

                // Update node counter
                const maxId = Math.max(
                    0,
                    ...template.nodes.map(n => {
                        const match = n.id.match(/node-(\d+)/);
                        return match ? parseInt(match[1]) : 0;
                    })
                );
                nodeIdCounter.current = maxId + 1;
            }
        }
    }, [location.search]);

    // Load saved blueprint from backend when load parameter is present OR restore last working blueprint
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const loadBlueprintId = params.get('load');
        const templateId = params.get('template');

        // If there's a load parameter, load that blueprint
        if (loadBlueprintId) {
            loadBlueprintFromBackend(loadBlueprintId);
        }
        // If no URL parameters and there's a last working blueprint, restore it
        else if (!templateId && !loadBlueprintId) {
            const lastBlueprintId = localStorage.getItem('lastWorkingBlueprintId');
            if (lastBlueprintId && lastBlueprintId !== 'null') {
                console.log('Restoring last working blueprint:', lastBlueprintId);
                loadBlueprintFromBackend(lastBlueprintId);
            }
        }
    }, [location.search]);

    // Function to load blueprint from backend
    const loadBlueprintFromBackend = async (blueprintId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE_URL}/blueprints/${blueprintId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const blueprint = response.data;
            console.log('Loaded blueprint:', blueprint);

            // Parse the JSON data
            const blueprintData = JSON.parse(blueprint.json_data);
            console.log('Parsed blueprint data:', blueprintData);

            // Load nodes and edges
            setNodes(blueprintData.nodes || []);
            setEdges(blueprintData.edges || []);
            setCurrentBlueprintName(blueprint.name);
            setCurrentBlueprintId(blueprint.id);

            // Save to localStorage so we can restore it later
            localStorage.setItem('lastWorkingBlueprintId', blueprint.id);

            // Update node counter
            const maxId = Math.max(
                0,
                ...(blueprintData.nodes || []).map(n => {
                    const match = n.id.match(/node-(\d+)/);
                    return match ? parseInt(match[1]) : 0;
                })
            );
            nodeIdCounter.current = maxId + 1;

            // Fit view after a short delay to ensure nodes are rendered
            setTimeout(() => {
                fitView({ padding: 0.2, duration: 800 });
            }, 100);

            showToast(`Blueprint "${blueprint.name}" loaded successfully!`, 'success');

        } catch (error) {
            console.error('Error loading blueprint:', error);
            showToast('Failed to load blueprint', 'error');
        }
    };

    // Auto-save function with auto-create
    const performAutoSave = async () => {
        // Skip if no nodes/edges
        if (nodes.length === 0 && edges.length === 0) {
            return;
        }

        try {
            setAutoSaveStatus('saving');
            const token = localStorage.getItem('token');

            // Generate default name if not set
            const blueprintName = currentBlueprintName || `Blueprint ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

            const blueprintData = {
                name: blueprintName,
                jsonData: JSON.stringify({
                    nodes,
                    edges,
                    viewport: { x: 0, y: 0, zoom: 1 }
                })
            };

            if (currentBlueprintId) {
                // Update existing blueprint
                await axios.put(`${API_BASE_URL}/blueprints/${currentBlueprintId}`, blueprintData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            } else {
                // Auto-create new blueprint
                const response = await axios.post(`${API_BASE_URL}/blueprints`, blueprintData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCurrentBlueprintId(response.data.id);
                setCurrentBlueprintName(blueprintName);
                fetchBlueprints();
            }

            setAutoSaveStatus('saved');
            setLastSaved(new Date());

            // Hide 'saved' indicator after 3 seconds
            setTimeout(() => setAutoSaveStatus(null), 3000);
        } catch (error) {
            console.error('Auto-save error:', error);
            setAutoSaveStatus('error');
            setTimeout(() => setAutoSaveStatus(null), 5000);
        }
    };

    // Auto-save hook - triggers 2 seconds after nodes/edges change
    useAutoSave(performAutoSave, 2000, [nodes, edges]);

    const fetchBlueprints = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE_URL}/blueprints`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setBlueprints(response.data);
        } catch (error) {
            console.error('Error fetching blueprints:', error);
        }
    };

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const iconData = JSON.parse(event.dataTransfer.getData('application/reactflow'));

            const position = {
                x: event.clientX - reactFlowBounds.left - 50,
                y: event.clientY - reactFlowBounds.top - 25
            };

            const newNode = {
                id: `node-${nodeIdCounter.current++}`,
                type: 'custom',
                position,
                data: {
                    ...iconData,
                    createdAt: new Date().toISOString(),
                    customName: '',
                    onNameChange: handleNodeNameChange
                }
            };

            setNodes((nds) => nds.concat(newNode));
            showToast({
                type: 'success',
                message: `Added ${iconData.label} to canvas`
            });
        },
        [setNodes, showToast]
    );

    // Handle node name change
    const handleNodeNameChange = useCallback((nodeId, newName) => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            customName: newName
                        }
                    };
                }
                return node;
            })
        );
        if (newName) {
            showToast({
                type: 'success',
                message: `Node renamed to "${newName}"`
            });
        }
    }, [setNodes, showToast]);

    // Handle node selection
    const handleNodeClick = useCallback((event, node) => {
        setSelectedNode(node);
    }, []);

    // Handle pane click (deselect)
    const handlePaneClick = useCallback(() => {
        setSelectedNode(null);
    }, []);

    // Keyboard shortcuts handlers
    const handleUndo = useCallback(() => {
        if (history.canUndo) {
            history.undo();
            const prevState = history.state;
            setNodes(prevState.nodes);
            setEdges(prevState.edges);
            showToast({ type: 'info', message: 'Undo' });
        }
    }, [history, setNodes, setEdges, showToast]);

    const handleRedo = useCallback(() => {
        if (history.canRedo) {
            history.redo();
            const nextState = history.state;
            setNodes(nextState.nodes);
            setEdges(nextState.edges);
            showToast({ type: 'info', message: 'Redo' });
        }
    }, [history, setNodes, setEdges, showToast]);

    const handleDeleteSelected = useCallback(() => {
        const selectedNodes = nodes.filter(node => node.selected);
        if (selectedNodes.length > 0) {
            setNodes(nds => nds.filter(node => !node.selected));
            setEdges(eds => eds.filter(edge =>
                !selectedNodes.some(node => node.id === edge.source || node.id === edge.target)
            ));
            showToast({ type: 'success', message: `Deleted ${selectedNodes.length} node(s)` });
        }
    }, [nodes, setNodes, setEdges, showToast]);

    const handleSelectAll = useCallback(() => {
        setNodes(nds => nds.map(node => ({ ...node, selected: true })));
        showToast({ type: 'info', message: 'All nodes selected' });
    }, [setNodes, showToast]);

    const handleClearCanvas = useCallback(() => {
        if (nodes.length === 0 && edges.length === 0) return;
        setShowClearCanvasModal(true);
    }, [nodes, edges]);

    const confirmClearCanvas = useCallback(() => {
        setNodes([]);
        setEdges([]);
        history.reset({ nodes: [], edges: [] });
        setShowClearCanvasModal(false);
        showToast({ type: 'success', message: 'Canvas cleared' });
    }, [setNodes, setEdges, history, showToast]);

    const handleFitView = useCallback(() => {
        fitView({ padding: 0.2, duration: 300 });
        showToast({ type: 'info', message: 'View fitted' });
    }, [fitView, showToast]);

    // Keyboard shortcuts
    useKeyboardShortcuts({
        onSave: () => {
            if (currentBlueprintId) {
                performAutoSave();
                showToast({ type: 'success', message: 'Blueprint saved!' });
            } else {
                showToast({ type: 'warning', message: 'Please save blueprint first' });
            }
        },
        onUndo: handleUndo,
        onRedo: handleRedo,
        onDelete: handleDeleteSelected,
        onSelectAll: handleSelectAll,
        onEscape: () => {
            setSelectedNode(null);
            setShowShortcutsModal(false);
        },
        onHelp: () => setShowShortcutsModal(true)
    });

    const handleSaveBlueprint = async (name) => {
        try {
            const token = localStorage.getItem('token');

            // Check if user is authenticated
            if (!token) {
                alert('You must be logged in to save blueprints. Please log in first.');
                return;
            }

            const blueprintData = {
                name,
                jsonData: JSON.stringify({
                    nodes,
                    edges,
                    viewport: { x: 0, y: 0, zoom: 1 }
                })
            };

            let savedId = currentBlueprintId;

            if (currentBlueprintId) {
                // Update existing blueprint
                await axios.put(`${API_BASE_URL}/blueprints/${currentBlueprintId}`, blueprintData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            } else {
                // Create new blueprint
                const response = await axios.post(`${API_BASE_URL}/blueprints`, blueprintData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                savedId = response.data.id;
                setCurrentBlueprintId(savedId);
            }

            setCurrentBlueprintName(name);
            setLastSaved(new Date());
            fetchBlueprints();

            // Save to localStorage so we can restore it later
            localStorage.setItem('lastWorkingBlueprintId', savedId);

            // Show success modal
            setSuccessModalData({
                title: 'Blueprint Saved!',
                message: 'Your blueprint has been saved successfully.',
                blueprintName: name
            });
            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error saving blueprint:', error);
            console.error('Error details:', error.response?.data);
            console.error('Error status:', error.response?.status);

            let errorMessage = 'Failed to save blueprint. ';
            if (error.response?.status === 401) {
                errorMessage += 'Please log in again.';
            } else if (error.response?.status === 500) {
                errorMessage += 'Server error. Please check if the backend is running.';
            } else if (error.message === 'Network Error') {
                errorMessage += 'Cannot connect to server. Is the backend running at http://localhost:5000?';
            }

            showToast(errorMessage, 'error');
        }
    };

    const handleLoadBlueprint = async (blueprintId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE_URL}/blueprints/${blueprintId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const blueprint = response.data;
            const data = JSON.parse(blueprint.json_data);

            setNodes(data.nodes || []);
            setEdges(data.edges || []);
            setCurrentBlueprintId(blueprintId);
            setCurrentBlueprintName(blueprint.name);
            setLastSaved(new Date(blueprint.updated_at));

            // Update node counter to avoid ID conflicts
            const maxId = Math.max(
                0,
                ...data.nodes.map(n => {
                    const match = n.id.match(/node-(\d+)/);
                    return match ? parseInt(match[1]) : 0;
                })
            );
            nodeIdCounter.current = maxId + 1;

            setCurrentBlueprintName(blueprint.name);
        } catch (error) {
            console.error('Error loading blueprint:', error);
        }
    };

    // Handle delete blueprint from sidebar - show confirmation modal
    const handleDeleteBlueprint = (blueprintId) => {
        const blueprint = blueprints.find(b => b.id === blueprintId);
        if (blueprint) {
            setBlueprintToDelete(blueprint);
            setShowDeleteModal(true);
        }
    };

    // Confirm and execute blueprint deletion
    const confirmDeleteBlueprint = async () => {
        if (!blueprintToDelete) return;

        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${API_BASE_URL}/blueprints/${blueprintToDelete.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // If we deleted the current blueprint, clear the canvas
            if (currentBlueprintId === blueprintToDelete.id) {
                setNodes([]);
                setEdges([]);
                setCurrentBlueprintId(null);
                setCurrentBlueprintName('Untitled Blueprint');
                setLastSaved(null);
                localStorage.removeItem('lastWorkingBlueprintId');
            }

            fetchBlueprints();
            showToast(`Blueprint "${blueprintToDelete.name}" deleted successfully!`, 'success');
        } catch (error) {
            console.error('Error deleting blueprint:', error);
            showToast('Failed to delete blueprint', 'error');
        }
    };

    return (
        <>
            <div className="w-full h-screen bg-slate-950 overflow-hidden relative" ref={reactFlowWrapper}>
                <Header />
                <AutoSaveIndicator status={autoSaveStatus} lastSaved={lastSaved} />
                <WorkspaceToolbar
                    onUndo={handleUndo}
                    onRedo={handleRedo}
                    canUndo={history.canUndo}
                    canRedo={history.canRedo}
                    undoCount={history.undoCount}
                    redoCount={history.redoCount}
                    onShowShortcuts={() => setShowShortcutsModal(true)}
                    onClear={handleClearCanvas}
                    onFitView={handleFitView}
                    blueprintName={currentBlueprintName}
                    nodes={nodes}
                    edges={edges}
                />
                <Sidebar
                    onAddNode={(icon) => console.log('Add node:', icon)}
                    onSaveBlueprint={handleSaveBlueprint}
                    onLoadBlueprint={handleLoadBlueprint}
                    onDeleteBlueprint={handleDeleteBlueprint}
                    blueprints={blueprints}
                />
                <FlowCanvas
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onNodeClick={handleNodeClick}
                    onPaneClick={handlePaneClick}
                />
                {selectedNode && (
                    <NodeInfoPanel
                        node={selectedNode}
                        onClose={() => setSelectedNode(null)}
                        onNameChange={handleNodeNameChange}
                    />
                )}
                <ValidationWarnings edges={edges} nodes={nodes} />
                <KeyboardShortcutsModal
                    isOpen={showShortcutsModal}
                    onClose={() => setShowShortcutsModal(false)}
                />
            </div>

            {/* Modals rendered outside main container to prevent overflow clipping */}
            <ConfirmModal
                isOpen={showDeleteModal}
                onClose={() => {
                    setShowDeleteModal(false);
                    setBlueprintToDelete(null);
                }}
                onConfirm={confirmDeleteBlueprint}
                title="Delete Blueprint?"
                message={`Are you sure you want to delete "${blueprintToDelete?.name}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                isDangerous={true}
            />
            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title={successModalData.title}
                blueprintName={successModalData.blueprintName}
            />
            <ConfirmModal
                isOpen={showClearCanvasModal}
                onClose={() => setShowClearCanvasModal(false)}
                onConfirm={confirmClearCanvas}
                title="Clear Canvas?"
                message="Are you sure you want to clear the canvas? This action cannot be undone."
                confirmText="Clear Canvas"
                cancelText="Cancel"
                isDangerous={true}
            />
        </>
    );
}

export default WorkspacePage;
