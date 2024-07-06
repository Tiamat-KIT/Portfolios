import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries,MicroCMSImage,MicroCMSDate } from 'microcms-js-sdk';
import { json } from "solid-start";

export type Blog = {
    id: string;
    title: string;
    body: string;
    img: MicroCMSImage;
} & MicroCMSDate

if(!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY){
    throw new Error("microCMSの機能が使えてないよ")
}
const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
});

export async function GET() {
    return json({
        blogs: await client.get<Blog[]>({ endpoint: "blog" }),
    })
}