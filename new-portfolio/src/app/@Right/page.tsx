import Link from "next/link"
import Image from "next/image"
import { getListData } from "@/libs/microcms"
import { Route } from "next"

export const revalidate = 0

export default async function Right(){
    const {contents} = await getListData()
    
    return (
        <>
            <article className="grid grid-cols-2 gap-4">
                {contents.map((item) => {
                    return (
                        <>
                            <div className="card w-50 bg-base-100 shadow-xl glass" key={item.id}>
                                <figure>
                                    <Image 
                                        src={item.img.url} 
                                        height={125}
                                        width={125}
                                        alt={item.title}
                                    />
                                </figure>
                                <div className="card-body">
                                    <Link className="card-title" href={`Blog/${item.id}` as Route}>{item.title}</Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </article>
        </>
    )
}