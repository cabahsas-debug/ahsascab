import { Section, ISection } from '@/models';
import dbConnect from '@/lib/mongodb';
import { unstable_cache } from 'next/cache';

const getSectionContentCached = unstable_cache(
    async (name: string): Promise<ISection | null> => {
        await dbConnect();
        const section = await Section.findOne({ name, isActive: true }).lean();
        if (!section) return null;

        return {
            ...section,
            _id: section._id.toString(),
            createdAt: section.createdAt,
            updatedAt: section.updatedAt
        } as unknown as ISection;
    },
    ['section-content'],
    { revalidate: 3600, tags: ['content'] }
);

// Public pages fall back to their built-in default content when a section can't be
// loaded. Caught outside the cache so a brief DB outage isn't cached for an hour.
export async function getSectionContent(name: string): Promise<ISection | null> {
    try {
        return await getSectionContentCached(name);
    } catch (error) {
        console.error(`getSectionContent("${name}"): DB unavailable, using page defaults:`, error);
        return null;
    }
}

export async function getAllSections(): Promise<ISection[]> {
    await dbConnect();
    const sections = await Section.find({}).sort({ name: 1 }).lean();
    return sections.map(s => ({
        ...s,
        _id: s._id.toString(),
        createdAt: s.createdAt,
        updatedAt: s.updatedAt
    })) as unknown as ISection[];
}

export function getSectionImage(section: ISection | null, type: 'desktop' | 'mobile' = 'desktop'): string | null {
    if (!section || !section.images) return null;
    const image = section.images.find(img => img.type === type);
    // Fallback to desktop if mobile not found, or first image
    if (!image && type === 'mobile') {
        return section.images.find(img => img.type === 'desktop')?.url || section.images[0]?.url || null;
    }
    return image ? image.url : (section.images[0]?.url || null);
}

export function getCustomField(section: ISection | null, key: string): string | null {
    if (!section || !section.customFields) return null;
    const field = section.customFields.find(f => f.key === key);
    return field ? field.value : null;
}
