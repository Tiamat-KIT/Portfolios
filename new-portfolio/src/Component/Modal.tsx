"use client"
import React, { useCallback,useRef,useEffect,MouseEventHandler } from "react"
import parse from "html-react-parser";
import { useRouter } from "next/navigation"
import { BlogData } from "@/libs/microcms"
import Image from "next/image";

export default function Modal(
    {Post}:{Post:BlogData}
){
    // https://github.com/vercel-labs/nextgram/blob/main/src/components/modal/Modal.tsx
    const OverLay = useRef(null)
    const Wrapper = useRef(null)
    const Router = useRouter()

    const onDismiss = useCallback(() => {Router.back()},[Router])
    const onClick: MouseEventHandler = useCallback(
        (event) => {
            if(event.target === OverLay.current || event.target === Wrapper.current){
                if(onDismiss) onDismiss()
            }
        },[onDismiss,OverLay,Wrapper]
    )

    const onKeyDown = useCallback(
        (KeyEvent: KeyboardEvent) => {
            if(KeyEvent.key === "Escape") onDismiss()
        },[onDismiss]
    )

    useEffect(() => {
        document.addEventListener("keydown",onDismiss)
        return () => document.removeEventListener("keydown",onKeyDown)
    })

    return (
        <div 
            ref={OverLay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-30"
            onClick={onClick}
        >
            {/* <div
                ref={Wrapper}
                className="bg-base-content/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
            > */}
            <div
                ref={Wrapper}
                className="bg-violet-300/80 card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
            >
                {/* <figure>
                    <img 
                        src={Post.img.url} 
                        alt={Post.title}
                        width={Post.img.width}
                        height={Post.img.height}
                    />
                </figure> */}
                <div className="prose text-base-content">
                    <h1 className="card-title">{Post.title}</h1>
                    <div>{parse(Post.body)}</div>
                </div>
            </div>
        </div>
    )
}
