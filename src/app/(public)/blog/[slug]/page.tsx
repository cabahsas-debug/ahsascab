import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import { blogService } from '@/services/blogService';
import FadeIn from '@/components/common/FadeIn';
import GlassCard from '@/components/ui/GlassCard';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ShareButtons from '@/components/blog/ShareButtons';
import Image from 'next/image';

import { constructMetadata } from '@/lib/metadata';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = await blogService.getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await blogService.getPostBySlug(slug);

    if (!post) {
        return constructMetadata({
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        });
    }

    return constructMetadata({
        title: post.title,
        description: post.excerpt,
        image: post.image,
        type: 'article',
        canonicalUrl: `https://ahsascab.com/blog/${post.slug}`,
        keywords: post.tags,
    });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await blogService.getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [post.image], // In production, prepend domain
        "datePublished": post.date, // Format should ideally be ISO 8601
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ahsas Alrihlat",
            "logo": {
                "@type": "ImageObject",
                "url": "https://alaqsaumrahtransport.com/logo.png" // Update with actual logo URL
            }
        },
        "description": post.excerpt,
        "articleBody": post.content.replace(/<[^>]*>?/gm, '') // Strip HTML for plain text body
    };

    // Find related posts (exclude current post, limit to 3)
    const allPosts = await blogService.getPosts();
    const relatedPosts = allPosts
        .filter((p) => p.id !== slug)
        .slice(0, 3);

    return (
        <main className="bg-white dark:bg-slate-950 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Premium Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-16 group">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-slate-900/90 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
                    <FadeIn>
                        <Breadcrumbs
                            overrideLastItem={post.title}
                            className="mb-8 justify-center text-white/80"
                        />

                        <span className="inline-block text-sm font-bold tracking-[0.2em] text-gold uppercase mb-6 drop-shadow-md">
                            {post.category}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-playfair text-white mb-8 leading-tight drop-shadow-lg">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 font-medium text-sm md:text-base">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <Calendar size={16} className="text-gold" />
                                {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="hidden md:block w-1 h-1 bg-gold rounded-full" />
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <Clock size={16} className="text-gold" />
                                {post.readTime}
                            </div>
                            <div className="hidden md:block w-1 h-1 bg-gold rounded-full" />
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                                <User size={16} className="text-gold" />
                                {post.author}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 items-start">

                    {/* Main Content */}
                    <div className="min-w-0">
                        <FadeIn delay={0.2}>
                            <article className="
                                prose prose-lg prose-slate dark:prose-invert max-w-none
                                prose-headings:font-playfair prose-headings:font-bold prose-headings:text-navy dark:prose-headings:text-white
                                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-loose
                                prose-a:text-secondary hover:prose-a:text-secondary/80
                                prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
                                prose-li:marker:text-gold
                                prose-img:rounded-2xl prose-img:shadow-lg
                                first-letter:float-left first-letter:text-6xl first-letter:font-bold first-letter:text-navy dark:first-letter:text-gold first-letter:mr-4 first-letter:mt-2
                            ">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </article>
                        </FadeIn>

                        {/* Tags */}
                        <FadeIn delay={0.3}>
                            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
                                {post.tags.map((tag: string) => (
                                    <span key={tag} className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-navy hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-all duration-300 cursor-pointer">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Author Bio Section */}
                        <FadeIn delay={0.4}>
                            <div className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 border border-slate-100 dark:border-slate-800 items-center md:items-start text-center md:text-left">
                                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 shadow-sm flex-shrink-0 border-2 border-slate-100 dark:border-slate-700">
                                    <User size={40} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3">About {post.author}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Expert writer and travel guide specializing in Umrah and Hajj services.
                                        Dedicated to helping pilgrims have a spiritual and comfortable journey through meticulous planning and premium transport solutions.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Sidebar */}
                    <aside className="sticky top-32 space-y-8">
                        {/* CTA Widget */}
                        <GlassCard delay={0.5} className="overflow-hidden relative border-0 !bg-gradient-to-br !from-navy !to-slate-900 !text-white p-8 group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-300" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold font-playfair mb-4">Plan Your Umrah Journey</h3>
                                <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                                    Book reliable and comfortable transport for your spiritual journey today starting from just 200 SAR.
                                </p>
                                <Link href="/booking" className="flex items-center justify-center w-full py-4 bg-gold text-navy font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg group-hover:shadow-gold/20 transform group-hover:-translate-y-1">
                                    Book Your Ride
                                    <ChevronRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </GlassCard>

                        {/* Resources Widget */}
                        <GlassCard delay={0.55} className="p-8 border-gold/20">
                            <h3 className="text-lg font-bold font-playfair text-navy dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-gold block" />
                                Free Downloads
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Get our exclusive Umrah guides, checklists, and travel tips for free.
                            </p>
                            <Link
                                href="/blog#resources"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-navy dark:bg-slate-800 text-white font-semibold rounded-xl hover:bg-gold hover:text-navy transition-all duration-300 shadow-md border border-transparent hover:border-gold/30"
                            >
                                <ArrowLeft size={16} className="rotate-[-135deg]" />
                                <span>Access Resources</span>
                            </Link>
                        </GlassCard>

                        {/* Share Widget */}
                        <GlassCard delay={0.6} className="p-8">
                            <h3 className="text-lg font-bold font-playfair text-navy dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-gold block" />
                                Share Article
                            </h3>
                            <ShareButtons slug={slug} title={post.title} />
                        </GlassCard>

                        {/* Popular Services */}
                        <GlassCard delay={0.7} className="p-8">
                            <h3 className="text-lg font-bold font-playfair text-navy dark:text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-gold block" />
                                Popular Services
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { href: '/services/makkah-madinah-taxi', label: 'Makkah ⇄ Madinah Taxi' },
                                    { href: '/services/jeddah-airport-transfer', label: 'Jeddah Airport Transfer' },
                                    { href: '/services/ziyarat-tours', label: 'VIP Ziyarat Tours' },
                                ].map((service) => (
                                    <li key={service.href}>
                                        <Link href={service.href} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-secondary transition-colors group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                                            <span className="text-sm font-medium">{service.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    </aside>
                </div>

                {/* Related Articles Section */}
                <section className="mt-32 pt-16 border-t border-slate-200 dark:border-slate-800">
                    <FadeIn delay={0.7}>
                        <h2 className="text-3xl font-bold font-playfair text-navy dark:text-white mb-12 text-center">You Might Also Like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((related, index) => (
                                <GlassCard key={related.id} delay={0.7 + (index * 0.1)} className="p-0 overflow-hidden group h-full hover:!border-gold/50 transition-colors duration-500">
                                    <Link href={`/blog/${related.id}`} className="flex flex-col h-full">
                                        <div className="w-full aspect-[3/2] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3">{related.category}</span>
                                            <h3 className="text-xl font-bold text-navy dark:text-white mb-4 line-clamp-2 group-hover:text-secondary transition-colors">{related.title}</h3>
                                            <div className="mt-auto flex items-center text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-white transition-colors">
                                                Read Article <ArrowLeft size={16} className="rotate-180 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </GlassCard>
                            ))}
                        </div>
                    </FadeIn>
                </section>
            </div>
        </main>
    );
}
