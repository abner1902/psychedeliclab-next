import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}