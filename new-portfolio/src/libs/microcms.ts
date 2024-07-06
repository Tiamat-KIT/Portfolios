import {
    createClient,
    MicroCMSDate,
    MicroCMSImage,
    MicroCMSQueries,
} from "microcms-js-sdk"

export type BlogData = Record<"id" | "title" | "body" ,string> & {img: MicroCMSImage } & MicroCMSDate

export type MyProfile = Record<"title" | "text",string> & MicroCMSDate

export type BlogDataResponse = {
    totalCount: number,
    offset: number,
    limit: number,
    contents: BlogData[]
}

export type MyProfileResponse = {
    totalCount: number,
    offset: number,
    limit: number,
    contents: MyProfile[]
}

if(!process.env.MiCROCMS_SERVICE_DOMAIN as unknown as string|| !process.env.MiCROCMS_API_KEY as unknown as string){
    throw new Error("microCMS Setting Error")
}

export const NotionClient = createClient({
    serviceDomain: process.env.MiCROCMS_SERVICE_DOMAIN as string,
    apiKey: process.env.MiCROCMS_API_KEY as string,
})

export async function getListData(queries?: MicroCMSQueries){
    const BlogContents = await NotionClient.get<BlogDataResponse>({
        endpoint: "blog",
        queries
    })
    return BlogContents
}

export async function getDetail(contentid:string,queries?: 
MicroCMSQueries){
    const PostData = await NotionClient.get<BlogData>({endpoint:"blog",contentId: contentid,queries})
    return PostData
}

export async function getProfile(){
    const ProfileData = await NotionClient.get<MyProfileResponse>({endpoint:"person"})
    return ProfileData
}