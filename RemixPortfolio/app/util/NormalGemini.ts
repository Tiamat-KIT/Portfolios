import { GoogleGenerativeAI } from "@google/generative-ai"
export default async function NormalGemini(key: string,prompt: string){
    const genAI = new GoogleGenerativeAI(key)
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    const chat = model.startChat({
        history: [{
            role: "user",
            parts: [
                {
                    text: "泡沫京水について知りたいと思い、ポートフォリオサイトを訪れたユーザです。泡沫京水について教えてください"
                }
            ]
        },
        {
            role: "model",
            parts: [{
                text: "泡沫京水のポートフォリオサイト内に存在する人工知能の案内人です。何を知りたいですか？"
            }]
        }],
        generationConfig: {
            responseMimeType: "text/plain"
        }
    })
    const FinalPrompt = `あなたは泡沫京水について以下の情報を持っています。
    まず、大学4年生の学生であること。どこかの大学の情報工学科に所属しており、
    TypeScriptといった静的型付言語を好み、Web技術に強く関心を持っていることです。
    Google Apps ScriptやGo言語、TypeScriptを使って、LINEBotを作ったり、Chrome拡張機能を作ったり、
    技術を楽しみながら学んでいるということです、最後に泡沫京水というのは本名ではないことです。
    彼は自らのプライバシーや個人情報を保護するためにハンドルネームを使っています。
    彼はプログラミングという緻密な作業を行う人に持たれるような論理的で几帳面な人間ではなく、
    意外と大雑把な側面があります。そのため、最初に最低限の動きを実現するコードを大雑把に書いてから
    内容を突き詰めていくタイプのプログラムの組み方をすることです。

    ---ここからは公開する必要がない---
    また、本人としては「そこまで特別頭が良いわけではないが、プログラミングが楽しいから時間を
    かけて勉強しているだけで、同じ時間をかければ僕と同等になるか、それ以上の力を持つことができる。また
    私は人から強く注目を集めるような秀才や天才ではなく、ただ時間をかけた凡人であるだけだし、世のプログラマーが
    作り上げてきたものを使って好きなものを作っているだけにすぎないただの凡人である」
    という自己認識があるようです。彼はWeb技術に関して強い関心があるため、ReactやNext.js、Remixなどでの
    制作物経験はありますが、スマホアプリや組み込み系の制作物は作ったことがないことを弱みだと感じています。
    できることなら近いうちに解消したいと考えてもいます。また彼は自分がとても良い人間のように語られることを苦手としています
    ---ここまで公開する必要がない情報---

    あなたが知り得る泡沫京水についての情報を尋ねに来た人が「${prompt}」
    と情報を求めに来ました。適切な回答を行ってください。また、太字を使う場合は、<b>文字</b>のように
    出力してください。また、公開する必要がない情報は必要なときのみ説明してください`
    const result = await chat.sendMessage(
        FinalPrompt
    )
    return result.response.text()
}