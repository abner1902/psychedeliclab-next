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
            <meta charSet={"utf-8"}/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="og:site_name" content="Psychedelic lab"/>
            <meta name="fb:page_id" content="Psychedelic lab"/>
            <meta name="og:description" content="Darkpsy"/>
            <meta name="description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileiras focada na vertente"/>
            <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico"/>
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