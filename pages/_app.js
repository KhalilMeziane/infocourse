import Head from 'next/head'
import '../styles/tailwind.css'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="title" content="InfoCourse"/>
        <meta name="description" content="InfoCourse is a library of Courses, Exercises, Exams and several other documents for all UHBC informatique students"/>
        <meta property="og:type" content="documentation"/>
        <meta property="og:description" content="InfoCourse is a library of Courses, Exercises, Exams for all UHBC informatique students"/>
        <meta property="og:image" content="https://infocourse.vercel.app/couver.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://infocourse.vercel.app"/>
        <meta property="twitter:title" content="InfoCourse"/>
        <meta property="twitter:description" content="InfoCourse is a library of Courses, Exercises, Exams and several other documents for all UHBC informatique students"/>
        <meta property="twitter:image" content="https://infocourse.vercel.app/public/couver.png"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
