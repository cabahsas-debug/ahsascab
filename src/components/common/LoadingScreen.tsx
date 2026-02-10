'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './Preloader.module.css';

export default function LoadingScreen() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return (
        <div className={styles.preloader} style={{ zIndex: 999999 }}>
            <div className={styles.content}>
                <div className={styles.loaderContainer}>
                    {/* Rotating Gold Ring */}
                    <svg className={styles.spinner} viewBox="0 0 100 100">
                        <circle
                            className={styles.spinnerPath}
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            strokeWidth="2"
                        />
                    </svg>

                    {/* Static Inner Border */}
                    <div className={styles.innerCircle}></div>

                    {/* Logo */}
                    <div className={styles.logoImage}>
                        <Image
                            src="/logo.png"
                            alt="Ahsas Cab"
                            fill
                            className="object-contain"
                            priority
                            sizes="140px"
                        />
                    </div>
                </div>

                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>Ahsas Cab</h1>
                    <div className={styles.divider}></div>
                    <p className={styles.subtitle}>Premium Journey</p>
                </div>
            </div>
        </div>
    );
}
