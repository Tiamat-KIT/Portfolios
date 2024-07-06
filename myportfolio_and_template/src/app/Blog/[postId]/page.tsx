import { notFound } from "next/navigation";
import parse from "html-react-parser"
import { getDetail,getListData } from "@/libs/microcms";
import Container from "@/Component/util/Container";
import SeoComponent from "@/Component/SEO/SEO"
import { Metadata } from "next"

export async function generateStaticParams(){
    const {contents} = await getListData()

    const paths = contents.map((post) => {
        return {
            postId: post.id
        }
    })
    return [...paths]
}

export async function generateMetadata(
        {params: {postId}}:
        {params: {postId:string}}
    ){
        const post_title = (await getDetail(postId)).title
    const title = `${post_title} | UtakataPortfolio`
    if(title) {
        return {
            title: title
        }
    }
    
    /* SeoComponent({
      title: title,
      description: title,
      url: `${process.env.NEXTAUTH_URL}`,
      imageUrl: `${process.env.NEXTAUTH_URL}api/og?title=${title}`
    } */
}



export default async function StaticDetailPage({params: {postId}}:{params: {postId:string}}){
    const post = await getDetail(postId)
    if(!post){
        notFound()
    }
    return(
        <Container>
            <h1 className="text-3xl pb-5">{post.title}</h1>
            <Container Other="bg-blue-100">
                <div className="p-5">{parse(post.body)}</div>
            </Container>
       </Container>
    )
}
