import Image from 'next/image';
import Link from 'next/link';
import { config } from '../config';
import { Metadata } from 'next';

const { team: { categories, members: team } } = config;

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the GlobalTags Team which works hard to make GlobalTags the best experience for you.',
  openGraph: {
    title: 'Team',
    siteName: 'GlobalTags',
    images: '/opengraph-image.png',
  },
};

const EmptyBox = () => (
  <div className="flex flex-col items-center justify-center bg-gray-700 rounded-lg p-6 opacity-50 animate-pulse select-none">
    <div className="w-16 h-16 bg-gray-600 rounded-full mb-4"></div>
    <div className="w-24 h-4 bg-gray-600 rounded mb-2"></div>
    <div className="w-32 h-4 bg-gray-600 rounded"></div>
  </div>
);

const TeamMember = ({
  id,
  username,
  description,
  joinedAt,
}: {
  id: string;
  username: string;
  description: string;
  joinedAt: number;
}) => (
  <div className="relative flex flex-col items-center bg-[#1f2937]/70 backdrop-blur-md p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative group w-24 h-24 mb-4">
      <Image
        src={`https://id.rappytv.com/${id}/icon`}
        alt={username}
        width={96}
        height={96}
        className="rounded-full ring-4 ring-indigo-500 shadow-md"
        loading="lazy"
      />
      {joinedAt > 0 && (
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-white select-none pointer-events-none">
          Joined: {new Date(joinedAt).toLocaleDateString(config.locale)}
        </div>
      )}
    </div>
    <h3 className="text-2xl font-extrabold text-indigo-400 mb-3 hover:text-indigo-300 transition ease-in-out duration-300 hover:-translate-y-1 drop-shadow-lg cursor-default select-text">
      {username}
    </h3>
    <p className="text-gray-300 text-center mb-4">{description}</p>
    <Link
      href={`https://laby.net/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-full px-5 py-2 text-white font-semibold shadow-md select-none"
    >
      <Image src="/laby.png" alt="laby.net Profile" width={24} height={24} />
      Profile
    </Link>
  </div>
);

const TeamCategory = ({
  title,
  members,
}: {
  title: string;
  members: typeof team;
}) => {
  const emptyBoxes = (3 - (members.length % 3)) % 3;

  return (
    <div className="mb-16">
      <div className="inline-block bg-indigo-600 px-8 py-3 rounded-xl mb-10 shadow-md">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {members.length > 0 ? (
          <>
            {members.map((member) => (
              <TeamMember
                key={member.id}
                id={member.id}
                username={member.username}
                description={member.role}
                joinedAt={member.joinedAt}
              />
            ))}
            {Array.from({ length: emptyBoxes }).map((_, index) => (
              <EmptyBox key={index} />
            ))}
          </>
        ) : (
          <p className="text-lg text-gray-400 col-span-full">
            The {title.toLowerCase()} team is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default function TeamPage() {
  return (
    <div className="relative container mx-auto px-6 py-12 text-center text-gray-200 max-w-7xl">

      <div className="container mx-auto px-6 py-12 text-center text-gray-200 max-w-7xl">
  <h2 className="text-5xl font-bold mb-6 text-indigo-400">
    Meet the GlobalTags Team
  </h2>
  <p className="text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
    Our dedicated team works passionately to make GlobalTags the best experience possible.
  </p>

  {/* ...rest of the page */}
</div>


      {categories.length > 0 ? (
        categories.map((category, key) => (
          <TeamCategory
            key={key}
            title={category.name}
            members={team.filter((member) => member.category === category.id)}
          />
        ))
      ) : (
        <p className="text-lg text-gray-400 col-span-full">
          There are no team categories.
        </p>
      )}

      {/* Join the Team CTA - you dont need to be the best*/}
      <div className="mt-20 max-w-3xl mx-auto bg-gray-900/90 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-extrabold mb-3 text-center">
          Join the Team & Help Shape the Future of GlobalTags!
        </h3>
        <p className="text-sm text-gray-300 mb-6 text-center leading-snug">
          Discover meaningful roles where your skills make an impact. Check the current availability below. We're excited to grow together with motivated individuals!
        </p>

        <div className="flex justify-center gap-4 mb-6 text-sm font-semibold flex-wrap">
          {/* Developer */}
          <div className="flex items-center gap-2 bg-indigo-800 rounded-full px-4 py-2 shadow-md">
            <span>Developer</span>
            <span className="relative inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400">Open</span>
          </div>

          {/* Moderator */}
          <div className="flex items-center gap-2 bg-indigo-800 rounded-full px-4 py-2 shadow-md">
            <span>Moderator</span>
            <span className="relative inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400">Closed</span>
          </div>

          {/* Translator */}
          <div className="flex items-center gap-2 bg-indigo-800 rounded-full px-4 py-2 shadow-md">
            <span>Translator</span>
            <span className="relative inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-green-400">Open</span>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="https://discord.gg/uuxdGjpCkJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 font-bold rounded-full px-8 py-3 text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
