import { motion } from 'framer-motion';
import { useReactFlow } from '@xyflow/react';

const ZoomControls = () => {
    const { zoomIn, zoomOut, fitView, setViewport } = useReactFlow();

    const handleZoomIn = () => {
        zoomIn({ duration: 300 });
    };

    const handleZoomOut = () => {
        zoomOut({ duration: 300 });
    };

    const handleFitView = () => {
        fitView({ duration: 300, padding: 0.2 });
    };

    const handleReset = () => {
        setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 300 });
    };

    const buttonClass = "glass-panel p-3 rounded-lg neon-border-cyan hover:shadow-glow-cyan transition-all";

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
            {/* Zoom In */}
            <motion.button
                onClick={handleZoomIn}
                className={buttonClass}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Zoom In"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#00f0ff"
                    className="drop-shadow-lg"
                >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            </motion.button>

            {/* Zoom Out */}
            <motion.button
                onClick={handleZoomOut}
                className={buttonClass}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Zoom Out"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#00f0ff"
                    className="drop-shadow-lg"
                >
                    <path d="M19 13H5v-2h14v2z" />
                </svg>
            </motion.button>

            {/* Fit View */}
            <motion.button
                onClick={handleFitView}
                className={buttonClass}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Fit to View"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#00f0ff"
                    className="drop-shadow-lg"
                >
                    <path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z" />
                </svg>
            </motion.button>

            {/* Reset */}
            <motion.button
                onClick={handleReset}
                className={buttonClass}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Reset View"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#00f0ff"
                    className="drop-shadow-lg"
                >
                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                </svg>
            </motion.button>
        </div>
    );
};

export default ZoomControls;
