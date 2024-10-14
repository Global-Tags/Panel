import Link from "next/link";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <ul className="flex space-x-8 mb-4 md:mb-0">
                    <li>
                        <Link
                            href="https://docs.globaltags.xyz"
                            className="hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Documentation
                        </Link>
                    </li>
                    <li>
                        <Link href="/legal/imprint" className="hover:text-white">
                            Imprint
                        </Link>
                    </li>
                    <li>
                        <Link href="/legal/privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>
                    </li>
                </ul>

                <div className="flex space-x-6">
                    <Link
                        href="/discord"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <FaDiscord size={24} />
                    </Link>
                    <Link
                        href="/github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        <FaGithub size={24} />
                    </Link>
                </div>
                </div>        

                <div className="border-t border-gray-700 my-4"></div>

                <p className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} GlobalTags. All rights reserved.
                </p>
            </div>
        </footer>
    );
}