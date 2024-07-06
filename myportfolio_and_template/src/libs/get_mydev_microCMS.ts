import * as MicroCMS from "microcms-js-sdk"

export type DevelopItem = {
    id: string,
    name: string,
    image:MicroCMS.MicroCMSImage,
    repository_url: string 
} & MicroCMS.MicroCMSDate

export type DevelopItems = {
    totalCount: number,
    offset: number,
    limit: number,
    contents: DevelopItem[]
}

if(!process.env.MiCROCMS_SERVICE_DOMAIN_DEVLOPDATA || !process.env.MiCROCMS_API_KEY_DEVLOPDATA){
    throw new Error("microCMS Setting Error")
}

export const NotionClient = MicroCMS.createClient({
    serviceDomain: process.env.MiCROCMS_SERVICE_DOMAIN_DEVLOPDATA,
    apiKey: process.env.MiCROCMS_API_KEY_DEVLOPDATA,
})

export async function getListData(queries?: MicroCMS.MicroCMSQueries){
    const BlogContents = await NotionClient.get<DevelopItems>({
        endpoint: "dev_data",
        queries
    })
    return BlogContents
}

export async function getDetail(contentid:string,queries?: MicroCMS.MicroCMSQueries){
    const PostData = await NotionClient.get<DevelopItem>({endpoint:"blog",contentId: contentid,queries})
    return PostData
}
