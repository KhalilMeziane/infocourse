import Head from 'next/head'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Infocourse</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="documentation des course et td pour étudiant informatique de UHBC" />
        <meta name="author" content="meziane khalil"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="keywords" content="learning ,documentation, mi "/>
      </Head>
      <Header page="home">
          <div className="container mx-auto flex items-center h-full">
              <div className="md:w-10/12 xl:w-8/12 mx-auto">
                  <h1 className="text-4xl lg:text-5xl capitalize font-bold mb-5 leading-snug text-center text-gray-900">the world first learning solution for everyone</h1>
                  <p className="text-lg lg:text-xl text-center text-gray-800">learning is the process of acquiring new.or modifying exiting knowledge,behaviors,skills values or preference.</p>
              </div>
          </div>
        </Header>
      <Footer page="home"/>
    </div>
  )
}
