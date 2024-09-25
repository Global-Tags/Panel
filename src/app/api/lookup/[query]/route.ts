import { config } from "@/app/config";
import { NextRequest, NextResponse } from "next/server";
const uuidRegex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){4}[a-f0-9]{8}|[a-f0-9]{8}(?:[a-f0-9]{4}){4}[a-f0-9]{8}/;

export const revalidate = 0;

export async function GET(request: NextRequest, { params: { query } }: { params: { query: string } }) {
    try {
        let name, uuid = query;
        if(!uuidRegex.test(uuid)) {
            try {
                const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${uuid}`);
                const result = await response.json();
                if(!response.ok) return new NextResponse(JSON.stringify({ error: result.errorMessage || 'Failed to retrieve uuid from username!' }), { status: response.status });
                uuid = result.id;
                name = result.name;
            } catch(error: any) {
                return new NextResponse(JSON.stringify({ error: error?.message || 'Failed to retrieve uuid from username!' }), { status: 500 });
            }
        }

        const response = await fetch(`${config.apiUrl}/players/${uuid}`, { headers: { 'Authorization': `Bearer ${config.apiAuth}` } });
        const result = await response.json();
        if(!response.ok) return new NextResponse(JSON.stringify({ error: result.error || 'Failed to retrieve tag data!' }), { status: response.status });

        return new NextResponse(JSON.stringify({ username: name, ...result }), { status: 200 });
    } catch(error: any) {
        return new NextResponse(JSON.stringify({ error: error?.message || 'Failed to request tag data!' }), { status: 500 });
    }
}