import { getPostEntries, renderUrlset, xmlResponse } from '@/lib/sitemap';

export const revalidate = 3600;

export async function GET() {
    return xmlResponse(renderUrlset(await getPostEntries()));
}
