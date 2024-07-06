import { ImageResponse } from "next/server"

export const runtime = 'edge'
export const revalidate = 10
export const contentType = "image/png"
export const alt = "泡沫京水のポートフォリオ"
export const size = {
    width: 1200,
    height: 600
}

export default function (){
    return new ImageResponse(
        (
        <div
            style={{
            fontSize: 128,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: "30px",
            backgroundImage: "linear-gradient(133deg, rgba(65, 253, 231, 1), rgba(93, 151, 255, 1) 50%, rgba(0, 61, 138, 1))"
            }}
            tw="flex"
        >
            <div tw="flex justify-center" 
                style={{
                width: "95%",
                height:"95%",
                backgroundColor: "rgba(	245,245,245,0.75)"
                }} >
            <p tw="text-justify flex">UtakataKyosui Portfolio</p>
            </div>
        </div>
        ),
    );
}

// https://www.npmjs.com/package/@vercel/og
// https://zenn.dev/hiromu617/articles/c03fef6f4d6c6e
// https://zenn.dev/monicle/articles/f02e4a12da960b
// https://www.newt.so/docs/tutorials/vercel-og-image-generation
// https://zenn.dev/panda_program/articles/generate-og-image
// https://zenn.dev/gesupher/articles/916e24e8e63ff0#3.-vercel-hosting-%2B-next.js-(%E6%88%90%E5%8A%9F)
// https://egashira.dev/blog/dynamic-og-image
// https://route360.dev/ja/post/vercel-og-image/
// https://zenn.dev/denham/articles/b2378462d54823#og%E3%81%AE%E7%94%9F%E6%88%90
// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples
