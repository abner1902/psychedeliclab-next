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
        <script
            dangerouslySetInnerHTML={{
              __html: `
              <script async src="https://cse.google.com/cse.js?cx=bef7f3688afbf63fd"></script>
              <div class="gcse-search"></div>
              `
            }}
          />

           <script
            dangerouslySetInnerHTML={{
              __html: `
             <script async src="https://cse.google.com/cse.js?cx=4c3498e3a446c039f"></script>
             <div class="gcse-search"></div>
              `
            }}
          />
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WJ8XGSQ');</script>
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
              <script type="text/javascript"> var infolinks_pid = 3305124; var infolinks_wsid = 0; </script> <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>              `
            }}
          />

           {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org/",
              "@type": "Recipe",
              "name": "Party Coffee Cake",
              "author": {
                "@type": "Person",
                "name": "Mary Stone"
              },
              "datePublished": "2018-03-10",
              "description": "This coffee cake is awesome and perfect for parties.",
              "prepTime": "PT20M"
              }
                  `
            }}
          /> */}
          <title>Psychedeliclab</title>
          <meta charSet={'utf-8'} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="language" content="pt-br, en" />
          <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico" />
        </Head>
        <meta property="og:url" content="https://www.psychedeliclab.com.br" />
        <meta name="og:title" content="Curso Darkpsy Psychedliclab" />
        {/* <meta name="og:image" content="" /> */}
        <meta property="og:image" content="https://www.psychedeliclab.com.br/darkpsy.jpeg" />
        <meta name="og:site_name" content="Psychedelic labb" />
        <meta name="fb:page_id" content="Psychedelic lab" />
        <meta property="og:type" content="Course" />
        <meta name="og:description" content="Darkpsy" />
        <meta name="description" content="Psychedelic lab, aprenda a produzir Darkpsy com a primeira plataforma de cursos brasileira focada na vertente. curso de Darkpsy, hitech, forest, prog dark" />
        <meta property="og:title" content="curso de Produção Darkpsy" />
        <meta property="og:description" 
              content="Do zero ao profissional" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Darkpsy course" />
        <meta name="twitter:image" content="https://www.psychedeliclab.com.br/darkpsy.jpeg" />

        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJ8XGSQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
