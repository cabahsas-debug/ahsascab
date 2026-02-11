import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if a media query matches.
 * efficiently handles server-side rendering (SSR) by returning false initially
 * and only updating on the client side.
 *
 * @param query The media query string to match (e.g., '(min-width: 768px)')
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query: string): boolean {
    // Initialize with false for SSR consistency
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        // Ensure window exists (client-side)
        if (typeof window === 'undefined') return;

        const media = window.matchMedia(query);

        // Set initial value
        setMatches(media.matches);

        // Define listener
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add listener based on browser support
        if (media.addEventListener) {
            media.addEventListener('change', listener);
        } else {
            // Fallback for older browsers
            media.addListener(listener);
        }

        // Cleanup
        return () => {
            if (media.removeEventListener) {
                media.removeEventListener('change', listener);
            } else {
                media.removeListener(listener);
            }
        };
    }, [query]);

    return matches;
}
