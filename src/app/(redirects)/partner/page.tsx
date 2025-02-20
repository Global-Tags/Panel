import { config } from "@/app/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { metadata as partnershipMetadata } from "@/app/partnership/page";

export const metadata: Metadata = partnershipMetadata;

export default function Partner() {
    redirect('/partnership');
}