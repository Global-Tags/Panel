import Soon from "@/components/Soon";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'The Terms of Service of the GlobalTags API',
    openGraph: {
        title: 'Terms of Service',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function Terms() {
    return Soon();
}
