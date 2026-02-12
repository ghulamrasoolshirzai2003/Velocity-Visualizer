import { useState, useCallback, useRef, useEffect } from 'react';

const useHistory = (initialState, delay = 500) => {
    const [state, setState] = useState({
        past: [],
        present: initialState,
        future: []
    });

    const timeoutRef = useRef(null);
    const isUndoRedoRef = useRef(false);

    // Debounced set function
    const set = useCallback((newPresent) => {
        // Skip if this is from undo/redo
        if (isUndoRedoRef.current) {
            isUndoRedoRef.current = false;
            return;
        }

        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Debounce the state update
        timeoutRef.current = setTimeout(() => {
            setState(prev => {
                // Skip if state hasn't changed
                if (JSON.stringify(prev.present) === JSON.stringify(newPresent)) {
                    return prev;
                }

                return {
                    past: [...prev.past, prev.present].slice(-50), // Keep max 50 states
                    present: newPresent,
                    future: [] // Clear future on new action
                };
            });
        }, delay);
    }, [delay]);

    const undo = useCallback(() => {
        setState(prev => {
            if (prev.past.length === 0) return prev;

            const previous = prev.past[prev.past.length - 1];
            const newPast = prev.past.slice(0, prev.past.length - 1);

            isUndoRedoRef.current = true;

            return {
                past: newPast,
                present: previous,
                future: [prev.present, ...prev.future]
            };
        });
    }, []);

    const redo = useCallback(() => {
        setState(prev => {
            if (prev.future.length === 0) return prev;

            const next = prev.future[0];
            const newFuture = prev.future.slice(1);

            isUndoRedoRef.current = true;

            return {
                past: [...prev.past, prev.present],
                present: next,
                future: newFuture
            };
        });
    }, []);

    const reset = useCallback((newState) => {
        setState({
            past: [],
            present: newState,
            future: []
        });
    }, []);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return {
        state: state.present,
        set,
        undo,
        redo,
        reset,
        canUndo: state.past.length > 0,
        canRedo: state.future.length > 0,
        undoCount: state.past.length,
        redoCount: state.future.length
    };
};

export default useHistory;
