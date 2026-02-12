import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <motion.footer
            className="fixed bottom-0 left-0 right-0 z-30 glass-panel border-t border-white/20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Links */}
                <div className="flex items-center gap-6 text-xs">
                    <FooterLink to="/help">Help</FooterLink>
                    <FooterLink to="/privacy">Privacy</FooterLink>
                    <FooterLink to="/dashboard">Dashboard</FooterLink>
                    <FooterLink to="/workspace">Workspace</FooterLink>
                </div>



                {/* Copyright */}
                <div className="text-xs text-white/40">
                    © 2026 Velocity Visualizer
                </div>
            </div>
        </motion.footer>
    );
};

const FooterLink = ({ to, children }) => {
    return (
        <Link to={to}>
            <motion.div
                className="text-white/60 hover:text-neon-cyan transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
            >
                {children}
            </motion.div>
        </Link>
    );
};

export default Footer;
