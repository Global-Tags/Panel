import type { Metadata } from "next";
import "./globals.css";

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
            {children}
        </body>
        </html>
    );
}
