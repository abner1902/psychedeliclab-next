import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WJ8XGSQ');`}} />
          
          <title>Psychedeliclab</title>
            <meta charSet={"utf-8"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="og:site_name" content="Psychedelic lab"/>
            <meta name="fb:page_id" content="Psychedelic lab"/>
            <meta name="og:description" content="Darkpsy"/>
            <meta name="description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileiras focada na vertente"/>
            <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico"/>
        </Head>
        <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJ8XGSQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument