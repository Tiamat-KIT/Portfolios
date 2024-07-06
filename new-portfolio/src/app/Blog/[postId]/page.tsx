import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getListData } from "@/libs/microcms";

// キャッシュを利用しない
export const revalidate = 0;

export async function generateStaticParams() {
 const { contents } = await getListData();

 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {
 const post = await getDetail(postId);

 if (!post) {
  notFound();
 }

 return (
  <div className="prose content-center mx-auto">
   <h1 className="text-3xl">{post.title}</h1>
   <div>{parse(post.body)}</div>
  </div>
 );
}