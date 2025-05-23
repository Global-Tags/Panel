import Image from 'next/image';
import { minecraft } from '../fonts';
import Link from 'next/link';
import { config } from '../config';
import { Metadata } from 'next';
const { partners } = config;

export const metadata: Metadata = {
    title: 'Partnerships',
    description: 'Join the GlobalTags network! Explore our partners, see requirements, and collaborate with us today.',
    openGraph: {
        title: 'Parterships',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

const EmptyBox = () => (
    <div className="flex-col items-center bg-[#1f2937] p-6 rounded-lg shadow-lg opacity-50 hidden md:flex" />
);

const PartnerCard = ({ name, type, logo }: { name: string; type: string; logo: string }) => (
    <div className="flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
        <div className="w-24 h-24 mb-4 relative">
            <Image
                src={logo}
                alt={name}
                width={96}
                height={96}
                className="rounded-full border-4 border-indigo-500"
            />
        </div>
        <h3 className={`text-xl font-semibold text-gray-100 mb-2 ${minecraft.className}`}>{name}</h3>
        <p className="text-sm text-gray-400">{type}</p>
    </div>
);

export default function PartnershipPage() {
    const emptyBoxes = (3 - (partners.length % 3)) % 3;

    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-5xl font-bold mb-6 text-indigo-400">GlobalTags Partnerships</h2>
        <p className="text-xl mb-8 text-gray-400">
          Join our network of trusted partners and help us grow the GlobalTags community.
        </p>
  
        <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-100 mb-4">Partnership Requirements</h3>
            <ul className="text-left text-lg text-gray-400 list-disc list-inside max-w-3xl mx-auto">
            <li>Active Minecraft server with a minimum of 20 concurrent players.</li>
            <li>Content creators with at least 500 subscribers or followers.</li>
            <li>Ability to promote GlobalTags to your audience.</li>
            <li>Adherence to our <Link href="/partnership/guidelines" className='text-blue-400 hover:underline'>partnership guidelines and community standards</Link>.</li>
            </ul>
        </div>
  
        <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-100 mb-4">Our Current Partners</h3>
            {partners.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner) => (
                    <PartnerCard
                        key={partner.name}
                        name={partner.name}
                        type={partner.type}
                        logo={partner.logo}
                    />
                ))}
                {Array.from({ length: emptyBoxes }).map((_, index) => (
                    <EmptyBox key={index} />
                ))}
                </div>
            ) : (
                <p className="text-lg text-gray-400">We currently have no partners. Be the first to join!</p>
            )}
        </div>
  
        <div className="mt-8">
          <Link href="/discord" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300" target='_blank'>
            Apply on our Discord
          </Link>
        </div>
      </div>
    );
}
