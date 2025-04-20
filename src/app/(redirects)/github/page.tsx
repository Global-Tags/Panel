import { config } from "@/app/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'GitHub',
    description: 'Check out the GlobalTags GitHub organization.',
    openGraph: {
        title: 'GitHub',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function GitHub() {
    redirect(config.redirects.github);
}