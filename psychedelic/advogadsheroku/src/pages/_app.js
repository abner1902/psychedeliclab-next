// import App from 'next/app'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../style.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
    <div>
         <Head>
            <title>Psychedelic Lab</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <meta charSet={'utf-8'} />
            <meta name="language" content="pt-br" />
            <link rel="shortcut icon" href="images/favicon.ico" type="favicon.ico" />
            <meta property="og:url" content="https://www.psychedeliclab.com.br" />
            <meta name="og:title" content="Curso Darkpsy Psychedliclab" />
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