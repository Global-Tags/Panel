type TagData = {
    uuid: string,
    username?: string | null,
    tag?: string | null,
    position: string,
    icon: {
        type: string,
        hash: string
    },
    roles: string[],
    referrals: {
        has_referred: boolean,
        total_referrals: number,
        current_month_referrals: number
    }
}

export default TagData;