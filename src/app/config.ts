export const config = {
    appUrl: process.env.APP_URL!,
    apiUrl: process.env.NEXT_PUBLIC_API_BASE!,
    apiAuth: process.env.API_AUTH!,
    team: {
        categories: JSON.parse(process.env.APP_TEAM_CATEGORIES!) as { id: string, name: string }[],
        members: JSON.parse(process.env.APP_TEAM_MEMBERS!) as { id: string, username: string, category: string, role: string, joinedAt: number }[]
    },
    partners: JSON.parse(process.env.APP_PARTNERS!) as { name: string, type: string, logo: string }[],
    locale: process.env.APP_LOCALE!
}