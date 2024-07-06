import "@/css/global.css"
// import { SessionProvider } from "next-auth/react";
import Footer,{FooterItemProps} from '@/Component/util/Footer';
import ThemeProvide from '@/Component/util/Theme/ThemeProvide';
import { Metadata, Route } from 'next';
import LayoutType  from "@/type/LayoutProps"
import Navbar, { NavbarLinkObject } from '@/Component/util/Navbar';
import Container from '@/Component/util/Container';

const title = "UtakataPortfolio"
const description = "泡沫京水のポートフォリオ"
const opengraph = `${process.env.NEXTAUTH_URL}opengraph-image`
const twitterimage= `${process.env.NEXTAUTH_URL}twitter-image`

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`
  },
  description,
  openGraph: {
    title: title,
    images: [opengraph],
    description,
    url: opengraph,
    siteName: title,
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    images: [twitterimage],
    title,
    description,
    site: "@CYUVi1336",
    creator: "@CYUVi1336"
  }
} 

export default function RootLayout(props:LayoutType) {
  const Hobby: FooterItemProps[] = [
    {text:"Twitter",url:"https://twitter.com/UtakataKyosui"},
    {text:"Mastdon",url:"https://mstdn.jp/@UtakataKyosui"}
  ]

  const Dev: FooterItemProps[] = [
    {text: "Qiita",url:"https://qiita.com/Tiamat-KIT"},
    {text: "Zenn" ,url:"https://zenn.dev/ayaextech_fill"},
    {text: "LAPRAS",url: "https://lapras.com/public/UW09DHN"}
  ]
  
  /* const NavItemList: NavbarLinkObject[] = [
    {
      href: "/", 
      LinkName: "TOP"
    }
  ] */
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
          {/* <SessionProvider> */}
          <ThemeProvide>
          <Navbar /* LinkObjects={NavItemList} *//>
              <span className="flex w-screen space-x-4 mt-3">
                <div className='w-1/2 border-r-2'>{props.Left}</div>
                <div className='w-1/2'>{props.Right}</div>
              </span>
              {props.children}
              {props.Modal}
          </ThemeProvide>
          <div className='divider'/>
          <Footer HobbySNSList={Hobby} DevelopSNSList={Dev} />
          {/* </SessionProvider> */}
      </body>
    </html>
  )
}
