import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 shadow-md py-4">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <div className="flex-1"></div>
                <div className="text-3xl text-blue-500">
                    <Image
                        src="/icon.png"
                        alt="Global-Tags"
                        width={50}
                        height={50}
                    />
                </div>
                <ul className="flex-1 flex justify-end space-x-8 text-white text-lg">
                    <li>
                        <Link href="/" className="hover:text-blue-500">Home</Link>
                    </li>
                    <li>
                        <Link href="/lookup" className="hover:text-blue-500">Lookup</Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
      );
}