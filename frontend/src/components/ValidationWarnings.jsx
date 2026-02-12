import { motion, AnimatePresence } from 'framer-motion';
import { validateConnection } from '../utils/validationRules';

const ValidationWarnings = ({ edges, nodes }) => {
    const warnings = [];

    // Check all connections for validation issues
    edges.forEach(edge => {
        const sourceNode = nodes.find(n => n.id === edge.source);
        const targetNode = nodes.find(n => n.id === edge.target);

        if (sourceNode && targetNode) {
            const edgeWarnings = validateConnection(sourceNode, targetNode);
            edgeWarnings.forEach(warning => {
                warnings.push({
                    ...warning,
                    edgeId: edge.id,
                    source: sourceNode.data.label,
                    target: targetNode.data.label
                });
            });
        }
    });

    if (warnings.length === 0) return null;

    // Group warnings by severity
    const errors = warnings.filter(w => w.severity === 'error');
    const warningItems = warnings.filter(w => w.severity === 'warning');
    const info = warnings.filter(w => w.severity === 'info');

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4"
            >
                <div className="glass-panel rounded-xl border border-white/20 p-4 space-y-3"
                    style={{
                        backdropFilter: 'blur(30px)',
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))'
                    }}
                >
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-white">
                            Architecture Validation
                        </h3>
                        <div className="flex gap-2 text-xs">
                            {errors.length > 0 && (
                                <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/40">
                                    {errors.length} Error{errors.length !== 1 ? 's' : ''}
                                </span>
                            )}
                            {warningItems.length > 0 && (
                                <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
                                    {warningItems.length} Warning{warningItems.length !== 1 ? 's' : ''}
                                </span>
                            )}
                            {info.length > 0 && (
                                <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/40">
                                    {info.length} Suggestion{info.length !== 1 ? 's' : ''}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                        {/* Errors */}
                        {errors.map((warning, idx) => (
                            <WarningItem key={`error-${idx}`} warning={warning} />
                        ))}

                        {/* Warnings */}
                        {warningItems.map((warning, idx) => (
                            <WarningItem key={`warning-${idx}`} warning={warning} />
                        ))}

                        {/* Info/Suggestions */}
                        {info.map((warning, idx) => (
                            <WarningItem key={`info-${idx}`} warning={warning} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

const WarningItem = ({ warning }) => {
    const { severity, message, suggestion } = warning;

    const severityConfig = {
        error: {
            bg: 'bg-red-500/10',
            border: 'border-red-500/30',
            text: 'text-red-400',
            icon: '🚫'
        },
        warning: {
            bg: 'bg-yellow-500/10',
            border: 'border-yellow-500/30',
            text: 'text-yellow-400',
            icon: '⚠️'
        },
        info: {
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/30',
            text: 'text-blue-400',
            icon: '💡'
        }
    };

    const config = severityConfig[severity] || severityConfig.info;

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`${config.bg} ${config.border} border rounded-lg p-3 space-y-1.5`}
        >
            <p className={`text-xs ${config.text} font-medium flex items-start gap-2`}>
                <span className="flex-shrink-0">{config.icon}</span>
                <span className="flex-1">{message}</span>
            </p>
            {suggestion && (
                <p className="text-xs text-white/60 pl-6">
                    <span className="font-semibold">Suggestion:</span> {suggestion}
                </p>
            )}
        </motion.div>
    );
};

export default ValidationWarnings;
