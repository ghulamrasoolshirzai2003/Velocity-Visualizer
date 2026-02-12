import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getEnhancement } from '../data/iconEnhancements';

const NodeInfoPanel = ({ node, onClose, onNameChange }) => {
    const [activeTab, setActiveTab] = useState('overview');

    if (!node) return null;

    const { id, data } = node;
    const { label, customName, iconId, color, svg, createdAt } = data;

    // Get comprehensive enhancement data
    const enhancement = getEnhancement(iconId);
    const { name: officialName, category: officialCategory, description, howToUse, connections } = enhancement;

    const formatDate = (dateString) => {
        if (!dateString) return 'Unknown';
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📋' },
        { id: 'howto', label: 'How to Use', icon: '💡' },
        { id: 'connections', label: 'Connections', icon: '🔗' }
    ];

    // Helper to get target name for connections
    const getTargetName = (targetId) => {
        const targetData = getEnhancement(targetId);
        return targetData.name || targetId;
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-96 glass-panel border-l border-white/20 z-50 flex flex-col"
                style={{
                    backdropFilter: 'blur(30px)',
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))'
                }}
            >
                {/* Header */}
                <div className="glass-panel border-b border-white/20 p-4 flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                        <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                                background: `linear-gradient(135deg, ${color}40, ${color}20)`,
                                boxShadow: `0 0 15px ${color}40`
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill={color}>
                                <path d={svg} />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-white truncate">
                                {officialName}
                            </h3>
                            <p className="text-xs text-white/60 truncate">{customName || label || officialName}</p>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/5 text-neon-cyan border border-white/10">
                                {officialCategory}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/60 hover:text-white transition-colors ml-2 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/20 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative ${activeTab === tab.id
                                ? 'text-neon-cyan'
                                : 'text-white/60 hover:text-white/80'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan"
                                    style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            {activeTab === 'overview' && (
                                <>
                                    {/* Description */}
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                        <h4 className="text-xs font-semibold text-neon-cyan mb-2 uppercase tracking-wide">About</h4>
                                        <p className="text-sm text-white/90 leading-relaxed">
                                            {description}
                                        </p>
                                    </div>

                                    {/* Basic Info */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wide px-1">Instance Details</h4>
                                        <div className="bg-black/20 rounded-lg p-3 space-y-2 border border-white/5">
                                            <InfoRow label="Node ID" value={id} mono />
                                            <InfoRow label="Type" value={iconId} mono />
                                            {createdAt && <InfoRow label="Created" value={formatDate(createdAt)} />}
                                        </div>
                                    </div>

                                    {/* Custom Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-white/40 uppercase tracking-wide px-1">Display Name</label>
                                        <input
                                            type="text"
                                            value={customName || ''}
                                            onChange={(e) => onNameChange(id, e.target.value)}
                                            placeholder={`Default: ${label}`}
                                            className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/20 text-white text-sm placeholder-white/20 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                                            maxLength={50}
                                        />
                                    </div>
                                </>
                            )}

                            {activeTab === 'howto' && howToUse && (
                                <>
                                    {/* Summary */}
                                    {howToUse.summary && (
                                        <div className="bg-gradient-to-br from-neon-violet/10 to-transparent p-4 rounded-lg border border-neon-violet/20">
                                            <h4 className="text-xs font-bold text-neon-violet mb-2 uppercase flex items-center gap-2">
                                                <span>🎯</span> Objective
                                            </h4>
                                            <p className="text-sm text-white/90 italic">
                                                "{howToUse.summary}"
                                            </p>
                                        </div>
                                    )}

                                    {/* Implementation */}
                                    {howToUse.implementation && howToUse.implementation.length > 0 && (
                                        <div>
                                            <h4 className="text-xs font-bold text-neon-cyan mb-3 uppercase tracking-wide">
                                                🛠️ Implementation
                                            </h4>
                                            <ol className="space-y-3">
                                                {howToUse.implementation.map((step, idx) => (
                                                    <li key={idx} className="text-sm text-white/80 flex gap-3 bg-white/5 p-3 rounded border border-white/5">
                                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs flex items-center justify-center font-bold border border-neon-cyan/30">
                                                            {idx + 1}
                                                        </span>
                                                        <span className="leading-snug">{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    )}

                                    {/* Best Practices */}
                                    {howToUse.bestPractices && howToUse.bestPractices.length > 0 && (
                                        <div>
                                            <h4 className="text-xs font-bold text-emerald-400 mb-3 uppercase tracking-wide">
                                                ✅ Best Practices
                                            </h4>
                                            <ul className="space-y-2">
                                                {howToUse.bestPractices.map((practice, idx) => (
                                                    <li key={idx} className="text-sm text-white/80 flex items-start gap-2 pl-2 border-l-2 border-emerald-500/30">
                                                        <span className="leading-snug">{practice}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}

                            {activeTab === 'connections' && connections && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-wide">
                                            Integration Points ({connections.length})
                                        </h4>
                                    </div>

                                    {connections.map((conn, idx) => (
                                        <div
                                            key={idx}
                                            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/30 rounded-xl p-3 transition-all duration-300"
                                        >
                                            {/* Header: Target Name & Direction */}
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className={`p-1.5 rounded-md ${conn.dataFlow === 'Inbound' ? 'bg-emerald-500/20 text-emerald-400' :
                                                            conn.dataFlow === 'Outbound' ? 'bg-blue-500/20 text-blue-400' :
                                                                'bg-purple-500/20 text-purple-400'
                                                        }`}>
                                                        {conn.dataFlow === 'Inbound' ? '↙️' :
                                                            conn.dataFlow === 'Outbound' ? '↗️' : '↔️'}
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-white/40 uppercase font-semibold block leading-none mb-0.5">Target</span>
                                                        <span className="text-sm font-bold text-white">
                                                            {getTargetName(conn.target)}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/40 text-white/60 border border-white/10">
                                                    {conn.protocol}
                                                </span>
                                            </div>

                                            {/* Purpose */}
                                            <div className="mb-2 pl-9">
                                                <p className="text-sm text-white/80 leading-snug">
                                                    {conn.purpose}
                                                </p>
                                            </div>

                                            {/* Footer: Data Flow */}
                                            <div className="pl-9 flex items-center gap-2">
                                                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${conn.dataFlow === 'Inbound' ? 'border-emerald-500/30 text-emerald-400' :
                                                        conn.dataFlow === 'Outbound' ? 'border-blue-500/30 text-blue-400' :
                                                            'border-purple-500/30 text-purple-400'
                                                    }`}>
                                                    {conn.dataFlow} Flow
                                                </span>
                                            </div>
                                        </div>
                                    ))}

                                    {connections.length === 0 && (
                                        <div className="text-center py-8 text-white/40 italic">
                                            No standard connections defined.
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const InfoRow = ({ label, value, mono = false }) => (
    <div className="flex items-start justify-between gap-2">
        <span className="text-xs text-white/60">{label}</span>
        <span className={`text-xs text-white text-right break-all ${mono ? 'font-mono' : ''}`}>
            {value}
        </span>
    </div>
);

export default NodeInfoPanel;
