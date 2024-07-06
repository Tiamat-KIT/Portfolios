import { notFound } from "next/navigation";
import { getDetail, getListData } from "@/libs/microcms";
import Modal from "@/Component/Modal";

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
 params: { postId: string }
}) {
 const post = await getDetail(postId);

 if (!post) {
  notFound();
 }

 return (
    <Modal Post={post} />
 );
}