import Head from 'next/head'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import { LayoutGlobalStyles } from '../styles/LayoutGlobalStyles'
import config from '../components/config/seo.json'

// Estilos Globais
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../style.css'

const MyApp = ({ Component, pageProps }) => ( 
    <>
        <LayoutGlobalStyles />
        <Preloader />
        <DefaultSeo {...config} />

        <Head>
            {/* CORREÇÃO DE ACESSIBILIDADE: Permite zoom no mobile (exigência Lighthouse) */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta property="og:image" content="https://www.psychedeliclab.com.br/darkpsy.webp" />
            <meta name="language" content="pt-br, en" />
            <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        </Head>

        {/* FACEBOOK PIXEL OTIMIZADO: Carrega em segundo plano sem travar o First Paint */}
        <Script id="fb-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', '282337049275712'); // Módulo 2
              fbq('init', '710855122954203'); // Módulo 1
              fbq('track', 'PageView');
            `}
        </Script>

        <Component {...pageProps} />
        <Footer/>
    </>
)
  
export default MyApp