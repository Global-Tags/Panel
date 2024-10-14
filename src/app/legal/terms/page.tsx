import Soon from "@/components/Soon";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'The Terms of Service of the GlobalTags API',
    openGraph: {
        title: 'Terms of Service',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
}

export default function TermsOfService() {
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
            <div className="container mx-auto px-4 py-8 bg-gray-800 rounded-lg shadow-lg flex-1">
                <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">Terms of Service for the GlobalTags API</h1>
                
                <p className="mb-4"><strong>Effective Date:</strong> 22.09.2024</p>
                
                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By using any GlobalTags Mod wrapper and its associated API, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using the GlobalTags system. We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated "Effective Date."
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">2. User Responsibilities</h2>
                <p className="mb-4">
                    You are responsible for all activities conducted through your account within the GlobalTags system. This includes:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Setting and managing your tags, tag positions, and icons.</li>
                    <li>Ensuring that any data or content you provide does not violate any third-party rights or applicable laws.</li>
                    <li>Keeping your account information secure, including API keys if applicable.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">3. Use of the Service</h2>
                <p className="mb-4">
                    The GlobalTags system is provided for use by players and developers in the Minecraft community. We allow a lot of freedom in the choice of tags, but there are some limits that must not be exceeded. Your use of the service is subject to the following conditions:
                </p>
                <ol className="list-decimal pl-5 mb-4">
                    <li>Advertisement of any kind <b>is allowed</b>. <i>duh</i></li>
                    <li>Any form of racism/extremism is <b>not</b> allowed.</li>
                    <li>Sharing any information about another person without their consent is <b>strictly forbidden</b>. This is also referred to as doxing.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">4. Data Collection and Privacy</h2>
                <p className="mb-4">
                    By using the GlobalTags API, you agree to the collection and use of data as described in the <Link href="#" className="text-blue-400 hover:underline">Privacy Policy</Link>. This includes the storage of UUIDs, Minecraft versions, tag history, reports, roles, and any other data necessary for the system’s functionality.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">5. Tag Management and Removal</h2>
                <p className="mb-4">
                    You may request the deletion of your tag at any time. Please be aware that the removal of your data will prevent you from setting any tags in the future. Data removal requests can be submitted through our <Link href="/discord" className="text-blue-400 hover:underline">Discord server</Link>.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">6. Prohibited Conduct</h2>
                <p className="mb-4">
                    The following actions are strictly prohibited while using GlobalTags:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Falsely attributing tags.</li>
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Exploiting bugs or vulnerabilities within the API or mod to gain unfair advantage.</li>
                    <li>Harassing or bullying other users through the system.</li>
                </ul>
                <p className="mb-4">Violations of these rules may result in a suspension from GlobalTags services.</p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">7. Account Suspension and Bans</h2>
                <p className="mb-4">
                    GlobalTags reserves the right to suspend or ban users at its discretion for violating these Terms of Service or for any other reason deemed necessary to protect the integrity of the system and its users. The staff team is not required to disclose any information about any punishments.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                    GlobalTags is provided "as is" without any warranties of any kind. We do not guarantee that the mod or API will be error-free, uninterrupted, or secure. You agree that we will not be held liable for any damages or losses, including but not limited to data loss, service interruptions, or account suspensions, resulting from the use of the GlobalTags mod or API.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">9. Modifications to the Service</h2>
                <p className="mb-4">
                    We reserve the right to modify, suspend, or discontinue the GlobalTags service at any time, with or without notice. You agree that we shall not be held liable for any modifications, suspensions, or discontinuations.
                </p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">10. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns regarding these Terms of Service, please reach out to us through our <Link href="/discord" className="text-blue-400 hover:underline">Discord server</Link>.
                </p>
            </div>
        </div>
    );
}
