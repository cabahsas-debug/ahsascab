'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Loader2, X } from 'lucide-react';

interface MapAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    icon?: React.ReactNode;
    className?: string;
    label?: string;
    error?: string;
}

declare global {
    interface Window {
        google: any;
        initMapAutocomplete?: () => void;
    }
}

const MapAutocomplete: React.FC<MapAutocompleteProps> = ({
    value,
    onChange,
    placeholder,
    className = '',
    label,
    error
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const autocompleteRef = useRef<any>(null);

    useEffect(() => {
        if (!window.google) {
            // Script loading logic could be here, but assuming it's loaded in the layout or page
            return;
        }

        const initAutocomplete = () => {
            if (!inputRef.current) return;

            autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
                componentRestrictions: { country: "sa" },
                fields: ["address_components", "formatted_address", "geometry", "name"],
                types: ["establishment", "geocode"]
            });

            autocompleteRef.current.addListener("place_changed", () => {
                const place = autocompleteRef.current.getPlace();
                if (place.formatted_address) {
                    onChange(place.formatted_address);
                } else if (place.name) {
                    onChange(place.name);
                }
            });
        };

        initAutocomplete();

        return () => {
            if (window.google.maps.event) {
                window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
            }
        };
    }, []);

    const handleClear = () => {
        onChange('');
        if (inputRef.current) inputRef.current.focus();
    };

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary z-10 transition-colors pointer-events-none">
                    <MapPin size={22} />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`
                        w-full pl-14 pr-10 py-4 bg-slate-50 dark:bg-slate-800/50 
                        border border-slate-200 dark:border-slate-700 
                        rounded-xl outline-none transition-all duration-300
                        focus:border-secondary focus:ring-4 focus:ring-secondary/10 focus:bg-white
                        text-primary dark:text-white font-medium placeholder:text-slate-400
                        ${error ? 'border-red-500 bg-red-50' : ''}
                    `}
                />

                {value && (
                    <button
                        onClick={handleClear}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary dark:hover:text-white transition-colors p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                        <X size={16} />
                    </button>
                )}

                {isLoading && (
                    <div className="absolute right-12 top-1/2 -translate-y-1/2">
                        <Loader2 size={18} className="animate-spin text-secondary" />
                    </div>
                )}
            </div>
            {error && <span className="text-xs text-red-500 font-medium ml-1 flex items-center gap-1">Required</span>}
        </div>
    );
};

export default MapAutocomplete;
