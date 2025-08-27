import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'The Privacy Policy of the GlobalTags API',
    openGraph: {
        title: 'Privacy Policy',
        siteName: 'GlobalTags',
        images: '/opengraph-image.png'
    }
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen py-20">
            <div className="max-w-5xl mx-auto px-6 lg:px-24 space-y-16 leading-relaxed">

                <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 text-center mb-6">
                    Privacy Policy for the GlobalTags API
                </h1>

                <p className="text-gray-400 text-lg mb-12 text-center">
                    <strong>Effective Date:</strong> 15.09.2024
                </p>

                {/* Section 1 */}
                <section id="data-collection" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#data-collection" className="hover:underline flex items-center gap-2">
                            1. Data Collection
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        When you send a request to the GlobalTags API, we automatically collect and store the following information into a secure logfile. We do not collect any other personal information unless explicitly provided by you.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li><strong>UUID (Universally Unique Identifier):</strong> The UUID you tried to request the info of.</li>
                        <li><strong>Minecraft version:</strong> Your game version.</li>
                        <li><strong>Agent version:</strong> The version of the Agent you are using e.g. "LabyMod Addon", "Fabric Mod", etc.</li>
                    </ul>
                </section>

                {/* Section 2 */}
                <section id="tag-system" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#tag-system" className="hover:underline flex items-center gap-2">
                            2. Tag System and Additional Data
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        When interacting with GlobalTags, we store additional information to support the API's functionality, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li><strong>Tag:</strong> The tag you set for yourself via the API.</li>
                        <li><strong>Tag Position:</strong> The position of your tag you set for yourself via the API.</li>
                        <li><strong>Tag Icon:</strong> The tag icon you set for yourself via the API.</li>
                        <li><strong>Tag History:</strong> A history of your past tags.</li>
                        <li><strong>Reports:</strong> Any reports filed against you within the system.</li>
                        <li><strong>Roles:</strong> Roles assigned to you within the GlobalTags system.</li>
                        <li><strong>Referrals:</strong> Information regarding any users you have invited to use GlobalTags.</li>
                        <li><strong>Ban Information:</strong> Details about any bans or restrictions imposed on your account.</li>
                        <li><strong>Social Connections:</strong> Data about social media accounts which you linked to your account. These connections are opt-in.</li>
                        <li><strong>API Keys:</strong> If applicable, your API keys for accessing the system.</li>
                    </ul>
                </section>

                {/* Section 3 */}
                <section id="managing-data" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#managing-data" className="hover:underline flex items-center gap-2">
                            3. Deleting and Managing Your Data
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        <strong>Deleting a Tag:</strong> If you delete your tag, the document associated with your UUID will remain in our database, but your tag will no longer be visible to other users.
                    </p>
                    <p className="text-gray-300">
                        <strong>Removing Your Document:</strong> If you wish to completely remove your document from our system, please join our Discord server and create a <a href="https://discord.com/channels/1254446736999579740/1254450410308108368" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">new ticket</a>. You can access the Discord server <Link href="/discord" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">here</Link>.
                    </p>
                    <p className="text-gray-300">
                        If you choose to get your data removed, you will be suspended from ever setting a tag again.
                    </p>
                </section>

                {/* Section 4 */}
                <section id="data-usage" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#data-usage" className="hover:underline flex items-center gap-2">
                            4. Data Usage
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        The data we collect is used solely for operating the GlobalTags API and providing its core functionalities. We do not share your data with third parties unless required by law.
                    </p>
                </section>

                {/* Section 5 */}
                <section id="data-security" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#data-security" className="hover:underline flex items-center gap-2">
                            5. Data Security
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no system is completely secure, and we cannot guarantee absolute data protection.
                    </p>
                </section>

                {/* Section 6 */}
                <section id="updates-policy" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#updates-policy" className="hover:underline flex items-center gap-2">
                            6. Updates to this Privacy Policy
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."
                    </p>
                </section>

                {/* Section 7 */}
                <section id="contact-us" className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-blue-300 border-b-2 border-blue-400 pb-2 flex items-center">
                        <a href="#contact-us" className="hover:underline flex items-center gap-2">
                            7. Contact Us
                            <span className="text-blue-400 text-lg"></span>
                        </a>
                    </h2>
                    <p className="text-gray-300">
                        If you have any questions or concerns about this Privacy Policy, please reach out to us via our <Link href="/discord" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Discord server</Link>.
                    </p>
                </section>

            </div>
        </div>
    );
}
