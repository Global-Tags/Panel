import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">Welcome to GlobalTags</h2>
            
            <p className="text-xl mb-6 text-gray-400">
                Every player using a GlobalTags mod implementation can select a <strong>custom tag</strong> to display next to their username. This tag can be:
            </p>
            
            <ul className="list-disc list-inside mb-8 text-gray-400">
                <li><strong>Positioned</strong> as desired - above, below, to the right, or to the left of their username.</li>
                <li><strong>Accompanied</strong> by an optional icon displayed to the left of the tag.</li>
            </ul>

            <p className="text-xl mb-6 text-gray-400">
                This personalized tag will be visible to all other players who have any of the GlobalTags mods installed, enhancing the customized experience within your Minecraft community. The API is designed to facilitate this functionality and is completely free to use - forever!
            </p>

            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
                <Link
                    href="https://github.com/Global-Tags/API#-known-usages"
                    className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-blue-600 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Explore usages
                </Link>
                <Link
                    href="/stats"
                    className="bg-green-500 md:ml-2 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-green-600 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View Current Stats
                </Link>
            </div>
            
            <section className="mt-12">
                <h3 className="text-3xl font-semibold mb-4 text-gray-100">🤝 Contributing</h3>
                <p className="text-xl mb-6 text-gray-400">
                    Ready to integrate GlobalTags into your Minecraft client/modding framework? Visit our Documentation for comprehensive guides and example code. We provide everything you need to get started with ease.
                </p>
                <Link
                    href="https://docs.globaltags.xyz/"
                    className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold text-white hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Documentation
                </Link>
            </section>
        </div>
    );
}
