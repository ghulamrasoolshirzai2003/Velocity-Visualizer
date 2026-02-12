import { motion } from 'framer-motion';
import ExportMenu from './ExportMenu';

const WorkspaceToolbar = ({
    onUndo,
    onRedo,
    canUndo,
    canRedo,
    undoCount,
    redoCount,
    onShowShortcuts,
    onClear,
    onFitView,
    blueprintName,
    nodes,
    edges
}) => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-30 glass-panel border border-white/20 rounded-xl px-4 py-2 flex items-center gap-2"
            style={{ backdropFilter: 'blur(20px)' }}
        >
            {/* Undo/Redo */}
            <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                <ToolbarButton
                    onClick={onUndo}
                    disabled={!canUndo}
                    tooltip="Undo (Ctrl+Z)"
                    badge={undoCount > 0 ? undoCount : null}
                >
                    ↶
                </ToolbarButton>
                <ToolbarButton
                    onClick={onRedo}
                    disabled={!canRedo}
                    tooltip="Redo (Ctrl+Y)"
                    badge={redoCount > 0 ? redoCount : null}
                >
                    ↷
                </ToolbarButton>
            </div>

            {/* Export */}
            <div className="pr-2 border-r border-white/10">
                <ExportMenu
                    blueprintName={blueprintName}
                    nodes={nodes}
                    edges={edges}
                />
            </div>

            {/* Utilities */}
            <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                <ToolbarButton
                    onClick={onShowShortcuts}
                    tooltip="Keyboard Shortcuts (Ctrl+/)"
                >
                    ⌨️
                </ToolbarButton>
                <ToolbarButton
                    onClick={onFitView}
                    tooltip="Fit View"
                >
                    ⊡
                </ToolbarButton>
            </div>

            {/* Clear */}
            <ToolbarButton
                onClick={onClear}
                tooltip="Clear Canvas"
                variant="danger"
            >
                🗑️
            </ToolbarButton>
        </motion.div>
    );
};

const ToolbarButton = ({
    children,
    onClick,
    disabled = false,
    tooltip,
    badge = null,
    variant = 'default'
}) => {
    const baseClasses = "relative px-3 py-2 rounded-lg text-sm font-semibold transition-all";
    const variantClasses = {
        default: "text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed",
        danger: "text-red-400 hover:bg-red-500/10 hover:border-red-500/30"
    };

    return (
        <div className="relative group">
            <motion.button
                onClick={onClick}
                disabled={disabled}
                className={`${baseClasses} ${variantClasses[variant]}`}
                whileHover={!disabled ? { scale: 1.05 } : {}}
                whileTap={!disabled ? { scale: 0.95 } : {}}
                title={tooltip}
            >
                {children}
                {badge !== null && badge > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan text-slate-950 text-[10px] font-bold rounded-full flex items-center justify-center">
                        {badge > 9 ? '9+' : badge}
                    </span>
                )}
            </motion.button>

            {/* Tooltip */}
            {tooltip && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-900 rotate-45"></div>
                </div>
            )}
        </div>
    );
};

export default WorkspaceToolbar;
