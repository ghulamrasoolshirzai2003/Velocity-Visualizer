import { useEffect, useRef } from 'react';

/**
 * Custom hook for debounced auto-save functionality
 * @param {Function} callback - Function to call after debounce delay
 * @param {number} delay - Delay in milliseconds (default: 2000ms)
 * @param {Array} dependencies - Dependencies to watch for changes
 */
const useAutoSave = (callback, delay = 2000, dependencies = []) => {
    const timeoutRef = useRef(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip auto-save on first render (initial load)
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // Clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set new timeout for auto-save
        timeoutRef.current = setTimeout(() => {
            callback();
        }, delay);

        // Cleanup on unmount or dependency change
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, dependencies);

    // Cancel pending auto-save
    const cancelAutoSave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    // Trigger immediate save
    const saveNow = () => {
        cancelAutoSave();
        callback();
    };

    return { cancelAutoSave, saveNow };
};

export default useAutoSave;
