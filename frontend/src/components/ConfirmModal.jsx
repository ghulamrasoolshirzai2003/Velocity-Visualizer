import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = 'Delete', cancelText = 'Cancel', isDangerous = true }) => {
    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
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
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
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
                            {/* Warning Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, type: 'spring', damping: 15 }}
                                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center relative"
                                style={{
                                    background: isDangerous
                                        ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))'
                                        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))',
                                    boxShadow: isDangerous
                                        ? '0 0 40px rgba(239, 68, 68, 0.3), inset 0 0 20px rgba(239, 68, 68, 0.1)'
                                        : '0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)'
                                }}
                            >
                                {isDangerous ? (
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                ) : (
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                )}
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center space-y-4"
                            >
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white">
                                    {title}
                                </h3>

                                {/* Message */}
                                <p className="text-white/80 text-base leading-relaxed">
                                    {message}
                                </p>
                            </motion.div>

                            {/* Actions */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-3 mt-8"
                            >
                                {/* Cancel Button */}
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-3 rounded-lg font-semibold text-white transition-all"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}
                                >
                                    {cancelText}
                                </button>

                                {/* Confirm Button */}
                                <button
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}
                                    className="flex-1 py-3 rounded-lg font-semibold text-white transition-all"
                                    style={{
                                        background: isDangerous
                                            ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.3), rgba(220, 38, 38, 0.3))'
                                            : 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(168, 85, 247, 0.2))',
                                        border: isDangerous
                                            ? '1px solid rgba(239, 68, 68, 0.5)'
                                            : '1px solid rgba(0, 240, 255, 0.3)',
                                        boxShadow: isDangerous
                                            ? '0 4px 15px rgba(239, 68, 68, 0.3)'
                                            : '0 4px 15px rgba(0, 240, 255, 0.2)'
                                    }}
                                >
                                    {confirmText}
                                </button>
                            </motion.div>

                            {/* Hint */}
                            <motion.div
                                className="mt-4 text-center text-xs text-white/40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Press ESC to cancel
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConfirmModal;
