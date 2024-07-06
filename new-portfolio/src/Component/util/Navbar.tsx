"use client"
import { Session } from "next-auth";
import { useSession,signIn,signOut } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import ThemeChangeButton from "./Theme/ThemeButton";
import type { Route } from "next";

export type NavbarLinkObject = {
    href: Route,
    LinkName: string
}

export default function Navbar(
    {
        color = "bg-info",
        LinkObjects
    }
    :
    {
        color?: string
        LinkObjects?: NavbarLinkObject[] 
    }){
        return(
            <header className={`navbar bg-base-50 ${color}`}>
                <nav className="flex-1">
                    <Link href={"/" as Route}  className="btn btn-ghost text-md">MyPage</Link>
                    {LinkObjects?.map((LinkObj) => {
                        return (
                            <>
                                <Link href={LinkObj.href} className="btn btn-ghost text-md">{LinkObj.LinkName}</Link>
                            </>
                        )
                    })}
                    <ThemeChangeButton />
                </nav>
            </header>
        )
    /* } */
}
