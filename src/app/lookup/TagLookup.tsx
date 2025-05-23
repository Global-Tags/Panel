"use client"
import { minecraft, minecraftBold } from "@/app/fonts";
import TagData from "@/types/TagData";
import { parseComponent, StyledSegment } from "@/util/Components";
import { FormEvent, useEffect, useState } from "react";
import { ObfuscatedText } from "./ObfuscatedText";

const renderTag = (segments: StyledSegment[]) => {
    return segments.map((segment, index) => {
        const isObfuscated = segment.decorations.includes('obfuscated');

        return (
            <span
                key={index}
                style={{
                fontFamily: segment.decorations.includes('bold') ? minecraftBold.style.fontFamily : minecraft.style.fontFamily,
                color: segment.color,
                fontWeight: segment.decorations.includes('bold') ? 'bold' : undefined,
                fontStyle: segment.decorations.includes('italic') ? 'italic' : undefined,
                textDecoration: segment.decorations.includes('underlined')
                    ? 'underline'
                    : segment.decorations.includes('strikethrough')
                    ? 'line-through'
                    : undefined,
                }}
            >
                {isObfuscated ? <ObfuscatedText text={segment.text} /> : segment.text}
            </span>
        )
    });
};

export default function TagLookup({ prefetch }: { prefetch: string | null }) {
    const [query, setQuery] = useState(prefetch || '');
    const [data, setData] = useState<TagData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);

    async function lookup() {
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
                icon: result.icon,
                roles: result.roles,
                referrals: result.referrals
            });
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(!prefetch) return;
        lookup();
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        lookup();
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
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Player Information:</h2>
                        <div className="relative">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(`${window.location.origin}/lookup?username=${data.username || data.uuid}`);
                                    setCopySuccess(true);
                                    setTimeout(() => setCopySuccess(false), 1000);
                                }}
                                className={`${copySuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-600'} p-2 rounded-full transition-colors duration-300`}
                                title="Copy link"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    {copySuccess ? (
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                    ) : (
                                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
              
                    <p>UUID: <span className="font-medium">{data.uuid}</span></p>
                    {data.username && (
                        <p>Username: <span className="font-medium">{data.username}</span></p>
                    )}
                    {data.tag ? (
                        <div className="flex items-center">
                            <p className="mr-2">Tag:</p>
                            {data.icon.type.toLowerCase() != 'none' && (data.icon.type.toLowerCase() == 'custom' ? (
                                <img src={`https://api.globaltags.xyz/players/${data.uuid}/icon/${data.icon.hash}`} alt={data.icon.type.toLowerCase()} className="w-6 h-6" />
                            ) : (
                                <img src={`https://cdn.rappytv.com/globaltags/icons/${data.icon.type.toLowerCase()}.png`} alt={data.icon.type.toLowerCase()} className="w-6 h-6" />
                            ))}
                            <span className="ml-1 text-lg">{renderTag(parseComponent(data.tag))}</span>
                        </div>
                    ) : <p>Tag: <span className="font-medium">No tag</span></p>}
                    <p>Tag Position: <span className="font-medium">{capitalize(data.position)}</span></p>
                    <div>
                        <p className="mb-1">Referrals:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>In total: <span className="font-medium">{data.referrals.total_referrals}</span>{data.referrals.total_referrals >= 10 && ' 🎉'}</li>
                            <li>This month: <span className="font-medium">{data.referrals.current_month_referrals}</span>{data.referrals.current_month_referrals >= 5 && ' 🎉'}</li>
                        </ul>
                    </div>
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