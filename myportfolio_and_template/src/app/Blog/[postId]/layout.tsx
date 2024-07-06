"use client"
import "../../../css/global.css"
import Navbar from "@/Component/util/Navbar"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return (
    <>
        <Navbar />
        <article>{children}</article>
    </>
  )
}
