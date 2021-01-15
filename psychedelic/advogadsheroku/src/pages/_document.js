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
              `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-186277147-1">
            </script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-186277147-1');
            </script>
              `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script data-ad-client="ca-pub-7405864963958025" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              `
            }}
          />

          <meta charSet={'utf-8'} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="language" content="pt-br, en" />
          <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico" />
        </Head>
        <meta property="og:url" content="https://www.psychedeliclab.com.br" />
        <meta name="og:site_name" content="Psychedelic labb" />
        <meta name="fb:page_id" content="Psychedelic lab" />
        <meta property="og:type" content="Course" />
         <meta property="og:image" content="https://www.psychedeliclab.com.br/darkpsy.jpeg" />
        <meta name="og:description" content="Darkpsy" />
        <meta name="description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileira focada na vertente. curso de Darkpsy, hitech, forest, prog dark." />
        <meta name="og:title" content="Curso Darkpsy Psychedliclab" />
        <meta property="og:description" 
              content="Do iniciante até o avançado" />
        <Head>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="twitter:description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileira focada na vertente." />
        <meta property="twitter:image" content="https://www.psychedeliclab.com.br/darkpsy.jpeg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
