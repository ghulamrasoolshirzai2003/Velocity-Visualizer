import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    const sections = [
        {
            title: 'Information We Collect',
            content: [
                'When you create an account, we collect your name, email address, and encrypted password.',
                'We store your blueprint data, including nodes, connections, and metadata.',
                'We automatically collect usage data such as login times and feature usage for analytics.',
                'We do not collect or store payment information directly - all payments are processed through secure third-party providers.'
            ]
        },
        {
            title: 'How We Use Your Information',
            content: [
                'To provide and maintain the Velocity Visualizer service.',
                'To authenticate your account and secure your data.',
                'To save and sync your blueprints across devices.',
                'To send important service updates and notifications.',
                'To improve our service through analytics and user feedback.',
                'To prevent fraud and ensure platform security.'
            ]
        },
        {
            title: 'Data Security',
            content: [
                'All passwords are hashed using bcrypt with industry-standard salt rounds.',
                'We use JWT (JSON Web Tokens) for secure authentication.',
                'All data transmission is encrypted using HTTPS/TLS.',
                'Your blueprints are private and only accessible with your account credentials.',
                'We implement regular security audits and updates.',
                'Database backups are encrypted and stored securely.'
            ]
        },
        {
            title: 'Data Sharing',
            content: [
                'We do not sell your personal information to third parties.',
                'We do not share your blueprints with anyone unless you explicitly choose to share them.',
                'We may share anonymized, aggregated data for analytics purposes.',
                'We may disclose information if required by law or to protect our legal rights.',
                'Third-party service providers (hosting, analytics) may have access to data necessary to perform their services.'
            ]
        },
        {
            title: 'Your Rights',
            content: [
                'You have the right to access all data we store about you.',
                'You can request deletion of your account and all associated data.',
                'You can export your blueprints at any time.',
                'You can update your account information through your profile settings.',
                'You can opt out of non-essential communications.',
                'You can request a copy of our data processing activities.'
            ]
        },
        {
            title: 'Cookies and Tracking',
            content: [
                'We use HTTP-only cookies for authentication (JWT tokens).',
                'We use local storage to maintain your session across page refreshes.',
                'We may use analytics cookies to understand how users interact with our service.',
                'You can disable cookies in your browser, but this may affect functionality.',
                'We do not use third-party advertising cookies.'
            ]
        },
        {
            title: 'Data Retention',
            content: [
                'We retain your account data as long as your account is active.',
                'Deleted blueprints are permanently removed from our servers within 30 days.',
                'Account deletion requests are processed within 30 days.',
                'We may retain certain data for legal or security purposes as required by law.',
                'Backup data is retained for 90 days before permanent deletion.'
            ]
        },
        {
            title: 'Children\'s Privacy',
            content: [
                'Velocity Visualizer is not intended for users under 13 years of age.',
                'We do not knowingly collect information from children under 13.',
                'If we discover we have collected data from a child under 13, we will delete it immediately.',
                'Parents or guardians can contact us to request deletion of their child\'s data.'
            ]
        },
        {
            title: 'Changes to This Policy',
            content: [
                'We may update this privacy policy from time to time.',
                'We will notify you of significant changes via email or in-app notification.',
                'Continued use of the service after changes constitutes acceptance of the new policy.',
                'The "Last Updated" date at the top of this policy indicates when it was last revised.'
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
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-white/60 mb-2">
                            Your privacy is important to us
                        </p>
                        <p className="text-sm text-white/40">
                            Last Updated: February 8, 2026
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-4xl mx-auto px-6 mb-12">
                <motion.div
                    className="glass-panel p-8 rounded-2xl border border-neon-cyan/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(168, 85, 247, 0.05))'
                    }}
                >
                    <p className="text-white/80 leading-relaxed mb-4">
                        At Velocity Visualizer, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cloud architecture design platform.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                        By using Velocity Visualizer, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
                    </p>
                </motion.div>
            </div>

            {/* Policy Sections */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="glass-panel p-8 rounded-xl border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-neon-cyan">{idx + 1}.</span>
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.content.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex gap-3 text-white/70">
                                        <span className="text-neon-violet mt-1">•</span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Contact Section */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                <motion.div
                    className="glass-panel p-8 rounded-2xl border border-neon-violet/30 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(0, 240, 255, 0.1))'
                    }}
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
                    <p className="text-white/60 mb-6">
                        If you have any questions or concerns about this Privacy Policy, please contact us:
                    </p>
                    <div className="flex flex-col gap-2 text-white/80 mb-6">
                        <p>📧 Email: privacy@velocityvisualizer.com</p>
                        <p>🌐 Website: www.velocityvisualizer.com</p>
                    </div>
                    <Link to="/workspace">
                        <motion.button
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-white font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            ← Back to Workspace
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPage;
