import localFont from "next/font/local"

export const minecraft = localFont({
    src: "../fonts/Minecraft.otf",
    variable: "--minecraft",
    weight: "100 900",
});
export const minecraftBold = localFont({
    src: "../fonts/MinecraftBold.otf",
    variable: "--minecraft-bold",
    weight: "100 900",
});