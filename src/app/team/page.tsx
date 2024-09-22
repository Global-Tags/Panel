import Image from 'next/image';
import { minecraft } from '../fonts';
import Link from 'next/link';
import { config } from '../config';
const { team: members } = config;

const EmptyBox = () => (
    <div className="flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md opacity-50 hidden md:flex" />
);

const TeamMember = ({ id, username, description }: { id: string, username: string, description: string }) => (
  <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
    <div className="mt-2 w-24 h-24 mb-4">
      <Image
        src={`https://id.rappytv.com/${id}/icon`}
        alt={username}
        width={96}
        height={96}
        className="rounded-full"
      />
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

const TeamPage = () => {
    const emptyBoxesNeeded = (3 - (members.length % 3)) % 3;

    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Meet the GlobalTags Team</h2>
            <p className="text-xl mb-8 text-gray-400">
                Our dedicated team works hard to make GlobalTags the best experience for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <TeamMember
                key={member.id}
                id={member.id}
                username={member.username}
                description={member.role}
              />
            ))}
            {Array.from({ length: emptyBoxesNeeded }).map((_, index) => (
              <EmptyBox key={index} />
            ))}
          </div>
        </div>
    );
}

export default TeamPage;
