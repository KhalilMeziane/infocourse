import Head from 'next/head'
import '../styles/tailwind.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return(
    <>
      <Head>
        <meta name="title" content="InfoCourse"/>
        <meta name="description" content="InfoCourse is a library of Courses, Exercises, Exams and several other documents for all UHBC informatique students"/>
        <meta property="og:type" content="documentation"/>
        <meta property="og:description" content="InfoCourse is a library of Courses, Exercises, Exams for all UHBC informatique students"/>
        <meta property="og:image" content="https://infocourse.vercel.app/new_thumbnail_design.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://infocourse.vercel.app"/>
        <meta property="twitter:title" content="InfoCourse"/>
        <meta property="twitter:description" content="InfoCourse is a library of Courses, Exercises, Exams and several other documents for all UHBC informatique students"/>
        <meta property="twitter:image" content="https://infocourse.vercel.app/public/new_thumbnail_design.png"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
