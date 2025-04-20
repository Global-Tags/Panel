import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center px-6">
            {/* Hero Section */}
            <div className="text-center mt-12">
            <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse leading-[1.2]">
                 Welcome to GlobalTags
                </h1>

                <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                    Elevate your Minecraft experience with <b>custom name tags</b>! Stand out, customize, and shine in your community.
                </p>
            </div>

            {/* Hero Images (nebeneinander) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <Image 
                        src="/tag2.png" 
                        alt="Example of a custom tag in Minecraft" 
                        width={500} 
                        height={300} 
                        className="rounded-xl shadow-2xl"
                    />
                </div>
                <div>
                    <Image 
                        src="/tag.png" 
                        alt="Another example of a custom tag in Minecraft" 
                        width={500} 
                        height={300} 
                        className="rounded-xl shadow-2xl"
                    />
                </div>
                <div>
                    <Image 
                        src="/tag4.png" 
                        alt="Another example of a custom tag in Minecraft" 
                        width={500} 
                        height={300} 
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </div>


            {/* Features Section */}
            <h2 className="text-4xl font-bold mt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400">
                🚀 Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <FeatureCard
                    title="Customizable Tags"
                    description="Position your tag anywhere - above, below, left, or right of your username."
                    icon="🎨"
                />
                <FeatureCard
                    title="Hex Color Support"
                    description="Customize your tags with any hex color for a unique look!"
                    icon="🌈"
                />
                <FeatureCard
                    title="Icon Support"
                    description="Add unique icons next to your tag for a personal touch."
                    icon="⭐"
                />
                <FeatureCard
                    title="Java Wrapper for Easy Mod Integration"
                    description="Easily integrate GlobalTags into any mod with our Java Wrapper which ensures high compatibility due to the usage of Java 11."
                    icon="🛠️"
                />
                <FeatureCard
                    title="Visible to Everyone"
                    description="Your tag is seen by all players using GlobalTags-enabled mods."
                    icon="👀"
                />
                <FeatureCard
                    title="Unlock Premium Icon"
                    description="Use GlobalTags for free, and unlock a unique icon for your tag with the premium plan!"
                    icon="🌟"
                />

            </div>

            {/* Call-to-Actions */}
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
                <CTAButton href="https://github.com/Global-Tags/API#-known-usages" text="🔍 Explore Usages" color="blue" />
                <CTAButton href="/stats" text="📊 View Current Stats" color="green" />
            </div>

            {/* Contribution Section */}
            <section className="mt-20 text-center">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
                    🤝 Get Involved
                </h2>
                <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
                    Want to contribute? Whether you're a developer, designer, or just a fan, 
                    you can help improve GlobalTags! Check out our documentation to get started.
                </p>
                <div className="mt-6">
                    <CTAButton href="https://docs.globaltags.xyz/" text="📖 View Documentation" color="purple" />
                </div>
            </section>
        </div>
    );
}

/* Feature Card Component */
const FeatureCard = ({ title, description, icon }) => (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
            {icon} {title}
        </h3>
        <p className="text-gray-300 mt-2">{description}</p>
    </div>
);

/* Call-to-Action Button Component */
const CTAButton = ({ href, text, color }) => {
    const colors = {
        blue: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
        green: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
        purple: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
    };
    
    return (
        <Link
            href={href}
            className={`px-8 py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r ${colors[color]} shadow-lg hover:scale-105 transition-all duration-300`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </Link>
    );
};
