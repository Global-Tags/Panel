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
        images: '/opengraph-image.png'
    }
}

const EmptyBox = () => (
    <div className="flex-col items-center bg-[#1f2937] p-6 rounded-lg shadow-lg opacity-50 hidden md:flex" />
);

const TeamMember = ({ id, username, description, joinedAt }: { id: string, username: string, description: string, joinedAt: number }) => (
    <div className="relative flex flex-col items-center bg-[#1f2937] p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
        <div className="mt-2 w-24 h-24 mb-4 group relative">
            <Image
                src={`https://id.rappytv.com/${id}/icon`}
                alt={username}
                width={96}
                height={96}
                className="rounded-full border-4 border-indigo-500"
            />
            {joinedAt > 0 && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">{`Joined: ${new Date(joinedAt).toLocaleDateString(config.locale)}`}</p>
                </div>
            )}
        </div>
        <h3 className="text-2xl font-bold text-indigo-400 mb-2">{username}</h3>
        <p className="text-lg text-gray-300 text-center">{description}</p>
        <Link href={`https://laby.net/${username}`} target='_blank' rel='noopener noreferrer' className='mt-2 text-indigo-400 hover:text-indigo-300 flex items-center gap-2'>
            <Image
                src='/laby.png'
                alt='laby.net Profile'
                width={24}
                height={24}
                className='inline-block transition-transform duration-300 ease-in-out hover:translate-y-[-2px]'
            />
            <span>Profile</span>
        </Link>
    </div>
);

const TeamCategory = ({ title, members }: { title: string, members: typeof team }) => {
    return (
        <div className="mb-16">
            <div className="inline-block bg-indigo-600 px-8 py-3 rounded-xl mb-10 shadow-lg">
                <h3 className="text-3xl font-bold text-white">{title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.length > 0 ? members.map((member) => (
                    <TeamMember
                        key={member.id}
                        id={member.id}
                        username={member.username}
                        description={member.role}
                        joinedAt={member.joinedAt}
                    />
                )) : (
                    <p className="text-lg text-gray-400 col-span-full">The {title.toLowerCase()} team is empty.</p>
                )}
            </div>
        </div>
    );
}

export default function TeamPage() {
    return (
        <div className="container mx-auto px-6 py-12 text-center text-gray-200">
            <h2 className="text-5xl font-bold mb-6 text-indigo-400">Meet the GlobalTags Team</h2>
            <p className="text-xl mb-8 text-gray-400">
                Our dedicated team works hard to make GlobalTags the best experience for you.
            </p>
            {categories.length > 0 ? categories.map((category, key) => (
                <TeamCategory
                    key={key}
                    title={category.name}
                    members={team.filter(member => member.category === category.id)}
                />
            )) : (
                <p className="text-lg text-gray-400 col-span-full">There are no team categories.</p>
            )}
            
            <TeamCategory
                title="Translators"
                members={team.filter(member => member.category === 'translator')}
            />
        </div>
    );
}
