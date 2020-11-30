import Head from 'next/head'
import '../styles/tailwind.css'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
