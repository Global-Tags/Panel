import Image from 'next/image';
import { minecraft } from '../fonts';
import Link from 'next/link';
import { config } from '../config';
import { Metadata } from 'next';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const { partners } = config;

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'Join the GlobalTags network! Explore our partners, see requirements, and collaborate with us today.',
  openGraph: {
    title: 'Partnerships',
    siteName: 'GlobalTags',
    images: '/opengraph-image.png',
  },
};

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

const PartnershipRequirement = ({ icon, text }: { icon: string, text: React.ReactNode }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-70 transition-colors">
    <span className="text-indigo-400 text-2xl">{icon}</span>
    <p className="text-gray-300 text-left">{text}</p>
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
        <h3 className="text-3xl font-extrabold text-centerfont-semibold text-gray-100 mb-6 text-center">Our Current Partners</h3>
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
      
     <div className="mb-12">
  <h3 className="text-3xl font-extrabold text-centerfont-semibold text-gray-100 mb-6 text-center">Partnership Requirements</h3>
  
  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <PartnershipRequirement icon="🟢" text={<>Active Minecraft server with a minimum of <strong>20 concurrent players</strong>.</>} />
    <PartnershipRequirement icon="📈" text={<>Content creators with at least <strong>500 subscribers or followers</strong>.</>} />
    <PartnershipRequirement icon="📢" text={<>Ability to <strong>promote GlobalTags</strong> to your audience.</>} />
    <PartnershipRequirement icon="📜" text={<>Adherence to our <Link href="/partnership/guidelines" className="text-blue-400 hover:underline">partnership guidelines and community standards</Link>.</>} />
  </div>
</div>

      <div className="mt-20 max-w-3xl mx-auto bg-gray-900/90 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-extrabold mb-3 text-center">Growing Stronger, Together</h3>
        <p className="text-sm text-gray-300 mb-6 text-center leading-snug">
          At GlobalTags, we believe the best things happen when we work together. By joining forces,
          we can create lasting impact and achieve more than we ever could alone. Together, we grow,
          inspire, and make a difference.
        </p>

        <div className="flex justify-center gap-4 mb-6 text-sm font-semibold flex-wrap">
          <div className="flex items-center gap-2 bg-indigo-800 rounded-full px-4 py-2 shadow-md">
            <span>Partner</span>
            <span className="relative inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400">Open</span>
          </div>

          <div className="text-center">
            <Link
              href="https://discord.gg/uuxdGjpCkJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 font-bold rounded-full px-8 py-3 text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
