import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const SuccessModal = ({ isOpen, onClose, title, message, blueprintName }) => {
    // Auto-close after 3 seconds
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
                    >
                        <div
                            className="glass-panel rounded-2xl p-8 border border-white/20 relative overflow-hidden"
                            style={{
                                backdropFilter: 'blur(30px)',
                                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))'
                            }}
                        >
                            {/* Animated Background Gradient */}
                            <motion.div
                                className="absolute inset-0 opacity-20"
                                animate={{
                                    background: [
                                        'radial-gradient(circle at 0% 0%, #00f0ff 0%, transparent 50%)',
                                        'radial-gradient(circle at 100% 100%, #a855f7 0%, transparent 50%)',
                                        'radial-gradient(circle at 0% 100%, #00f0ff 0%, transparent 50%)',
                                        'radial-gradient(circle at 100% 0%, #a855f7 0%, transparent 50%)',
                                        'radial-gradient(circle at 0% 0%, #00f0ff 0%, transparent 50%)'
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            {/* Success Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
                                    boxShadow: '0 0 40px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1)'
                                }}
                            >
                                {/* Checkmark */}
                                <motion.svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#22c55e"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <motion.path
                                        d="M20 6L9 17l-5-5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
                                    />
                                </motion.svg>

                                {/* Pulsing Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-green-500/50"
                                    animate={{
                                        scale: [1, 1.3, 1.3],
                                        opacity: [0.5, 0, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'easeOut'
                                    }}
                                />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-center space-y-3"
                            >
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white">
                                    {title || 'Success!'}
                                </h3>

                                {/* Message */}
                                <p className="text-white/80 text-base leading-relaxed">
                                    {message || 'Your blueprint has been saved successfully!'}
                                </p>

                                {/* Blueprint Name */}
                                {blueprintName && (
                                    <div
                                        className="inline-block px-4 py-2 rounded-lg mt-2"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(168, 85, 247, 0.1))',
                                            border: '1px solid rgba(0, 240, 255, 0.3)'
                                        }}
                                    >
                                        <p className="text-sm text-white/60 mb-1">Blueprint Name</p>
                                        <p className="text-neon-cyan font-semibold">{blueprintName}</p>
                                    </div>
                                )}
                            </motion.div>

                            {/* Close Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                onClick={onClose}
                                className="mt-6 w-full py-3 rounded-lg font-semibold text-white transition-all"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(168, 85, 247, 0.2))',
                                    border: '1px solid rgba(0, 240, 255, 0.3)',
                                    boxShadow: '0 4px 15px rgba(0, 240, 255, 0.2)'
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 6px 20px rgba(0, 240, 255, 0.3)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Continue
                            </motion.button>

                            {/* Auto-close indicator */}
                            <motion.div
                                className="mt-3 text-center text-xs text-white/40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                Auto-closing in 3 seconds...
                            </motion.div>

                            {/* Progress Bar */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet"
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: 3, ease: 'linear' }}
                                style={{
                                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                                }}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
