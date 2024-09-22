import Soon from "@/components/Soon";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Manage your GlobalTag settings in a clean easy to use dashboard. (coming soon)',
    openGraph: {
        title: 'Dashboard',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function Dashboard() {
    return Soon();
}
