import { getListData } from "@/libs/get_mydev_microCMS"
import Image from "next/image"
import Link from "next/link"
export default async function MyDevelopments(){
    const dev_data = await getListData()

    if(!dev_data){
        return <p className="text-red-200">はよ成果物作れや</p>
    }
    return  (
        <>
            <h1 className="text-3xl text-bold">MyDevelopments</h1>
            <div className="flex">
                {dev_data.contents.map((item)=> {
                    return(
                        <div className="p-5">
                            <p className="text-bold">{item.name}</p>
                            <Image alt="成果物" src={item.image.url} width={250} height={250} />
                            <Link className="btn" href={item.repository_url}>実際のページへ</Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}