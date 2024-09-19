import Link from 'next/link';
import React from 'react';

export default function Privacy() {
    return (
        <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
            <div className="container mx-auto px-4 py-8 bg-gray-800 rounded-lg shadow-lg flex-1">
                <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">Privacy Policy for the GlobalTags API</h1>

                <p className="mb-4"><strong>Effective Date:</strong> 15.09.2024</p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">1. Data Collection</h2>
                <p className="mb-4">When you send a request to the GlobalTags API, we automatically collect and store the following information into a secure logfile. We do not collect any other personal information unless explicitly provided by you.</p>
                <ul className="list-disc pl-5 mb-4">
                <li><strong>UUID (Universally Unique Identifier):</strong> The UUID you tried to request the info of.</li>
                <li><strong>Minecraft version:</strong> Your game version.</li>
                <li><strong>Agent version:</strong> The version of the Agent you are using e.g. "LabyMod Addon", "Fabric Mod", etc.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">2. Tag System and Additional Data</h2>
                <p className="mb-4">When interacting with GlobalTags, we store additional information to support the API's functionality, including but not limited to:</p>
                <ul className="list-disc pl-5 mb-4">
                <li><strong>Tag:</strong> The tag you set for yourself via the API.</li>
                <li><strong>Tag Position:</strong> The position of your tag you set for yourself via the API.</li>
                <li><strong>Tag Icon:</strong> The tag icon you set for yourself via the API.</li>
                <li><strong>Tag History:</strong> A history of your past tags.</li>
                <li><strong>Reports:</strong> Any reports filed against you within the system.</li>
                <li><strong>Roles:</strong> Roles assigned to you within the GlobalTags system.</li>
                <li><strong>Referrals:</strong> Information regarding any users you have invited to use GlobalTags.</li>
                <li><strong>Ban Information:</strong> Details about any bans or restrictions imposed on your account.</li>
                <li><strong>Social Connections:</strong> Data about social media accounts which you linked to your account.</li>
                <li><strong>API Keys:</strong> If applicable, your API keys for accessing the system.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">3. Deleting and Managing Your Data</h2>
                <p className="mb-4"><strong>Deleting a Tag:</strong> If you delete your tag, the document associated with your UUID will remain in our database, but your tag will no longer be visible to other users.</p>
                <p className="mb-4"><strong>Removing Your Document:</strong> If you wish to completely remove your document from our system, please join our Discord server and create a <a href="https://discord.com/channels/1254446736999579740/1254450410308108368" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">new ticket</a>. You can access the Discord server <Link href="/discord" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">here</Link>.</p>
                <p>If you choose to get your data removed, you will be suspended from ever setting a tag again.</p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">4. Data Usage</h2>
                <p className="mb-4">The data we collect is used solely for operating the GlobalTags API and providing its core functionalities. We do not share your data with third parties unless required by law.</p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">5. Data Security</h2>
                <p className="mb-4">We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no system is completely secure, and we cannot guarantee absolute data protection.</p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">6. Updates to this Privacy Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."</p>

                <h2 className="text-2xl font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-4">7. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please reach out to us via our <Link href="/discord" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Discord server</Link>.</p>
            </div>
        </div>
    );
};