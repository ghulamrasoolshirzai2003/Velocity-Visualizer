import { useState, useRef, useEffect } from 'react';
import { Handle, Position } from '@xyflow/react';
import { motion } from 'framer-motion';

const CustomNode = ({ id, data, selected }) => {
    const { label, customName, iconId, color, svg } = data;
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(customName || '');
    const inputRef = useRef(null);

    const displayName = customName || label;

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleDoubleClick = (e) => {
        e.stopPropagation();
        setIsEditing(true);
        setEditValue(customName || label);
    };

    const handleSave = () => {
        const trimmedValue = editValue.trim();
        if (trimmedValue && trimmedValue !== label) {
            // Update node data with custom name
            if (data.onNameChange) {
                data.onNameChange(id, trimmedValue);
            }
        } else if (!trimmedValue) {
            // Clear custom name if empty
            if (data.onNameChange) {
                data.onNameChange(id, '');
            }
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        } else if (e.key === 'Escape') {
            setEditValue(customName || label);
            setIsEditing(false);
        }
    };

    const handleBlur = () => {
        handleSave();
    };

    return (
        <motion.div
            className={`glass-node relative min-w-[100px] ${selected ? 'neon-border-cyan' : 'border-white/20'
                }`}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            {/* Connection Handles */}
            <Handle
                type="target"
                position={Position.Top}
                className="!bg-neon-cyan !w-3 !h-3 !border-2 !border-white/20"
            />
            <Handle
                type="source"
                position={Position.Bottom}
                className="!bg-neon-cyan !w-3 !h-3 !border-2 !border-white/20"
            />
            <Handle
                type="target"
                position={Position.Left}
                className="!bg-neon-cyan !w-3 !h-3 !border-2 !border-white/20"
            />
            <Handle
                type="source"
                position={Position.Right}
                className="!bg-neon-cyan !w-3 !h-3 !border-2 !border-white/20"
            />

            {/* Icon Container */}
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                        background: `linear-gradient(135deg, ${color}40, ${color}20)`,
                        boxShadow: `0 0 15px ${color}40`
                    }}
                    whileHover={{
                        boxShadow: `0 0 25px ${color}80`,
                        transition: { duration: 0.2 }
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={color}
                        className="drop-shadow-lg"
                    >
                        <path d={svg} />
                    </svg>
                </motion.div>

                {/* Label / Name Editor */}
                <div className="text-center w-full px-1" onDoubleClick={handleDoubleClick}>
                    {isEditing ? (
                        <input
                            ref={inputRef}
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onBlur={handleBlur}
                            className="text-xs font-semibold text-white bg-white/10 border border-neon-cyan rounded px-2 py-1 w-full text-center focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                            style={{ backdropFilter: 'blur(10px)' }}
                            maxLength={50}
                            placeholder="Enter component name..."
                        />
                    ) : (
                        <p
                            className={`text-xs font-semibold text-white drop-shadow-lg cursor-text ${customName ? 'text-neon-cyan' : ''
                                }`}
                            title="Double-click to edit"
                        >
                            {displayName}
                        </p>
                    )}
                    {customName && !isEditing && (
                        <p className="text-[10px] text-white/40 mt-0.5">{label}</p>
                    )}
                </div>
            </div>

            {/* Custom Name Indicator */}
            {customName && !isEditing && (
                <div
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
                        boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                    }}
                    title="Custom name"
                />
            )}

            {/* Glow Effect */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
                    filter: 'blur(10px)'
                }}
            />
        </motion.div>
    );
};

export default CustomNode;
