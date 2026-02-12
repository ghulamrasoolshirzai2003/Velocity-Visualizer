import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-30 glass-panel border-b border-white/20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo and Brand */}
                <Link to="/workspace" className="flex items-center gap-4">
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Animated Logo */}
                        <div className="relative w-12 h-12">
                            <motion.div
                                className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                className="relative z-10"
                            >
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00f0ff" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                                {/* Velocity/Speed Icon */}
                                <path
                                    d="M8 24L16 16L24 24L32 16L40 24M8 32L16 24L24 32L32 24L40 32"
                                    stroke="url(#logoGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    className="drop-shadow-glow-cyan"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* App Name */}
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan bg-clip-text text-transparent animate-gradient">
                            Velocity Visualizer
                        </h1>
                        <p className="text-xs text-white/60">Cloud Architecture Designer</p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/workspace">Workspace</NavLink>
                    <NavLink to="/templates">Templates</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/privacy">Privacy</NavLink>
                </nav>

                {/* User Section */}
                <div className="flex items-center gap-3">
                    {isAuthenticated && user ? (
                        <div className="relative">
                            <motion.button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center gap-3 px-4 py-2 rounded-lg glass-panel border border-neon-cyan/30 hover:border-neon-cyan transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* User Avatar */}
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center text-white font-bold text-sm">
                                    {user.name?.charAt(0).toUpperCase() || 'U'}
                                </div>
                                <div className="text-left hidden sm:block">
                                    <p className="text-sm font-semibold text-white">{user.name}</p>
                                    <p className="text-xs text-white/60">{user.email}</p>
                                </div>
                                {/* Dropdown Arrow */}
                                <motion.svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="text-white/60"
                                    animate={{ rotate: showUserMenu ? 180 : 0 }}
                                >
                                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </motion.svg>
                            </motion.button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {showUserMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-48 glass-panel border border-white/20 rounded-lg overflow-hidden"
                                        style={{
                                            backdropFilter: 'blur(20px)',
                                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))'
                                        }}
                                    >
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-neon-cyan transition-all"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            👤 Profile
                                        </Link>
                                        <Link
                                            to="/settings"
                                            className="block px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-neon-cyan transition-all"
                                            onClick={() => setShowUserMenu(false)}
                                        >
                                            ⚙️ Settings
                                        </Link>
                                        <div className="border-t border-white/10"></div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-all"
                                        >
                                            🚪 Logout
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <motion.button
                                    className="px-4 py-2 rounded-lg glass-panel neon-border-cyan text-neon-cyan text-sm font-semibold hover:shadow-glow-cyan transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Login
                                </motion.button>
                            </Link>
                            <Link to="/signup">
                                <motion.button
                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white text-sm font-semibold hover:shadow-glow-violet transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Sign Up
                                </motion.button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </motion.header>
    );
};

const NavLink = ({ to, children }) => {
    return (
        <Link to={to}>
            <motion.div
                className="text-sm text-white/80 hover:text-neon-cyan transition-colors relative group"
                whileHover={{ y: -2 }}
            >
                {children}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
            </motion.div>
        </Link>
    );
};

export default Header;
