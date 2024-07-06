import { Show, createSignal, onMount } from "solid-js";
import { Head, Meta, useParams } from "solid-start";
import { MICROCMS_API_KEY } from "../index";
import { createClient } from "microcms-js-sdk";
import { Blog } from "~/lib/microcms";
import Loading from "~/components/Loading";
import DMeta from "~/components/Meta/DMeta";
import { url } from "inspector";

export default function Article() {
    const [Article, setArticle] = createSignal<Blog>();
    
    onMount(async () => {
        const params = useParams();
        setArticle((await createClient({
            serviceDomain: "tiamat",
            apiKey: MICROCMS_API_KEY
        }).getListDetail<Blog>({endpoint: "blog", contentId: params.id})))
    })

    return (
        <Show 
            when={Article()}
            fallback={<Loading />}
        >
            <DMeta OGData={
                {
                    title: `${Article()?.title}`,
                    description: `${Article()?.title}`,
                    type: "article",
                    url: `${process.env.VERCEL_URL}/blog-article/${Article()?.id}`,
                    img: `${Article()?.img.url}`
                }
            } 
            XData={
                {
                    title: `${Article()?.title}`,
                    url: `${process.env.VERCEL_URL}/blog-article/${Article()?.id}`,
                    description: `${Article()?.title}`,
                    img: `${Article()?.img.url}`,
                    card: "summary_large_image",
                    site: "@CYUVi1336",
                }
            } />
            <article>
                <h1 class="text-3xl font-bold text-center p-3">{Article()?.title}</h1>
                {/* <div class="w-full carousel carousel-center">
                    <div class="w-full carousel-item">
                        <img src={Article()?.img.url} width={250} height={250} />
                    </div>
                </div> */}
                <div class="bg-scroll blog-body container mx-auto px-3"  innerHTML={Article()?.body as string} />
            </article>
        </Show>
    )
}