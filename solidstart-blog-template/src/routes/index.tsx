/* import { createRouteData, useServerContext } from "solid-start"; */
import { MicroCMSDate, MicroCMSImage, MicroCMSListResponse, createClient } from "microcms-js-sdk";
import { createSignal,onMount,For,createEffect } from "solid-js";
import { A, Head, Meta, Title } from "solid-start";
import DMeta,{OGProperty,TwitterProperty} from "~/components/Meta/DMeta";

type Blog = {
    id: string;
    title: string;
    body: string;
    img: MicroCMSImage;
} & MicroCMSDate

export const MICROCMS_API_KEY = import.meta.env.VITE_MICROCMS_API_KEY ? import.meta.env.VITE_MICROCMS_API_KEY as string : process.env.MICROCMS_API_KEY as string
if(!MICROCMS_API_KEY){
    throw new Error("MicroCMSの機能使えてないよ")
}
export default function BlogList() {
    
    const [BlogContentsList, setBlogContentsList] = createSignal<MicroCMSListResponse<Blog>["contents"]>([]);

    onMount(async () => {
        setBlogContentsList((await createClient({
            serviceDomain: "tiamat",
            apiKey: MICROCMS_API_KEY
        }).getList<Blog>({"endpoint": "blog"})).contents)
    })

    const HOME_OG: OGProperty = {
        title: "Home",
        url: process.env.VERCEL_URL as string,
        description: "Utakata's Blog",
        type: "blog",
        img: "https://storage.googleapis.com/zenn-user-upload/avatar/23006fbb79.jpeg"
    }

    const X_OG: TwitterProperty = {
        title: HOME_OG.title,
        description: HOME_OG.description,
        card: "summary_large_image",
        site: "@CYUVi1336",
        url: HOME_OG.url,
        img: HOME_OG.img
    }
    return (
        <article>
            <Head>
                <DMeta OGData={HOME_OG} XData={X_OG}/>
            </Head>
            <div class="container mx-auto px-5">
                <h1 class="text-3xl font-bold text-center p-3">Blog</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <For 
                        each={BlogContentsList()} 
                        /* fallback={
                            <span class="flex justify-center">
                                <span class="loading loading-spinner text-neutral" />
                            </span>
                        } */>
                        {(blog) => (
                            <A href={`/blog-article/${blog.id}`}>
                                <section class="card shadow-xl">
                                    <figure>
                                        <img src={blog.img.url} alt="null"/>
                                    </figure>
                                    <div class="card-body">
                                        <h2 class="card-title">
                                            {blog.title}
                                        </h2>
                                        <p>投稿日:{new Date(blog.publishedAt as string).toLocaleString("ja-jp")}</p>
                                        {/* <p>{blog.updatedAt}</p> */}
                                    </div>
                                </section>
                            </A>
                        )}
                    </For>
                </div>
            </div> 
        </article>
    )
}