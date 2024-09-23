import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from "./config";

export const metadata: Metadata = {
    metadataBase: new URL(config.appUrl),
    title: {
        template: 'GlobalTags | %s',
        default: 'GlobalTags',
        absolute: 'GlobalTags | Home'
    },
    description: 'The minecraft mod which shows an additional custom nameplate of your choice above, below or next to your nametag.',
    robots: {
        index: true,
        follow: true,
        nocache: true
    },
    openGraph: {
        title: 'Home',
        siteName: 'GlobalTags'
    },
    twitter: {
        card: 'summary'
    }
};

export const viewport: Viewport = {
    themeColor: '#3b82f6'
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={"antialiased"}>
            <div className="flex flex-col bg-gray-900 min-h-screen">
                <Header />
                <main className="flex justify-center flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>
                <Footer />
            </div>
            </body>
        </html>
    );
}
