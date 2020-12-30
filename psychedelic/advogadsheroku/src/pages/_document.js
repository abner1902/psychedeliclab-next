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
        
          <title>Psychedeliclab</title>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-CTY634NDSF"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                      
              gtag('config', 'G-CTY634NDSF');
            </script>
              `,
          }}
          />
            <meta charSet={"utf-8"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="og:title" content="Curso Darkpsy Psychedliclab" />
            <meta name="og:image" content="https://psychedeliclab.com.br/darkpsy.jpeg" />
            <meta name="og:site_name" content="Psychedelic lab"/>
            <meta name="fb:page_id" content="Psychedelic lab"/>
            <meta name="og:description" content="Darkpsy"/>
            <meta name="description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileiras focada na vertente"/>
            <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico"/>
            <meta name="language" content="pt-br, en"/>

        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument