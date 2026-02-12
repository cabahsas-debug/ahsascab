import React from 'react';
import HadithCarousel from '@/components/blog/HadithCarousel';
import Hero from '@/components/common/Hero';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogFeed from '@/components/blog/BlogFeed';
import RespectSection from '@/components/blog/RespectSection';
import TravelTips from '@/components/blog/TravelTips';
import FAQSection from '@/components/blog/FAQSection';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import { blogService } from '@/services/blogService';
import { Metadata } from 'next';
import ResourceCard from '@/components/resources/ResourceCard';
import FadeIn from '@/components/common/FadeIn';
import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: 'Umrah Travel Blog | Tips & Guides | مدونة العمرة',
        description: 'Read our latest articles on Umrah travel tips, transport advice, and spiritual guides. نصائح وارشادات للمعتمرين. دليل المواصلات في مكة والمدينة.',
        canonicalUrl: 'https://ahsascab.com/blog',
    });
}

const CATEGORIES = ['All', 'Guide', 'Travel Tips', 'Safety', 'Accessibility', 'Experience', 'Value', 'Spiritual', 'News', 'FAQ'];

const resources = [
    {
        id: '1',
        title: 'Ultimate Umrah Guide 2026',
        description: 'A comprehensive step-by-step guide to performing Umrah, including rituals, duas, and practical travel tips for a spiritual journey.',
        image: '/images/services/airport-transfer-v2.png', // Using existing assets for now
        category: 'Guide' as const,
        downloadUrl: '#',
        fileSize: '2.4 MB',
    },
    {
        id: '2',
        title: 'Madinah Ziyarat Checklist',
        description: 'Complete checklist of historical sites to visit in Madinah, with historical context and best times to visit each location.',
        image: '/images/services/intercity-transport-v2.png',
        category: 'Checklist' as const,
        downloadUrl: '#',
        fileSize: '1.2 MB',
    },
    {
        id: '3',
        title: 'Family Travel Essentials',
        description: 'Everything you need to know about traveling for Umrah with children and elderly family members. Safety tips and packing lists included.',
        image: '/images/services/hotel-transfers-v2.png',
        category: 'Tips' as const,
        downloadUrl: '#',
        fileSize: '1.8 MB',
    },
];

export default async function BlogPage() {
    const dbPosts = await blogService.getPosts();

    // Map to match component interface (convert Date to string) and ensure serializable data
    const posts = dbPosts.map((post: any) => ({
        id: post.slug,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category || 'General',
        date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }),
        readTime: post.readTime || '5 min read',
        image: post.image,
        alt: post.alt || post.title,
        author: post.author || 'Ahsas Alrihlat',
        tags: post.tags || [],
    }));

    // Sort by date desc (using the original date object from dbPosts for sorting if needed, or just trust the service sort)
    // Service already sorts by date desc.

    const featuredPost = posts[0];


    return (
        <main>
            <Hero
                title="Pilgrim Resources & Insights"
                subtitle="Expert guides, travel tips, and answers to your questions for a blessed and hassle-free Umrah journey."
                bgImage="/images/blog-hero-professional.png"
                breadcrumbs={<Breadcrumbs />}
            />

            {/* Articles Section */}
            <div className="bg-background pb-12 pt-16 min-h-[600px]">
                <div className="container px-[5px] md:px-4">
                    {featuredPost && (
                        <FeaturedPost post={featuredPost} />
                    )}
                </div>
            </div>

            {/* Resources Section - Integrated */}
            <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="container mx-auto px-4 relative z-10">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                            <div>
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Free Downloads</span>
                                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy">Travel Resources & Guides</h2>
                            </div>
                            <p className="text-slate-600 max-w-md">
                                Download our curated checklists and guides to assist you during your spiritual journey.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <FadeIn key={resource.id} delay={index * 0.1}>
                                <ResourceCard {...resource} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <BlogFeed
                posts={posts}
                categories={CATEGORIES}
            />

            <NewsletterSignup />

            <HadithCarousel />
            <RespectSection />
            <TravelTips />
            <FAQSection />
        </main >
    );
}
