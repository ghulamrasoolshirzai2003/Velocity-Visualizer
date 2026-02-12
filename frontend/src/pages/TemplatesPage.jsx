import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomNode from '../components/CustomNode';
import { templates, templateCategories, getDifficultyColor } from '../data/templates';

const nodeTypes = {
    custom: CustomNode,
};

const TemplatesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [previewTemplate, setPreviewTemplate] = useState(null);
    const navigate = useNavigate();

    const filteredTemplates = templates.filter(template => {
        const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const handleUseTemplate = (template) => {
        // Store template in localStorage and navigate to workspace
        localStorage.setItem('selectedTemplate', JSON.stringify(template));
        navigate('/workspace?template=' + template.id);
    };

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan bg-clip-text text-transparent mb-4">
                            Blueprint Templates
                        </h1>
                        <p className="text-xl text-white/60 mb-8">
                            Start with pre-built cloud architecture templates
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl glass-panel border border-white/20 text-white placeholder-white/40 focus:border-neon-cyan focus:outline-none transition-all"
                                    style={{ backdropFilter: 'blur(20px)' }}
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40">
                                    🔍
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        <motion.button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === 'all'
                                ? 'bg-gradient-to-r from-neon-cyan to-neon-violet text-white'
                                : 'glass-panel border border-white/20 text-white/60 hover:text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🌟 All Templates
                        </motion.button>
                        {templateCategories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === category.id
                                    ? 'glass-panel text-white border-2'
                                    : 'glass-panel border border-white/20 text-white/60 hover:text-white'
                                    }`}
                                style={{
                                    borderColor: selectedCategory === category.id ? category.color : undefined
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.icon} {category.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Templates Grid */}
                    <AnimatePresence mode="wait">
                        {filteredTemplates.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20"
                            >
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-semibold text-white mb-2">No templates found</h3>
                                <p className="text-white/60">Try a different search or category</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredTemplates.map((template, idx) => (
                                    <TemplateCard
                                        key={template.id}
                                        template={template}
                                        index={idx}
                                        onUse={() => handleUseTemplate(template)}
                                        onPreview={() => setPreviewTemplate(template)}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Template Preview Modal */}
            <AnimatePresence>
                {previewTemplate && (
                    <TemplatePreviewModal
                        template={previewTemplate}
                        onClose={() => setPreviewTemplate(null)}
                        onUse={() => {
                            handleUseTemplate(previewTemplate);
                            setPreviewTemplate(null);
                        }}
                    />
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

const TemplateCard = ({ template, index, onUse, onPreview }) => {
    const category = templateCategories.find(c => c.id === template.category);
    const difficultyColor = getDifficultyColor(template.difficulty);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-panel p-6 rounded-xl border border-white/20 hover:border-neon-cyan transition-all group"
            whileHover={{ y: -5 }}
        >
            {/* Template Preview */}
            <div className="w-full h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-3 gap-2 p-4">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-full h-8 bg-white/20 rounded"></div>
                        ))}
                    </div>
                </div>
                <span className="text-5xl relative z-10">{category?.icon}</span>
            </div>

            {/* Template Info */}
            <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                        {template.name}
                    </h3>
                    <span
                        className="px-2 py-1 rounded text-xs font-semibold"
                        style={{
                            backgroundColor: `${difficultyColor}20`,
                            color: difficultyColor,
                            border: `1px solid ${difficultyColor}40`
                        }}
                    >
                        {template.difficulty}
                    </span>
                </div>
                <p className="text-sm text-white/60 mb-3">
                    {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 rounded text-xs bg-white/5 text-white/60 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                    <span>📦 {template.nodes.length} nodes</span>
                    <span>🔗 {template.edges.length} connections</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
                <motion.button
                    onClick={onUse}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white text-sm font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Use Template
                </motion.button>
                <motion.button
                    onClick={onPreview}
                    className="px-4 py-2 rounded-lg glass-panel border border-white/20 text-white/60 text-sm font-semibold hover:text-white hover:border-neon-cyan transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    👁️
                </motion.button>
            </div>
        </motion.div>
    );
};

const TemplatePreviewModal = ({ template, onClose, onUse }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-6xl h-[80vh] bg-slate-900 rounded-2xl border border-white/20 overflow-hidden flex flex-col shadow-2xl shadow-neon-cyan/20"
                onClick={e => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/50 backdrop-blur-md z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">{template.name}</h2>
                        <p className="text-white/60 text-sm">{template.description}</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={onUse}
                            className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold hover:shadow-glow-cyan transition-all"
                        >
                            Use Template
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Preview Canvas */}
                <div className="flex-1 relative bg-slate-950">
                    <ReactFlow
                        nodes={template.nodes}
                        edges={template.edges}
                        nodeTypes={nodeTypes}
                        fitView
                        proOptions={{ hideAttribution: true }}
                        nodesDraggable={false}
                        nodesConnectable={false}
                        elementsSelectable={false}
                        zoomOnScroll={true}
                        panOnScroll={true}
                        defaultEdgeOptions={{
                            animated: true,
                            style: { stroke: '#00f0ff', strokeWidth: 2 },
                        }}
                    >
                        <Background color="#00f0ff" gap={20} size={1} className="opacity-10" />
                        <Controls className="!bg-slate-800 !border-white/20 !fill-white" />
                        <MiniMap
                            className="!bg-slate-800 !border-white/20"
                            nodeColor={(node) => node.data.color || '#00f0ff'}
                            maskColor="rgba(0, 0, 0, 0.6)"
                        />
                    </ReactFlow>

                    {/* Read-only Badge */}
                    <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-xs font-mono text-white/40 pointer-events-none">
                        PREVIEW MODE
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TemplatesPage;
