import { Metadata } from 'next';
import TagLookup from '@/components/TagLookup';

export const metadata: Metadata = {
    title: 'Tag Lookup',
    description: 'Here you can lookup anybodys public tag data.',
    openGraph: {
        title: 'Tag Lookup',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function Lookup() {
    return TagLookup();
}
