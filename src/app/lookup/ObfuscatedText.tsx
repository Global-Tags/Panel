import { useEffect, useState } from "react";

export function ObfuscatedText({ text, interval = 50 }: { text: string, interval?: number }) {
    const [obfuscatedText, setObfuscatedText] = useState(text);

    useEffect(() => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let intervalId: NodeJS.Timeout;

        if (text) {
            intervalId = setInterval(() => {
                setObfuscatedText(
                text
                    .split('')
                    .map((char) => (char.trim() ? chars[Math.floor(Math.random() * chars.length)] : char))
                    .join('')
                );
            }, interval);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [text, interval]);

    return <span>{obfuscatedText}</span>;
}