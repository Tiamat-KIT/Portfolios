import Script from "next/script"
export default function SoundMokaTL(){
    return (
        <>
            <a className="twitter-timeline" data-lang="ja" data-width="500" data-height="500" href="https://twitter.com/moka_otonari?ref_src=twsrc%5Etfw">
                Tweets by moka_otonari
            </a>
            <Script /* async */ src="https://platform.twitter.com/widgets.js"/>
        </>      
    )
}