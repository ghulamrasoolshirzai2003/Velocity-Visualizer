import { motion } from 'framer-motion';

const IconTooltip = ({ icon, children }) => {
    return (
        <div className="relative group">
            {children}

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute left-full ml-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
                <div
                    className="glass-panel p-4 rounded-xl border border-white/20 w-72 shadow-2xl"
                    style={{
                        backdropFilter: 'blur(30px)',
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.95))',
                        boxShadow: `0 0 40px ${icon.color}40, 0 8px 32px rgba(0, 0, 0, 0.4)`
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                        <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                                background: `linear-gradient(135deg, ${icon.color}40, ${icon.color}20)`,
                                boxShadow: `0 0 20px ${icon.color}30`
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
                        <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm truncate">{icon.name}</h4>
                            <p
                                className="text-xs font-medium"
                                style={{ color: icon.color }}
                            >
                                {icon.category}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <p className="text-xs text-white/80 leading-relaxed">
                            {icon.description || `${icon.name} component for cloud architecture design.`}
                        </p>

                        {/* Use Cases */}
                        {icon.useCases && (
                            <div>
                                <p className="text-xs font-semibold text-white/60 mb-1">Use Cases:</p>
                                <ul className="text-xs text-white/70 space-y-0.5 list-disc list-inside">
                                    {icon.useCases.map((useCase, idx) => (
                                        <li key={idx}>{useCase}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Connection Info */}
                        <div className="pt-2 border-t border-white/10">
                            <p className="text-xs text-white/50">
                                💡 Drag to canvas to add this component
                            </p>
                        </div>
                    </div>

                    {/* Arrow pointer */}
                    <div
                        className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0"
                        style={{
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                            borderRight: `8px solid ${icon.color}20`
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default IconTooltip;
