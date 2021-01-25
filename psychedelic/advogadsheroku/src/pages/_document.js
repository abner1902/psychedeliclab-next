import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          {/* <meta charSet={'utf-8'} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="language" content="pt-br, en" />
          <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico" /> */}
        </Head>
        {/* <meta property="og:url" content="https://www.psychedeliclab.com.br" />
        <meta name="og:title" content="Curso Darkpsy Psychedliclab" />
         <meta property="og:image" content="https://www.psychedeliclab.com.br/darkpsy.jpeg" />
        <meta name="og:site_name" content="Psychedelic labb" />
        <meta name="fb:page_id" content="Psychedelic lab" />
        <meta property="og:type" content="Course" />
        <meta name="og:description" content="Darkpsy" />
        <meta name="description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileira focada na vertente." />
        <meta property="og:description" 
              content="Do zero ao profissional" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Darkpsy course" />
        <meta name="twitter:image" content="https://www.psychedeliclab.com.br/darkpsy.jpeg" />
        <meta name="twitter:site" content="@asd" /> */}

        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument