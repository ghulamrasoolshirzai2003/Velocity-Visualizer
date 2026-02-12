import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((toast) => {
        const id = Date.now() + Math.random();
        const newToast = {
            id,
            type: toast.type || 'info',
            message: toast.message,
            duration: toast.duration || 3000
        };

        setToasts(prev => [...prev, newToast]);

        // Auto-dismiss
        if (newToast.duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, newToast.duration);
        }
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
};

const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <div className="fixed top-20 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map(toast => (
                    <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const Toast = ({ toast, onClose }) => {
    const { type, message } = toast;

    const typeConfig = {
        success: {
            icon: '✅',
            color: '#10b981',
            bg: 'rgba(16, 185, 129, 0.1)',
            border: 'rgba(16, 185, 129, 0.3)'
        },
        error: {
            icon: '❌',
            color: '#ef4444',
            bg: 'rgba(239, 68, 68, 0.1)',
            border: 'rgba(239, 68, 68, 0.3)'
        },
        warning: {
            icon: '⚠️',
            color: '#f59e0b',
            bg: 'rgba(245, 158, 11, 0.1)',
            border: 'rgba(245, 158, 11, 0.3)'
        },
        info: {
            icon: 'ℹ️',
            color: '#00f0ff',
            bg: 'rgba(0, 240, 255, 0.1)',
            border: 'rgba(0, 240, 255, 0.3)'
        }
    };

    const config = typeConfig[type] || typeConfig.info;

    return (
        <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            className="glass-panel px-4 py-3 rounded-lg min-w-[300px] max-w-[400px] pointer-events-auto"
            style={{
                backdropFilter: 'blur(20px)',
                background: config.bg,
                border: `1px solid ${config.border}`,
                boxShadow: `0 8px 32px ${config.border}`
            }}
        >
            <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{config.icon}</span>
                <p className="text-sm text-white flex-1 leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className="text-white/60 hover:text-white transition-colors flex-shrink-0"
                >
                    ✕
                </button>
            </div>
        </motion.div>
    );
};

export default ToastProvider;
