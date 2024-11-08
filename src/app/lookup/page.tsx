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

export default function Lookup({ searchParams: { username }}: { searchParams: { username: string | null } }) {
    return (
        <TagLookup prefetch={username} />
    );
}
