"use client"
import { minecraft } from "@/app/fonts";
import TagData from "@/types/TagData";
import { FormEvent, useState } from "react";

const colorCodeMapping: any = {
    '0': '#000000',
    '1': '#0000AA',
    '2': '#00AA00',
    '3': '#00AAAA',
    '4': '#AA0000',
    '5': '#AA00AA',
    '6': '#FFAA00',
    '7': '#AAAAAA',
    '8': '#555555',
    '9': '#5555FF',
    'a': '#55FF55',
    'b': '#55FFFF',
    'c': '#FF5555',
    'd': '#FF55FF',
    'e': '#FFFF55',
    'f': '#FFFFFF',
};

const parseMinecraftTag = (tag: string) => {
    const colorCodePattern = /&([0-9a-fk-or])/g;
    const parts = tag.split(colorCodePattern);
    const elements = [];

    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
            elements.push(parts[i]);
        } else {
            const colorCode = parts[i];
            const color: string = colorCodeMapping[colorCode] || '#FFFFFF';
            elements.push(<span key={i} style={{ color }}>{parts[++i]}</span>);
        }
    }

    return elements;
};

export default function TagLookup() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState<TagData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!query || query.trim().length < 1) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/lookup/${query}`);
            const result = await response.json();
            if(!response.ok) throw new Error(result.error);

            setData({
                uuid: result.uuid,
                username: result.username,
                tag: result.tag,
                position: result.position,
                icon: result.icon.toLowerCase(),
                roles: result.roles,
                referrals: result.referrals
            });
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    function capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return (
        <div className="flex flex-col justify-center items-center text-white container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">GlobalTag Lookup</h1>

            {loading && (
                <p className="text-gray-400 text-lg">Loading data...</p>
            )}

            {error && (
                <p className="text-red-500 text-lg">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="mt-4 mb-6 w-72 max-w-md">
                <input
                    type="text"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Enter a username or UUID..."
                />
                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="bg-blue-500 px-6 py-2 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Lookup
                    </button>
                </div>
            </form>

            {data && (
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Player Information:</h2>
                    <p>UUID: <span className="font-medium">{data.uuid}</span></p>
                    {data.username && (
                        <p>Username: <span className="font-medium">{data.username}</span></p>
                    )}
                    {data.tag ? (
                        <div className="flex items-center">
                            <p className='mr-2'>Tag:</p>
                            {data.icon != "none" && (
                                <img src={`https://cdn.rappytv.com/globaltags/icons/${data.icon}.png`} alt={data.icon} className="w-6 h-6" />
                            )}
                            <span className={`ml-1 text-lg ${minecraft.className}`}>{parseMinecraftTag(data.tag)}</span>
                        </div>
                    ) : <p>Tag: <span className="font-medium">No tag</span></p>}
                    <p>Tag Position: <span className="font-medium">{capitalize(data.position)}</span></p>
                    <p>Referral Amount: <span className="font-medium">{data.referrals}</span>{data.referrals > 5 && ' 🎉'}</p>
                    {data.roles.length > 0 && (
                        <div>
                            <p className="mb-1">Roles:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                {data.roles.map((role, index) => (
                                    <li key={index}>{capitalize(role)}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}