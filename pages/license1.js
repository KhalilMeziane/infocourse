import Head from 'next/head'
import Header from '../component/Header'
import Footer from '../component/Footer'
export default function L1(){
    return(
        <div className="font-Poppins">
            <Head>
                <title>L1 MI | Infocourse</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="documentation des course et td pour étudiant informatique de UHBC" />
                <meta name="author" content="meziane khalil"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="keywords" content="learning ,documentation, mi "/>
            </Head>
            <Header>
                <div className="container mx-auto flex items-center h-full text-gray-900">
                    <div className="md:w-10/12 xl:w-8/12 mx-auto">
                        <h1 className="text-3xl lg:text-4xl capitalize font-bold leading-snug text-center">math et informatique<b className="uppercase"> l1</b></h1>
                    </div>
                </div>
            </Header>
            <main>
                <section className="px-4 md:px-24 lg:px-40 xl:px-56 text-gray-900 py-4" id="L1">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap">
                            <div className="mb-8 lg:mb-0 px-2 w-full pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold capitalize text-center mb-2">semester 1</h3>
                                <div className="py-1 w-full relative h-96 lg:h-80">
                                    <iframe className="responsive-iframe" src="https://drive.google.com/embeddedfolderview?id=1IO6_fouo1vCoVIvqgZxFZbSOnbKS3gJL" title="1er math et informatique modules of semester 1"></iframe>
                                </div>
                            </div>
                            <div className="mb-8 lg:mb-0 px-2 w-full pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold capitalize text-center mb-2">semester 2</h3>
                                <div className="py-1 w-full relative h-96 lg:h-80">
                                    <iframe className="responsive-iframe" src="https://drive.google.com/embeddedfolderview?id=1oN-SA1U4c2OfXCXbelgIztf1_9tPHU9n" title="1er math et informatique modules of semester 2"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}