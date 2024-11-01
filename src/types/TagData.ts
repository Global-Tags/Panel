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
    referrals: number
}

export default TagData;