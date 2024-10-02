import Image from 'next/image';
import { minecraft } from '../fonts';
import Link from 'next/link';
import { config } from '../config';
const { team } = config;

const EmptyBox = () => (
    <div className="flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md opacity-50 hidden md:flex" />
);

const TeamMember = ({ id, username, description, joinedAt }: { id: string, username: string, description: string, joinedAt: number }) => (
    <div className="relative flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer">
        <div className="mt-2 w-24 h-24 mb-4 group relative">
            <Image
                src={`https://id.rappytv.com/${id}/icon`}
                alt={username}
                width={96}
                height={96}
                className="rounded-full"
            />
            {joinedAt > 0 && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{`Joined: ${new Date(joinedAt).toLocaleDateString()}`}</p>
                </div>
            )}
        </div>
        <h3 className={`text-2xl font-semibold text-gray-100 mb-2 ${minecraft.className}`}>{username}</h3>
        <p className="text-lg text-gray-400 text-center">{description}</p>
        <Link href={`https://laby.net/${username}`} target='_blank' rel='noopener noreferrer' className='mt-2 text-blue-500 hover:text-blue-400 flex items-center'>
            <Image
                src='/laby.png'
                alt='laby.net Profile'
                width={24}
                height={24}
                className='inline-block transition-transform duration-300 ease-in-out hover:translate-y-[-2px]'
            />
        </Link>
    </div>
);

const TeamCategory = ({ title, members }: { title: string, members: typeof team }) => {
    const emptyBoxes = (3 - (members.length % 3)) % 3;

    return (
        <div className="mb-16">
            <div className="inline-block bg-indigo-600 px-6 py-2 rounded-lg mb-10 shadow-md">
                <h3 className="text-3xl font-semibold text-white">{title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-lg text-gray-400 col-span-full">The {title.toLowerCase()} team is empty.</p>
                )}
            </div>
        </div>
    );
}

export default function TeamPage() {
    // Filter members by categories
    const admins = team.filter(member => member.category === 'admin');
    const developers = team.filter(member => member.category === 'developer');
    const moderators = team.filter(member => member.category === 'moderator');

    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Meet the GlobalTags Team</h2>
            <p className="text-xl mb-8 text-gray-400">
                Our dedicated team works hard to make GlobalTags the best experience for you.
            </p>

            <TeamCategory title="Administration" members={admins} />
            <TeamCategory title="Development" members={developers} />
            <TeamCategory title="Discord Moderation" members={moderators} />
        </div>
    );
}