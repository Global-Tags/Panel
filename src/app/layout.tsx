import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "GlobalTags",
    description: "The minecraft mod which shows your custom tag next to your name tag.",
};

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
