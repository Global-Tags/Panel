export type TextDecoration = 'bold' | 'italic' | 'underlined' | 'strikethrough' | 'obfuscated';

export interface StyledSegment {
    text: string;
    color?: string;
    decorations: TextDecoration[];
}

const colorCodeMapping: Record<string, string> = {
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

const decorationMapping: Record<string, TextDecoration> = {
    'l': 'bold',
    'o': 'italic',
    'n': 'underlined',
    'm': 'strikethrough',
    'k': 'obfuscated',
};

export const parseComponent = (input: string): StyledSegment[] => {
    const RESET_CHAR = 'r';
    const colorCodePattern = /(&[0-9a-fk-or])|<#[0-9a-fA-F]{1,8}>/gi;

    const segments: StyledSegment[] = [];
    let currentColor: string | undefined;
    let currentDecorations: Set<TextDecoration> = new Set();

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = colorCodePattern.exec(input)) !== null) {
        if (match.index > lastIndex) {
            segments.push({
                text: input.substring(lastIndex, match.index),
                color: currentColor,
                decorations:
                    currentDecorations.size > 0
                        ? Array.from(currentDecorations)
                        : [],
            });
        }

        const matchedCode = match[0];
        if (matchedCode.startsWith('&')) {
            const code = matchedCode[1];
            if (code === RESET_CHAR) {
                currentColor = undefined;
                currentDecorations.clear();
            } else if (colorCodeMapping[code]) {
                segments.push({
                    text: '',
                    color: undefined,
                    decorations: [],
                });
                currentColor = colorCodeMapping[code];
                currentDecorations.clear();
            } else if (decorationMapping[code]) {
                currentDecorations.add(decorationMapping[code]);
            }
        } else if (matchedCode.startsWith('<#')) {
            segments.push({
                text: '',
                color: undefined,
                decorations: [],
            });
            currentColor = matchedCode.slice(1, -1);
            currentDecorations.clear();
        }

        lastIndex = colorCodePattern.lastIndex;
    }

    if (lastIndex < input.length) {
        segments.push({
            text: input.substring(lastIndex),
            color: currentColor,
            decorations:
                currentDecorations.size > 0
                    ? Array.from(currentDecorations)
                    : [],
        });
    }

    return segments;
};