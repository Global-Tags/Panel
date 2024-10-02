export const config = {
    appUrl: process.env.APP_URL!,
    apiUrl: process.env.NEXT_PUBLIC_API_BASE!,
    apiAuth: process.env.API_AUTH!,
    team: JSON.parse(process.env.APP_TEAM!) as { id: string, username: string, category: string, role: string, joinedAt: number }[]
}