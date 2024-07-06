import { Route } from "next";
import Image from "next/image";
import Link from "next/link";

/**
 * @param ブログ記事一覧のカード
 * @returns {JSX.Element}
 */

export default function BlogCard({title,link,img}:{title:string,link:Route,img: string}){
    return (
        <div className="card shadow-xl button flex-1">
            <figure><Image alt={title} src={img} /></figure>
            <div className="card-body">
                <Link href={link}>
                    <h2 className="card-title">{title}</h2>
                </Link>
            </div>
        </div>
    )
}