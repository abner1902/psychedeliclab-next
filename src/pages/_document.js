import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
    <link rel="preconnect" href="https://www.youtube.com" />
    <link rel="preconnect" href="https://i.ytimg.com" />
    <link rel="preconnect" href="https://www.google.com" />
        {/* Meta Pixel Code - Rastreio Módulo 1 e Módulo 2 */}
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
              
              /* Inicializa os dois Pixels simultaneamente */
              fbq('init', '282337049275712'); // Módulo 2
              fbq('init', '710855122954203'); // Módulo 1
              
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=282337049275712&ev=PageView&noscript=1" />
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=710855122954203&ev=PageView&noscript=1" />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}