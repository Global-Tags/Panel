import { config } from "@/app/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Imprint',
    description: 'The imprint of GlobalTags.',
    openGraph: {
        title: 'Imprint',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function Imprint() {
    redirect(config.redirects.imprint);
}