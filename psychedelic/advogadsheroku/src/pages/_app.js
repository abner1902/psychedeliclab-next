// import App from 'next/app'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../style.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '../components/config/seo.json'

const MyApp = ({ Component, pageProps,  }) => ( 
    <div>
        <DefaultSeo {...config} />

         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <meta charSet={'utf-8'} />
            <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico" />
          </Head>
        <Component {...pageProps} />
        <Footer/>
    </div>  
)
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp