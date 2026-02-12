import { useState, useCallback, useRef } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    addEdge,
    useNodesState,
    useEdgesState,
    MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import CustomNode from './CustomNode';
import ZoomControls from './ZoomControls';
import { isConnectionAllowed } from '../data/iconData';

const nodeTypes = {
    custom: CustomNode,
};

const FlowCanvas = ({
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onDrop,
    onDragOver,
    onNodeClick,
    onPaneClick
}) => {
    const [toast, setToast] = useState(null);
    const toastTimeoutRef = useRef(null);

    const showToast = (message) => {
        if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
        }

        setToast(message);

        toastTimeoutRef.current = setTimeout(() => {
            setToast(null);
        }, 4000);
    };

    const handleConnect = useCallback((connection) => {
        const sourceNode = nodes.find(n => n.id === connection.source);
        const targetNode = nodes.find(n => n.id === connection.target);

        const validation = isConnectionAllowed(sourceNode, targetNode);

        if (!validation.allowed) {
            showToast(validation.reason);
            return;
        }

        onConnect(connection);
    }, [nodes, onConnect]);

    return (
        <div className="w-full h-screen relative">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={handleConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                nodeTypes={nodeTypes}
                fitView
                defaultEdgeOptions={{
                    type: 'smoothstep',
                    animated: true,
                    style: { stroke: '#00f0ff', strokeWidth: 2 },
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        color: '#00f0ff',
                    },
                }}
            >
                <Background
                    color="#00f0ff"
                    gap={16}
                    size={1}
                    className="opacity-20"
                />
                <Controls
                    className="!hidden"
                />
                <MiniMap
                    className="glass-panel !border-white/20"
                    nodeColor={(node) => node.data.color || '#00f0ff'}
                    maskColor="rgba(0, 0, 0, 0.6)"
                />
            </ReactFlow>

            {/* Custom Zoom Controls */}
            <ZoomControls />

            {/* 3D Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
                        style={{
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                        }}
                    >
                        <motion.div
                            className="glass-panel px-6 py-4 rounded-xl border-2 border-red-500 shadow-glow-violet max-w-md"
                            animate={{
                                rotateX: [0, 5, 0],
                                rotateY: [0, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#ef4444"
                                        className="drop-shadow-lg"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-red-400 mb-1">
                                        ⚠️ Connection Blocked
                                    </h4>
                                    <p className="text-sm text-white/90">
                                        {toast}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FlowCanvas;
