import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Partnership Guidelines',
    description: 'Learn about the GlobalTags partnership guidelines, including promotion expectations, mutual benefits, and community standards."',
    openGraph: {
        title: 'Partership Guidelines',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}


export default function PartnershipGuidelinesPage() {
    const guidelines = [
        "Promote GlobalTags effectively through your platforms (e.g., social media, in-game announcements, videos).",
        "Maintain a positive reputation within the Minecraft community, adhering to ethical standards and respectful behavior.",
        "Use approved materials when promoting GlobalTags to ensure accurate and consistent information is shared.",
        "Do not misuse the partnership to mislead users or exploit the GlobalTags brand for personal gain.",
        "Ensure the partnership is mutually beneficial, supporting both the partner and the GlobalTags project."
    ];
  
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Partnership Guidelines</h2>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <ul className="text-left text-lg text-gray-400 list-decimal list-inside">
                {guidelines.map((guideline, index) => (
                    <li key={index} className="mb-4">
                        {guideline}
                    </li>
                ))}
                </ul>
            </div>

            <div className="mt-8">
            <Link href="/partnership" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Back to overview
            </Link>
            </div>
        </div>
    );
};