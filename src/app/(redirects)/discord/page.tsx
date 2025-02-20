import { config } from "@/app/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Discord',
    description: 'Join the GlobalTags Discord Server to get the latest updates and chat with the community.',
    openGraph: {
        title: 'Discord',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function Discord() {
    redirect(config.redirects.discord);
}