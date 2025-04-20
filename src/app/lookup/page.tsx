import { Metadata } from 'next';
import TagLookup from './TagLookup';

export const metadata: Metadata = {
    title: 'Tag Lookup',
    description: 'Here you can lookup anybodys public tag data.',
    openGraph: {
        title: 'Tag Lookup',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default async function Lookup({ searchParams }: { searchParams: Promise<{ username: string | null }> }) {
    const { username } = await searchParams;
    return (
        <TagLookup prefetch={username} />
    );
}
