import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConfirmModal from '../components/ConfirmModal';

const API_BASE_URL = 'http://localhost:5000/api';

const DashboardPage = () => {
    const [blueprints, setBlueprints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        total: 0,
        thisWeek: 0,
        thisMonth: 0
    });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [blueprintToDelete, setBlueprintToDelete] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        fetchBlueprints();
    }, []);

    const fetchBlueprints = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_BASE_URL}/blueprints`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = response.data;
            setBlueprints(data);

            // Calculate stats
            const now = new Date();
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

            const thisWeek = data.filter(b => new Date(b.created_at) > weekAgo).length;
            const thisMonth = data.filter(b => new Date(b.created_at) > monthAgo).length;

            setStats({
                total: data.length,
                thisWeek,
                thisMonth
            });

            setLoading(false);
        } catch (error) {
            console.error('Error fetching blueprints:', error);
            setLoading(false);
        }
    };

    const handleDelete = (id, name) => {
        setBlueprintToDelete({ id, name });
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!blueprintToDelete) return;

        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${API_BASE_URL}/blueprints/${blueprintToDelete.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            fetchBlueprints();
        } catch (error) {
            console.error('Error deleting blueprint:', error);
            alert('Failed to delete blueprint');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = Math.floor((now - date) / 1000); // seconds

        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            <div className="pt-24 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Welcome back, {user?.name}! 👋
                        </h1>
                        <p className="text-white/60">
                            Here's an overview of your cloud architecture blueprints
                        </p>
                    </motion.div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { label: 'Total Blueprints', value: stats.total, icon: '📊', color: 'cyan' },
                            { label: 'This Week', value: stats.thisWeek, icon: '📅', color: 'violet' },
                            { label: 'This Month', value: stats.thisMonth, icon: '📈', color: 'green' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel p-6 rounded-xl border border-white/20"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">{stat.icon}</span>
                                    <span className={`text-4xl font-bold text-neon-${stat.color}`}>
                                        {stat.value}
                                    </span>
                                </div>
                                <p className="text-white/60 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="mb-8 flex gap-4">
                        <Link to="/workspace">
                            <motion.button
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ✨ New Blueprint
                            </motion.button>
                        </Link>
                        <Link to="/help">
                            <motion.button
                                className="px-6 py-3 rounded-lg glass-panel border border-neon-cyan text-neon-cyan font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                📚 View Help
                            </motion.button>
                        </Link>
                    </div>

                    {/* Blueprints Grid */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Your Blueprints</h2>

                        {loading ? (
                            <div className="text-center py-12">
                                <div className="inline-block w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-white/60 mt-4">Loading blueprints...</p>
                            </div>
                        ) : blueprints.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="glass-panel p-12 rounded-xl border border-white/20 text-center"
                            >
                                <div className="text-6xl mb-4">🎨</div>
                                <h3 className="text-xl font-semibold text-white mb-2">No blueprints yet</h3>
                                <p className="text-white/60 mb-6">Create your first cloud architecture blueprint to get started!</p>
                                <Link to="/workspace">
                                    <motion.button
                                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Create Blueprint
                                    </motion.button>
                                </Link>
                            </motion.div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {blueprints.map((blueprint, idx) => (
                                    <motion.div
                                        key={blueprint.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="glass-panel p-6 rounded-xl border border-white/20 hover:border-neon-cyan transition-all group"
                                        whileHover={{ y: -5 }}
                                    >
                                        {/* Blueprint Preview */}
                                        <div className="w-full h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center border border-white/10">
                                            <span className="text-4xl">🏗️</span>
                                        </div>

                                        {/* Blueprint Info */}
                                        <h3 className="text-lg font-semibold text-white mb-2 truncate">
                                            {blueprint.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                                            <span>🕒</span>
                                            <span>Updated {formatDate(blueprint.updated_at)}</span>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-2">
                                            <Link to={`/workspace?load=${blueprint.id}`} className="flex-1">
                                                <motion.button
                                                    className="w-full px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan text-neon-cyan text-sm font-semibold hover:bg-neon-cyan/20 transition-all"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Open
                                                </motion.button>
                                            </Link>
                                            <motion.button
                                                onClick={() => handleDelete(blueprint.id, blueprint.name)}
                                                className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-all"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                🗑️
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ConfirmModal
                isOpen={showDeleteModal}
                onClose={() => {
                    setShowDeleteModal(false);
                    setBlueprintToDelete(null);
                }}
                onConfirm={confirmDelete}
                title="Delete Blueprint?"
                message={`Are you sure you want to delete "${blueprintToDelete?.name}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                isDangerous={true}
            />

            <Footer />
        </div>
    );
};

export default DashboardPage;
