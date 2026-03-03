import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata() {
    return constructMetadata({
        title: "Cookie Preferences | Ahsas Cab",
        description: "Manage your cookie preferences for ahsascab.com.",
        canonicalUrl: '/cookie-preferences',
        noIndex: true,
    });
}

export default function CookiePreferencesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
