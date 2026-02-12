import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { icons, iconCategories } from '../data/iconData';
import IconTooltip from './IconTooltip';

const Sidebar = ({ onAddNode, onSaveBlueprint, onLoadBlueprint, onDeleteBlueprint, blueprints }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [blueprintName, setBlueprintName] = useState('');
    const [activeCategory, setActiveCategory] = useState(iconCategories.SECURITY);

    const handleDragStart = (event, icon) => {
        // Add iconId to the data so it matches what NodeInfoPanel expects
        const dragData = {
            ...icon,
            iconId: icon.id,
            label: icon.name // Ensure label is set to name
        };
        event.dataTransfer.setData('application/reactflow', JSON.stringify(dragData));
        event.dataTransfer.effectAllowed = 'move';
    };

    const handleSave = () => {
        if (blueprintName.trim()) {
            onSaveBlueprint(blueprintName);
            setBlueprintName('');
        }
    };

    const categorizedIcons = Object.values(iconCategories).map(category => ({
        name: category,
        items: icons.filter(icon => icon.category === category)
    }));

    return (
        <>
            {/* Hamburger Menu Button - Only show when sidebar is closed */}
            {!isExpanded && (
                <motion.button
                    className="fixed top-24 left-6 z-50 p-4 rounded-xl"
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        backdropFilter: 'blur(20px)',
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(168, 85, 247, 0.15))',
                        border: '1px solid rgba(0, 240, 255, 0.3)',
                        boxShadow: '0 8px 32px rgba(0, 240, 255, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                    }}
                    title="Open Menu"
                >
                    <div className="w-7 h-6 flex flex-col justify-between relative">
                        <span
                            className="w-full h-0.5 rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                                boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                            }}
                        />
                        <span
                            className="w-full h-0.5 rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                                boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                            }}
                        />
                        <span
                            className="w-full h-0.5 rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, #00f0ff, #a855f7)',
                                boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                            }}
                        />
                    </div>
                </motion.button>
            )}

            {/* Sidebar Panel */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -400, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed left-0 top-0 h-screen w-80 glass-panel border-r border-white/20 z-40 overflow-y-auto"
                        style={{
                            backdropFilter: 'blur(30px)',
                            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))'
                        }}
                    >
                        {/* Close Button - Top Right */}
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="absolute top-4 right-4 z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
                            title="Close Menu"
                        >
                            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-6 space-y-6">
                            {/* Component Library Header */}
                            <div className="pt-6">
                                <h2 className="text-xl font-bold text-white/90 mb-6">
                                    Component Library
                                </h2>
                            </div>

                            {/* Save/Rename Blueprint Section */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-white/80">
                                    {blueprints && blueprints.length > 0 ? 'Rename Blueprint' : 'Save Blueprint'}
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Blueprint name..."
                                    value={blueprintName}
                                    onChange={(e) => setBlueprintName(e.target.value)}
                                    className="w-full glass-panel px-3 py-2 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:neon-border-cyan"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                                />
                                <motion.button
                                    onClick={handleSave}
                                    className="w-full btn-glass neon-border-cyan text-neon-cyan font-semibold"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    💾 {blueprints && blueprints.length > 0 ? 'Rename' : 'Save'} Blueprint
                                </motion.button>
                                <p className="text-xs text-white/40 text-center">
                                    Auto-saves every 2 seconds
                                </p>
                            </div>

                            {/* Load Blueprint Section */}
                            {blueprints && blueprints.length > 0 && (
                                <div className="space-y-2">
                                    <h3 className="text-sm font-semibold text-white/80">Load Blueprint</h3>
                                    <div className="space-y-2 max-h-40 overflow-y-auto">
                                        {blueprints.map((blueprint) => (
                                            <div
                                                key={blueprint.id}
                                                className="glass-panel p-2 rounded-lg flex items-center justify-between group"
                                            >
                                                <motion.button
                                                    onClick={() => onLoadBlueprint(blueprint.id)}
                                                    className="flex-1 text-left text-sm text-white/80 hover:text-neon-cyan transition-colors"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    📋 {blueprint.name}
                                                </motion.button>
                                                <motion.button
                                                    onClick={() => onDeleteBlueprint(blueprint.id)}
                                                    className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all ml-2"
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    🗑️
                                                </motion.button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Category Tabs */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-white/80">Component Palette</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Object.values(iconCategories).map((category) => (
                                        <motion.button
                                            key={category}
                                            onClick={() => setActiveCategory(category)}
                                            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${activeCategory === category
                                                ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan'
                                                : 'glass-panel text-white/60 hover:text-white'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {category}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Icon Grid */}
                            <div className="space-y-2">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2"
                                    >
                                        {icons
                                            .filter(icon => icon.category === activeCategory)
                                            .map((icon) => (
                                                <IconTooltip key={icon.id} icon={icon}>
                                                    <motion.div
                                                        draggable
                                                        onDragStart={(e) => handleDragStart(e, icon)}
                                                        className="glass-node cursor-move group relative"
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        title=""
                                                    >
                                                        <div className="flex flex-col items-center gap-2">
                                                            <div
                                                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                                                style={{
                                                                    background: `linear-gradient(135deg, ${icon.color}40, ${icon.color}20)`,
                                                                    boxShadow: `0 0 15px ${icon.color}30`
                                                                }}
                                                            >
                                                                <svg
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill={icon.color}
                                                                >
                                                                    <path d={icon.svg} />
                                                                </svg>
                                                            </div>
                                                            <p className="text-xs text-center text-white/80 group-hover:text-white transition-colors">
                                                                {icon.name}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                </IconTooltip>
                                            ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>


                        </div >
                    </motion.div >
                )}
            </AnimatePresence >
        </>
    );
};

export default Sidebar;
