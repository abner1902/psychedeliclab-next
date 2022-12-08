import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../../utils/fpixel'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    const GA_MEASUREMENT_ID = 'G-CTY634NDSF'; // Paste your GTAG here


    return (
      <Html>
        <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        
        <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
           <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>

          
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