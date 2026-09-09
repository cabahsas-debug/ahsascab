import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { blogService } from '@/services/blogService';
import FadeIn from '@/components/common/FadeIn';
import GlassCard from '@/components/ui/GlassCard';

export default async function LatestArticles() {
    // Get the first 3 articles from DB
    const posts = await blogService.getPosts();
    const latestPosts = posts.slice(0, 3);

    // If no posts, don't render the section
    if (latestPosts.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 pattern-grid-fade opacity-5 pointer-events-none"></div>
            
            <div className="container relative z-10 mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-wider uppercase text-sm mb-3 block">Stay Updated</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">Latest from Our Blog</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <FadeIn key={post.id} delay={index * 0.1}>
                            <Link href={`/blog/${post.slug}`} className="block h-full group">
                                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 hover:border-gold/30 transition-all duration-300 flex flex-col hover:-translate-y-1">
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                                        <Image
                                            src={post.image}
                                            alt={post.alt || post.title}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm text-gold text-xs font-bold uppercase tracking-wider">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold font-playfair text-navy mb-3 group-hover:text-gold transition-colors leading-tight line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                                            <span className="flex items-center text-slate-400 text-xs font-medium">
                                                <Clock size={14} className="mr-1.5" />
                                                {post.readTime}
                                            </span>
                                            <span className="flex items-center text-gold text-sm font-bold group-hover:translate-x-1 transition-transform">
                                                Read More <ArrowRight size={16} className="ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
