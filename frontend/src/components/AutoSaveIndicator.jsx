import { motion, AnimatePresence } from 'framer-motion';

const AutoSaveIndicator = ({ status, lastSaved }) => {
    const getStatusConfig = () => {
        switch (status) {
            case 'saving':
                return {
                    icon: '💾',
                    text: 'Saving...',
                    color: 'text-yellow-400',
                    bgColor: 'bg-yellow-500/10',
                    borderColor: 'border-yellow-500/30'
                };
            case 'saved':
                return {
                    icon: '✓',
                    text: 'Saved',
                    color: 'text-green-400',
                    bgColor: 'bg-green-500/10',
                    borderColor: 'border-green-500/30'
                };
            case 'error':
                return {
                    icon: '⚠️',
                    text: 'Save failed',
                    color: 'text-red-400',
                    bgColor: 'bg-red-500/10',
                    borderColor: 'border-red-500/30'
                };
            default:
                return null;
        }
    };

    const config = getStatusConfig();
    if (!config) return null;

    const formatLastSaved = () => {
        if (!lastSaved) return '';
        const now = new Date();
        const diff = Math.floor((now - lastSaved) / 1000); // seconds

        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return lastSaved.toLocaleDateString();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`fixed top-20 right-6 z-40 px-4 py-2 rounded-lg border ${config.borderColor} ${config.bgColor} backdrop-blur-lg flex items-center gap-2`}
            >
                {/* Animated Icon */}
                <motion.span
                    className="text-lg"
                    animate={status === 'saving' ? {
                        rotate: [0, 360],
                        transition: { duration: 1, repeat: Infinity, ease: "linear" }
                    } : {}}
                >
                    {config.icon}
                </motion.span>

                {/* Status Text */}
                <div className="flex flex-col">
                    <span className={`text-sm font-semibold ${config.color}`}>
                        {config.text}
                    </span>
                    {status === 'saved' && lastSaved && (
                        <span className="text-xs text-white/60">
                            {formatLastSaved()}
                        </span>
                    )}
                </div>

                {/* Pulse Animation for Saving */}
                {status === 'saving' && (
                    <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-yellow-400/50"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default AutoSaveIndicator;
