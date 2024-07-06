"use client"
import { Session } from "next-auth";
import { useSession,signIn,signOut } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import ThemeChangeButton from "./Theme/ThemeButton";

export default function Navbar({color = "bg-info"}:{color?: string}){
    /* const {data:session} = useSession()
    if(session === null || session === undefined){
        return(
            <div className="navbar bg-base-50 bg-blue-200">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">MyPage</Link>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar rounded-ful">
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "skyblue"
                        }}/>
                    </label>
                    <ul tabIndex={0} className=" menu menu-compact dropdown-content rounded-box">
                        <li>
                            <button className="btn btn-outline" onClick={() => signIn()} type="button">
                                SignIn
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        ) 
    }else{
        console.log(session) */
        return(
            <header className={`navbar bg-base-50 ${color}`}>
                <nav className="flex-1">
                    <Link href="/" className="btn btn-ghost text-md">MyPage</Link>
                    <Link href="/FavoriteVTuber" className="btn btn-ghost text-md">FavoriteVTuber</Link>
                    <Link href="/MyDevelopments" className="btn btn-ghost text-md">MyDevelopments</Link>
                    <ThemeChangeButton />
                </nav>
               {/*  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar rounded-ful">
                        <Image src={`${session.user?.image}`}
                            alt="user's Image" 
                            width="100" 
                            height="100"
                            className="avatar rounded-full btn btn-circle"
                        />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content rounded-box">
                        <li>
                            <button className="btn btn-outline" onClick={() => signOut()} type="button">
                                SignOut
                            </button>
                        </li>
                    </ul>
                </div> */}
            </header>
        )
    /* } */
}
