import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toPng, toSvg } from 'html-to-image';
import { useToast } from './Toast';

const ExportMenu = ({ blueprintName, nodes, edges }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const menuRef = useRef(null);
    const { showToast } = useToast();

    const downloadFile = (dataUrl, filename) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
    };

    const exportToPng = async () => {
        try {
            setIsExporting(true);
            const element = document.querySelector('.react-flow__viewport');

            if (!element) {
                throw new Error('Canvas not found');
            }

            const dataUrl = await toPng(element, {
                backgroundColor: '#0f172a',
                quality: 1,
                pixelRatio: 2
            });

            downloadFile(dataUrl, `${blueprintName || 'blueprint'}.png`);
            showToast({
                type: 'success',
                message: 'Blueprint exported as PNG!'
            });
            setIsOpen(false);
        } catch (error) {
            console.error('PNG export error:', error);
            showToast({
                type: 'error',
                message: 'Failed to export PNG'
            });
        } finally {
            setIsExporting(false);
        }
    };

    const exportToSvg = async () => {
        try {
            setIsExporting(true);
            const element = document.querySelector('.react-flow__viewport');

            if (!element) {
                throw new Error('Canvas not found');
            }

            const dataUrl = await toSvg(element, {
                backgroundColor: '#0f172a'
            });

            downloadFile(dataUrl, `${blueprintName || 'blueprint'}.svg`);
            showToast({
                type: 'success',
                message: 'Blueprint exported as SVG!'
            });
            setIsOpen(false);
        } catch (error) {
            console.error('SVG export error:', error);
            showToast({
                type: 'error',
                message: 'Failed to export SVG'
            });
        } finally {
            setIsExporting(false);
        }
    };

    const exportToJson = () => {
        try {
            const data = {
                name: blueprintName || 'Untitled Blueprint',
                nodes,
                edges,
                exportedAt: new Date().toISOString(),
                version: '1.0'
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], {
                type: 'application/json'
            });

            const url = URL.createObjectURL(blob);
            downloadFile(url, `${blueprintName || 'blueprint'}.json`);
            URL.revokeObjectURL(url);

            showToast({
                type: 'success',
                message: 'Blueprint exported as JSON!'
            });
            setIsOpen(false);
        } catch (error) {
            console.error('JSON export error:', error);
            showToast({
                type: 'error',
                message: 'Failed to export JSON'
            });
        }
    };

    return (
        <div className="relative" ref={menuRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 rounded-lg glass-panel border border-white/20 text-white text-sm font-semibold hover:border-neon-cyan transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isExporting}
            >
                📥 Export
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full mt-2 right-0 w-48 glass-panel border border-white/20 rounded-lg overflow-hidden z-50"
                            style={{ backdropFilter: 'blur(20px)' }}
                        >
                            <ExportOption
                                icon="🖼️"
                                label="Export as PNG"
                                description="High-res image"
                                onClick={exportToPng}
                                disabled={isExporting}
                            />
                            <ExportOption
                                icon="📐"
                                label="Export as SVG"
                                description="Vector format"
                                onClick={exportToSvg}
                                disabled={isExporting}
                            />
                            <ExportOption
                                icon="📄"
                                label="Export as JSON"
                                description="Blueprint data"
                                onClick={exportToJson}
                                disabled={isExporting}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

const ExportOption = ({ icon, label, description, onClick, disabled }) => (
    <motion.button
        onClick={onClick}
        disabled={disabled}
        className="w-full px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/10 last:border-b-0 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={!disabled ? { x: 5 } : {}}
    >
        <div className="flex items-start gap-3">
            <span className="text-xl">{icon}</span>
            <div className="flex-1">
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-white/60">{description}</p>
            </div>
        </div>
    </motion.button>
);

export default ExportMenu;
