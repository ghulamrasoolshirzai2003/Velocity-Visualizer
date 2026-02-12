import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastProvider, useToast } from '../components/Toast';

const HelpPageContent = () => {
    const { showToast } = useToast();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleVideoClick = () => {
        showToast({ message: 'Video guides are coming soon!', type: 'info' });
    };

    const handleContactSupport = () => {
        window.location.href = 'mailto:support@velocity-visualizer.com';
        showToast({ message: 'Opening email client...', type: 'success' });
    };

    const sections = [
        {
            id: 'getting-started',
            title: '🚀 Getting Started',
            icon: '🎯',
            items: [
                {
                    question: 'What is Velocity Visualizer?',
                    answer: 'Velocity Visualizer is a cloud architecture design tool that helps you create, visualize, and manage infrastructure blueprints using an intuitive drag-and-drop interface.'
                },
                {
                    question: 'How do I create my first blueprint?',
                    answer: 'Simply drag icons from the sidebar onto the canvas, connect them by dragging from one node to another, and save your blueprint with a name.'
                },
                {
                    question: 'What are the different icon categories?',
                    answer: 'Icons are organized into 5 categories: Security (pink), Networking (cyan), Compute (purple), Storage (green), and DevOps (orange). Each category contains 8+ specialized components.'
                }
            ]
        },
        {
            id: 'saving-loading',
            title: '💾 Saving & Loading',
            icon: '📁',
            items: [
                {
                    question: 'How does auto-save work?',
                    answer: 'Once you save a blueprint, any changes you make are automatically saved after 2 seconds of inactivity. You\'ll see a "Saving..." indicator in the top-right corner.'
                },
                {
                    question: 'Where are my blueprints stored?',
                    answer: 'All blueprints are securely stored in your account and are only accessible to you. They\'re automatically synced across devices when you log in.'
                },
                {
                    question: 'Can I export my blueprints?',
                    answer: 'Currently, blueprints are stored in JSON format. Export functionality for PNG/SVG is coming soon!'
                }
            ]
        },
        {
            id: 'connections',
            title: '🔗 Connections & Validation',
            icon: '⚡',
            items: [
                {
                    question: 'How do I connect nodes?',
                    answer: 'Click and drag from any connection point (top, bottom, left, or right) of a node to another node. The connection will be created automatically.'
                },
                {
                    question: 'What are connection validation rules?',
                    answer: 'The system prevents unsafe connections, such as directly connecting public users to sensitive databases. You\'ll need to use security layers like WAF or API Gateway.'
                },
                {
                    question: 'Can I delete connections?',
                    answer: 'Yes! Click on any connection line and press Delete or Backspace to remove it.'
                }
            ]
        },
        {
            id: 'canvas-controls',
            title: '🎨 Canvas Controls',
            icon: '🖱️',
            items: [
                {
                    question: 'How do I zoom in/out?',
                    answer: 'Use your mouse wheel to zoom, or use the zoom controls in the bottom-right corner. You can also use Ctrl + scroll for finer control.'
                },
                {
                    question: 'How do I pan the canvas?',
                    answer: 'Click and drag on empty space to pan around the canvas. You can also use the minimap in the bottom-left corner for quick navigation.'
                },
                {
                    question: 'How do I select multiple nodes?',
                    answer: 'Hold Shift and click on nodes to select multiple, or click and drag to create a selection box around multiple nodes.'
                }
            ]
        },
        {
            id: 'security',
            title: '🔐 Account & Security',
            icon: '🛡️',
            items: [
                {
                    question: 'Is my data secure?',
                    answer: 'Yes! We use industry-standard JWT authentication and bcrypt password hashing. Your blueprints are private and only accessible with your account credentials.'
                },
                {
                    question: 'How do I change my password?',
                    answer: 'Click on your profile in the top-right corner and select "Settings" to update your password and account information.'
                },
                {
                    question: 'Can I share blueprints with others?',
                    answer: 'Blueprint sharing functionality is coming soon! You\'ll be able to generate public links or collaborate with team members.'
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan bg-clip-text text-transparent mb-4">
                            Help & Documentation
                        </h1>
                        <p className="text-xl text-white/60">
                            Everything you need to know about Velocity Visualizer
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="max-w-4xl mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                        className="glass-panel p-6 rounded-xl border border-white/20 text-center hover:border-neon-cyan transition-all cursor-pointer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                        onClick={() => scrollToSection('getting-started')}
                    >
                        <div className="text-4xl mb-3">📚</div>
                        <h3 className="text-lg font-semibold text-white mb-1">Tutorials</h3>
                        <p className="text-sm text-white/60">Step-by-step guides</p>
                    </motion.div>

                    <motion.div
                        className="glass-panel p-6 rounded-xl border border-white/20 text-center hover:border-neon-cyan transition-all cursor-pointer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        onClick={() => scrollToSection('canvas-controls')}
                    >
                        <div className="text-4xl mb-3">💡</div>
                        <h3 className="text-lg font-semibold text-white mb-1">Tips & Tricks</h3>
                        <p className="text-sm text-white/60">Pro user shortcuts</p>
                    </motion.div>

                    <motion.div
                        className="glass-panel p-6 rounded-xl border border-white/20 text-center hover:border-neon-cyan transition-all cursor-pointer"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={handleVideoClick}
                    >
                        <div className="text-4xl mb-3">🎥</div>
                        <h3 className="text-lg font-semibold text-white mb-1">Video Guides</h3>
                        <p className="text-sm text-white/60">Watch and learn</p>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Sections */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                {sections.map((section, sectionIdx) => (
                    <motion.div
                        key={sectionIdx}
                        id={section.id}
                        className="mb-12 scroll-mt-24" // scroll-mt-24 ensures header doesn't cover content
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: sectionIdx * 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">{section.icon}</span>
                            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                        </div>

                        <div className="space-y-4">
                            {section.items.map((item, itemIdx) => (
                                <motion.div
                                    key={itemIdx}
                                    className="glass-panel p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                                    whileHover={{ x: 5 }}
                                >
                                    <h3 className="text-lg font-semibold text-neon-cyan mb-3">
                                        {item.question}
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Contact Support */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                <motion.div
                    className="glass-panel p-8 rounded-2xl border border-neon-violet/30 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 240, 255, 0.1))'
                    }}
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
                    <p className="text-white/60 mb-6">
                        Can't find what you're looking for? Our support team is here to help!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <motion.button
                            onClick={handleContactSupport}
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📧 Contact Support
                        </motion.button>
                        <Link to="/workspace">
                            <motion.button
                                className="px-6 py-3 rounded-lg glass-panel border border-neon-cyan text-neon-cyan font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                ← Back to Workspace
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

const HelpPage = () => {
    return (
        <ToastProvider>
            <HelpPageContent />
        </ToastProvider>
    );
};

export default HelpPage;
