// "use client"

import "css/global.css"

import Carousel,{CarouselItem} from "@/Component/util/Carousel"
import Container from "@/Component/util/Container"
import Flex from "@/Component/util/Flex"
import SeoComponent from "@/Component/SEO/SEO"
import { Metadata } from "next"
import MicroCMSMyProfile from "@/Component/util/MicroCMSMyProfile"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { getListData } from "@/libs/microcms"
import { BlogPromiseProps } from "@/Component/Blog/SuspenseMicroCMSBlog"
import Navbar from "@/Component/util/Navbar"

/* export async function generateMetadata(){
    const title = "UtakataPortfolio"
    return {title: title} */
    /* SeoComponent({
      title: title,
      description: title,
      url: `${process.env.NEXTAUTH_URL}`,
      imageUrl: `${process.env.NEXTAUTH_URL}api/og?title=${title}`
    }) */
/* } */

/* export async function generateMetadata(): Promise<Metadata>{
  return 
} */

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

/* const TwitterTimeLine = dynamic(() => import("@/Component/Twitter/TwitterTL"),{
  loading: () => (
    <h1 className="text-xl">Loading Utakata's Tweet's Data</h1>
  ),
  ssr: false
}) */

export const revalidate = 0;

export default async function Home(){
  const data = await getListData()
  if(!data/*  || data.length === 0 */){
    return(
      <p>BlogData NotFound</p>
    )
  }
  const Item: CarouselItem[] = [
    {
      src: "/header.png",
      alt: "泡沫京水がよく使うヘッダー画像"
    },
  ]

  return (
    <>
      <Navbar  />
      <main>
        <Container>
          <Carousel CarouselList={Item}/>
        </Container>
        <Container Other="py-5">
          <div className="card shadow-xl">
            <div className="card-body card-bordered	bg-white">{await MicroCMSMyProfile()}</div>
          </div>
        </Container>
        <Container>
        <Suspense fallback={(
            <h1 className="text-xl">Loading-BlogData</h1>
          )}>
            {/* @ts-expect-error Server Component */}
            <BlogPromiseProps PromiseBlogResponse={data} />
          </Suspense>
        </Container>
        <Container>
          <Flex>
            <div className="basis-3/4" />
            {/* <TwitterTimeLine /> */}
          </Flex>
        </Container>
      </main>
    </>
  )
}

// https://zenn.dev/denham/articles/b2378462d54823
// https://ogp.buta3.net/