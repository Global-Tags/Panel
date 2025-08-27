"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFile, faImage, faStar, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className="text-white flex flex-col items-center justify-center px-6">
            <div className="text-center mt-12">
            <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse leading-[1.2]">
                 Welcome to GlobalTags
                </h1>

        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Elevate your Minecraft experience with <b>custom name tags</b>! Stand out,
          customize, and shine in your community.
        </p>
      </div>

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
            </div>


            <h2 className="text-4xl font-bold mt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-400">
                🚀 Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <FeatureCard
                    title="Customizable Tags"
                    description="Position your tag anywhere - above, below, left, or right of your username."
                    icon={faFile}
                />
                <FeatureCard
                    title="Hex Color Support"
                    description="Customize your tags with any hex color for a unique look!"
                    icon={faPalette}
                />
                <FeatureCard
                    title="Icon Support"
                    description="Add unique icons next to your tag for a personal touch."
                    icon={faImage}
                />
                <FeatureCard
                    title="Java Wrapper for Easy Mod Integration"
                    description="Easily integrate GlobalTags into any mod with our Java Wrapper which ensures high compatibility due to the usage of Java 11."
                    icon={faCode}
                />
                <FeatureCard
                    title="Visible to Everyone"
                    description="Your tag is seen by all players using GlobalTags-enabled mods."
                    icon={faEye}
                />
                <FeatureCard
                    title="Unlock Premium Icon"
                    description="Use GlobalTags for free, and unlock a unique icon for your tag with the premium plan!"
                    icon={faStar}
                />

            </div>

      {/* Call-to-Actions */}
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-6 max-w-3xl w-full">
        <CTAButton
          href="https://github.com/Global-Tags/API#-known-usages"
          text="🔍 Explore Usages"
          color="blue"
        />
        <CTAButton href="/stats" text="📊 View Current Stats" color="green" />
      </div>

      {/* Global Stats */}
      <section className="mt-20 w-full max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          🌍 Global Stats
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <LargeStatBox icon="🏷️" label="Tags Created" value={2100} />
          <LargeStatBox icon="👤" label="Registered Users" value={2500} />
          <LargeStatBox icon="⚡" label="Daily Requests" value={150000} />
          <LargeStatBox icon="⬇️" label="Downloads" value={7800} />
        </div>

        {/* FAQ unterhalb der Stats */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            FAQ - Frequently Asked Questions
          </h2>
          <FAQ
                items={[
                    {
                    question: "Is GlobalTags free?",
                    answer:
                        "Yes, the basic version is completely free. Premium features are available with an optional license.",
                    },
                    {
                    question: "Which Minecraft versions are supported?",
                    answer:
                        "All versions are available.",
                    },
                    {
                    question: "How do I install GlobalTags via the LabyAddon Store (ingame)?",
                    answer:
                        "Open the LabyMod ingame menu, go to the Addon Store, search for GlobalTags, and click install.",
                    },
                ]}
                />

        </div>
      </section>

      {/* Contribution Section */}
      <section className="mt-20 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
          🤝 Get Involved
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Want to contribute? Whether you're a developer, designer, or just a fan, you
          can help improve GlobalTags! Check out our documentation to get started.
        </p>
        <div className="mt-6">
          <CTAButton href="https://docs.globaltags.xyz/" text="📖 View Documentation" color="purple" />
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: IconDefinition }) => (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FontAwesomeIcon icon={icon} /> {title}
        </h3>
        <p className="text-gray-300 mt-2">{description}</p>
    </div>
);

const colors = {
    blue: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
    green: "from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
    purple: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
};

const CTAButton = ({ href, text, color }: { href: string, text: string, color: keyof typeof colors }) => {
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

const LargeStatBox = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 4000; 
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 20));
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const formattedCount = count.toLocaleString();

  return (
    <div className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-lg flex items-center gap-6">
      <div className="text-6xl">{icon}</div>
      <div>
        <p className="text-3xl font-bold">{formattedCount}+</p>
        <p className="text-gray-300 text-lg">{label}</p>
      </div>
    </div>
  );
};

const FAQ = ({
  items,
}: {
  items: { question: string; answer: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-6 space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-800 bg-opacity-60 rounded-lg p-5 cursor-pointer"
          onClick={() => toggleIndex(idx)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{item.question}</h3>
            <span className="text-3xl select-none">
              {openIndex === idx ? "−" : "+"}
            </span>
          </div>
          {openIndex === idx && (
            <p className="mt-3 text-gray-300 text-base">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};
