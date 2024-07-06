"use client"

import SeoComponent from "@/Component/SEO/SEO"
import SoundMokaTL from "@/Component/Twitter/OtonariMokaTL"
import Flex from "@/Component/util/Flex"
import FlexItem from "@/Component/util/FlexItem"
import Navbar from "@/Component/util/Navbar"
import Container from "@/Component/util/Container"
import Link from "next/link"

export default function OtonariMoka_Intro(){
    return (
        <>
            <Navbar color="bg-green-200" />
            <h1 className="text-3xl text-center text-bold">推しの話をしよう</h1>
            <h2 className="text-xl">音成モカ</h2>
            <Container>
            <Flex>
                <FlexItem padding="pr-10">
                    <p style={{wordBreak: "keep-all"}}>
                        綺麗に字が書けたり、珈琲が淹れられたり、<wbr/>めちゃくちゃ寝られるASMRを提供してくれる。<wbr/>
                        <b>かわいい。</b><wbr/>
                        しかも<b>清楚</b>、でも台パンもしてる。台パンをする清楚。<wbr/>
                        <Link className="link" href="https://booth.pm/ja/items/4640720">清楚だが？Tシャツ</Link>
                        っていうユニークなTシャツがグッズとしてBOOTHで恒常販売されている。<wbr/>
                        たまにリスナー参加型のゲーム対戦配信をしている。<wbr/>
                        実はプログラミングもできるらしい。<wbr/>
                        <b>なんだこのつよつよVTuber。すき。</b>
                    </p>
                </FlexItem>
                <SoundMokaTL />
                </Flex>
            </Container>
        </>
    )   
}