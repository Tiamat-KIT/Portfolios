import type { MetaFunction } from "@remix-run/cloudflare";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import NormalGemini from "~/util/NormalGemini";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};


export async function loader({ context }: LoaderFunctionArgs) {
  let env: Env
  try {
    env = process.env as unknown as Env; // ローカルはnodeなのでprocess.env
  } catch{
    env = context.cloudflare.env as Env; // Cloudflare Pagesはcontext.cloudflare.env
  }
  return json({output: await NormalGemini(env.GEMINI_API_KEY,"泡沫京水とはどんな人ですか？")})
}

export default function Index() {
  return (
    <main className="font-sans">
      <div>
          <h2 className="text-xl font-semibold">
              このサイトはどんなサイトですか？
          </h2>
          <h3>
              このサイトは、<b className="text-red-600">アクセス毎に内容が変更されるポートフォリオサイト</b>です。<wbr />
          </h3>
          <p className="text-sm">
              どういうことかというと、<wbr />このサイトに表示されるいくつかの文章は、<wbr />Geminiによって生成され、<wbr />サイト上で表示される
              ようにプログラムされています。<wbr />そのため、アクセスするごとに<wbr />内容が変わっています。<wbr />
          </p>
      </div>
      <article>
        <h2 className="text-xl font-semibold">泡沫京水とはどんな人？（Geminiより）</h2>
        <Suspense fallback={<p>Loading…</p>}>
          <Await resolve={useLoaderData<typeof loader>()}>
            {(resolved) => <div dangerouslySetInnerHTML={{ __html: resolved.output }}/>}
          </Await>
        </Suspense>
      </article>
    </main>
  );
}
