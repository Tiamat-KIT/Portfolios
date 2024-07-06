### ログイン機能搭載<br>Next.js v13のテンプレート

#### 導入ライブラリについて
|  ライブラリ名  |  バージョン  |
| ---- | :----: |
|  TypeScript  |  4.9.4  |
|  Next.js  |  13.1.5  |
| ESLint | 8.32.0 | 
| NextAuth | 4.19.0 |
| Firebase | 9.16.0 | 
| TailwindCSS | 3.2.4 | 
| daisyUI | 2.50.0 | 

#### 環境設定ファイル(.envファイル)に設定する環境設定変数
| 環境変数名 | 内容 | 
| :----: | :----: |
| GOOGLE_ID | GoogleのCloudProjectのIDデータを入れる |
| GOOGLE_SECRET | GoogleのCloudProjectのSECRETデータを入れる |
| NEXTAUTH_SECRET | NextAuthの認証を暗号化するためのハッシュ値を入れる |
| FIREBASE_API_KEY |　Firebaseプロジェクトのapikey |
| FIREBASE_AUTHDOMAIN | Firebaseプロジェクトのauthdomain |
| FIREBASE_PJ_ID | Firebaseプロジェクトのprojectid |
| FIREBASE_STORAGE_BUCKET | Firebaseプロジェクトのstoragebucket |
| FIREBASE_MESSAGINGSEND_ID | Firebaseプロジェクトのmessagingsendid |
| FIREBASE_APP_ID | Firebaseプロジェクトのapplicationid |
| FIREBASE_MEASUREMENT_ID | Firebaseプロジェクトのmeasurementid |

#### このテンプレートリポジトリの目的
正直いちいちNext.jsの導入からTailwind入れて、daisyUI入れて、NextAuth入れて...
という手間が面倒くさかったので<br>テンプレートリポジトリにして使いまわしてやろう！！という魂胆です。

#### テンプレートに入ってるComponentについての説明
TailwindCSSの特徴的な面倒くささについて<br>**特定のクラスをいちいち記述しなければならない**
というものがある。<br>これは、Tailwindの機能の「新しいユーティリティクラスを作る」機能で実装してもよかったが、<br>それだとdaisyUIで設定されているユーティリティクラスとの衝突が発生する懸念があったので<br>コンポーネントとして定義して再利用できるようにした。<br>それがテンプレート内にあるコンポーネントである。

[MyFirebaseProject](https://console.firebase.google.com/u/1/project/test-nextauth-and-firebase/overview)

## OG画像について
[VercelのOG Image Generation(vercel/og)を利用してOGP画像を作成する](https://zenn.dev/denham/articles/b2378462d54823#ogの生成)

[Next.jsのImage Generationを利用して、動的にOG画像を作成する](https://www.newt.so/docs/tutorials/nextjs-og-image-generation)

[Next13.3のApp RouterでOG画像のmetaタグを自動生成させる](https://zenn.dev/temasaguru/articles/2968736b5a2f41)

[App RouterのOGP設定方法まとめ [Next.js]](https://zenn.dev/temasaguru/articles/641a10cd5af02a)

[opengraph-image and twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx)
#### Bun移植
Bunで動かしたらいい感じになるはず？
New My portfolio