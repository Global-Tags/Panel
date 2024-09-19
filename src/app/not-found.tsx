import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center text-white">
            <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>

            <Link className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300" href="/">
                Go back Home
            </Link>
        </div>
    );
}
