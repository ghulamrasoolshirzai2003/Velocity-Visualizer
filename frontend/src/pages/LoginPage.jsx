import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await login(email, password);

        if (result.success) {
            navigate('/workspace');
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-6">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ top: '10%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full bg-neon-violet/10 blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ bottom: '10%', right: '10%' }}
                />
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md"
            >
                <div
                    className="glass-panel p-8 rounded-2xl border border-white/20"
                    style={{
                        backdropFilter: 'blur(30px)',
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85))',
                        boxShadow: '0 8px 32px rgba(0, 240, 255, 0.1)'
                    }}
                >
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <motion.div
                            className="inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan bg-clip-text text-transparent">
                                Velocity Visualizer
                            </h1>
                            <p className="text-sm text-white/60 mt-2">Cloud Architecture Designer</p>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h2 className="text-2xl font-bold text-white text-center mb-6">Welcome Back</h2>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-500/10 border border-red-500/50 rounded-lg p-3"
                            >
                                <p className="text-red-400 text-sm">⚠️ {error}</p>
                            </motion.div>
                        )}

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full glass-panel px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="w-full glass-panel px-4 py-3 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold hover:shadow-glow-violet transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: loading ? 1 : 1.02 }}
                            whileTap={{ scale: loading ? 1 : 0.98 }}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </motion.button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-slate-950 text-white/60">Don't have an account?</span>
                            </div>
                        </div>

                        {/* Signup Link */}
                        <Link to="/signup">
                            <motion.button
                                type="button"
                                className="w-full py-3 rounded-lg glass-panel border border-neon-cyan text-neon-cyan font-semibold hover:shadow-glow-cyan transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Create Account
                            </motion.button>
                        </Link>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
