import { getDetail } from "@/libs/microcms";
import { ImageResponse } from "next/server";

export const runtime = 'edge'
export const revalidate = 10
export const contentType = "image/png"
export const alt = "泡沫ブログ"
export const size = {
  width: 1200,
  height: 600
}

export default async function (
    {params: {postId}}:
    {params: {postId:string}}
){
  const title = (await getDetail(postId)).title

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
          <p tw="text-justify flex">{title}</p>
        </div>
      </div>
    )
  );
}
