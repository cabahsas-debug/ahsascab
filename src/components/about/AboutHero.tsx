'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './AboutHero.module.css';

export default function AboutHero() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero}>
            <div
                className={styles.parallaxWrapper}
                style={{ transform: `translateY(${offset * 0.5}px)` }}
            >
                <Image
                    src="/images/blog/makkah-haram-view-new.png"
                    alt="Makkah Background"
                    fill
                    priority
                    className={styles.bgImage}
                    quality={90}
                />
            </div>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={`${styles.title} animate-fade-in-up`}>Serving Pilgrims with Sincerity and Excellence</h1>
                <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>Your journey of faith deserves comfort, safety, and care.</p>
            </div>
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span className={styles.scrollText}>Scroll Down</span>
            </div>
        </section>
    );
}
