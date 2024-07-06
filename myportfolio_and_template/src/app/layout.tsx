import '../css/global.css';
// import { SessionProvider } from "next-auth/react";
import Footer,{FooterItemProps} from '@/Component/util/Footer';
import ThemeProvide from '@/Component/util/Theme/ThemeProvide';
import "css/global.css"
import { Metadata } from 'next';

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const Hobby: FooterItemProps[] = [
    {text:"Twitter",url:"https://twitter.com/UtakataKyosui"},
    {text:"Mastdon",url:"https://mstdn.jp/@UtakataKyosui"}
  ]

  const Dev: FooterItemProps[] = [
    {text: "Qiita",url:"https://qiita.com/Tiamat-KIT"},
    {text: "Zenn" ,url:"https://zenn.dev/ayaextech_fill"},
    {text: "LAPRAS",url: "https://lapras.com/public/UW09DHN"}
  ]

  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
          {/* <SessionProvider> */}
          <ThemeProvide>
            {/* <hr className='divide-y pt-2'/> */}
            {children}
          </ThemeProvide>
          <div className='divider'/>
          <Footer HobbySNSList={Hobby} DevelopSNSList={Dev} />
          {/* </SessionProvider> */}
      </body>
    </html>
  )
}
