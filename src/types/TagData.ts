type TagData = {
    uuid: string,
    username?: string | null,
    tag?: string | null,
    position: string,
    icon: string,
    roles: string[],
    referrals: number
}

export default TagData;