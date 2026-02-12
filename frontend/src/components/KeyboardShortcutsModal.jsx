import { motion, AnimatePresence } from 'framer-motion';

const KeyboardShortcutsModal = ({ isOpen, onClose }) => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const mod = isMac ? '⌘' : 'Ctrl';

    const shortcuts = [
        {
            category: 'FILE OPERATIONS',
            items: [
                { keys: [`${mod}+S`], description: 'Save blueprint' },
                { keys: [`${mod}+N`], description: 'New blueprint' },
                { keys: [`${mod}+E`], description: 'Export menu' }
            ]
        },
        {
            category: 'EDITING',
            items: [
                { keys: [`${mod}+Z`], description: 'Undo' },
                { keys: [`${mod}+${isMac ? 'Shift+Z' : 'Y'}`], description: 'Redo' },
                { keys: ['Delete', 'Backspace'], description: 'Delete selected' },
                { keys: [`${mod}+D`], description: 'Duplicate selected' }
            ]
        },
        {
            category: 'SELECTION',
            items: [
                { keys: [`${mod}+A`], description: 'Select all nodes' },
                { keys: ['Escape'], description: 'Deselect all' },
                { keys: ['Click'], description: 'Select node' }
            ]
        },
        {
            category: 'NAVIGATION',
            items: [
                { keys: ['Scroll'], description: 'Pan canvas' },
                { keys: ['Ctrl+Scroll'], description: 'Zoom in/out' },
                { keys: ['Drag'], description: 'Move node' }
            ]
        },
        {
            category: 'OTHER',
            items: [
                { keys: [`${mod}+/`], description: 'Show this help' },
                { keys: ['Double-click'], description: 'Edit node name' }
            ]
        }
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative glass-panel border border-white/20 rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
                    style={{ backdropFilter: 'blur(30px)' }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">
                                ⌨️ Keyboard Shortcuts
                            </h2>
                            <p className="text-sm text-white/60">
                                Boost your productivity with these shortcuts
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/60 hover:text-white transition-colors text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Shortcuts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {shortcuts.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-semibold text-neon-cyan mb-3">
                                    {section.category}
                                </h3>
                                <div className="space-y-2">
                                    {section.items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className="flex items-center justify-between gap-4"
                                        >
                                            <span className="text-sm text-white/80">
                                                {item.description}
                                            </span>
                                            <div className="flex items-center gap-1 flex-shrink-0">
                                                {item.keys.map((key, keyIdx) => (
                                                    <span key={keyIdx}>
                                                        <kbd className="px-2 py-1 rounded bg-white/10 border border-white/20 text-xs font-mono text-white">
                                                            {key}
                                                        </kbd>
                                                        {keyIdx < item.keys.length - 1 && (
                                                            <span className="text-white/40 mx-1">or</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-xs text-white/40 text-center">
                            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-xs font-mono">Escape</kbd> or click outside to close
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default KeyboardShortcutsModal;
