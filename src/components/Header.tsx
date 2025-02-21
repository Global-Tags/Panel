"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 shadow-md py-4 relative">
            <nav className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/icon.png"
                        alt="Global-Tags Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-10 text-white text-lg font-semibold">
                    <li>
                        <Link href="/" className="relative group">
                            <span className="transition-all duration-200">Home</span>
                            <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lookup" className="relative group">
                            <span className="transition-all duration-200">Lookup</span>
                            <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" className="relative group">
                            <span className="transition-all duration-200">Team</span>
                            <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/partnership" className="relative group">
                            <span className="transition-all duration-200">Partner</span>
                            <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menü Button */}
                <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(true)}>
                    {/* Hamburger Icon als SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Sidebar Menü */}
                <div
                    className={`fixed top-0 left-0 h-screen w-screen bg-gray-900 text-white shadow-lg transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden flex flex-col z-50`}
                >
                    {/* Close Button */}
                    <div className="flex justify-end p-5">
                        <button onClick={() => setIsOpen(false)} className="text-white">
                            {/* Schließen Icon als SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 hover:rotate-90 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <ul className="flex flex-col items-center space-y-10 px-8 mt-10 text-3xl font-bold">
                        <li>
                            <Link
                                href="/"
                                className="w-full block py-4 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/lookup"
                                className="w-full block py-4 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Lookup
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/team"
                                className="w-full block py-4 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/partnership"
                                className="w-full block py-4 hover:text-gray-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Partner
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
