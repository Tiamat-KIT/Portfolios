import {Meta,Title} from "solid-start"
export type OGProperty = {
    title: string,
    url: string,
    description: string
    type: "blog" | "article",
    img: string
}
export type TwitterProperty = {
    title: string,
    url: string,
    card: "summary_large_image"
    site: "@CYUVi1336"
    description: string,
    img: string
}

export default function DMeta({OGData,XData}:{OGData: OGProperty,XData: TwitterProperty}){
    return (
        <>
            <Title>{OGData.title} | UtakataBlog</Title>
            <Meta charset="utf-8" />
            {/** og:***のプロパティをここにまとめる */}
            {/* <Meta property="og:image" content={`${Article()?.img.url}`} /> */}
            <Meta property="og:title" content={OGData.title} />
            <Meta property="og:url" content={OGData.url} />
            <Meta property="og:description" content={OGData.description} />
            <Meta property="og:type" content={OGData.type} />
            <Meta 
                property="og:image"
                content={OGData.img}
            />
            {/** og:***のプロパティをここにまとめる */}
            {/** twitter:***のプロパティをここにまとめる */}
            <Meta property="twitter:title" content={XData.title} />
            <Meta 
                property="twitter:image:src"
                content={XData.img}
            />
            <Meta property="twitter:description" content={XData.description} />
            <Meta name="twitter:card" content={XData.card} />
            <Meta name="twitter:site" content={XData.site} />
            {/** twitter:***のプロパティをここにまとめる */}
            <Meta name="viewport" content="width=device-width, initial-scale=1" />
        </>
    )
}