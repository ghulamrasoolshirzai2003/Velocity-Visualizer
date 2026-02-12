import { useEffect } from 'react';

const useKeyboardShortcuts = ({
    onSave,
    onUndo,
    onRedo,
    onDelete,
    onSelectAll,
    onDuplicate,
    onEscape,
    onExport,
    onNew,
    onHelp,
    disabled = false
}) => {
    useEffect(() => {
        if (disabled) return;

        const handleKeyDown = (e) => {
            // Don't trigger shortcuts when typing in inputs
            const isInputFocused =
                document.activeElement?.tagName === 'INPUT' ||
                document.activeElement?.tagName === 'TEXTAREA' ||
                document.activeElement?.isContentEditable;

            if (isInputFocused) return;

            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const modifier = isMac ? e.metaKey : e.ctrlKey;

            // Ctrl/Cmd + S - Save
            if (modifier && e.key === 's') {
                e.preventDefault();
                onSave?.();
                return;
            }

            // Ctrl/Cmd + Z - Undo
            if (modifier && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                onUndo?.();
                return;
            }

            // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y - Redo
            if ((modifier && e.shiftKey && e.key === 'z') || (modifier && e.key === 'y')) {
                e.preventDefault();
                onRedo?.();
                return;
            }

            // Delete or Backspace - Delete selected
            if (e.key === 'Delete' || e.key === 'Backspace') {
                e.preventDefault();
                onDelete?.();
                return;
            }

            // Ctrl/Cmd + A - Select all
            if (modifier && e.key === 'a') {
                e.preventDefault();
                onSelectAll?.();
                return;
            }

            // Ctrl/Cmd + D - Duplicate
            if (modifier && e.key === 'd') {
                e.preventDefault();
                onDuplicate?.();
                return;
            }

            // Escape - Deselect / Close
            if (e.key === 'Escape') {
                onEscape?.();
                return;
            }

            // Ctrl/Cmd + E - Export
            if (modifier && e.key === 'e') {
                e.preventDefault();
                onExport?.();
                return;
            }

            // Ctrl/Cmd + N - New
            if (modifier && e.key === 'n') {
                e.preventDefault();
                onNew?.();
                return;
            }

            // Ctrl/Cmd + / - Help
            if (modifier && e.key === '/') {
                e.preventDefault();
                onHelp?.();
                return;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [
        onSave,
        onUndo,
        onRedo,
        onDelete,
        onSelectAll,
        onDuplicate,
        onEscape,
        onExport,
        onNew,
        onHelp,
        disabled
    ]);
};

export default useKeyboardShortcuts;
