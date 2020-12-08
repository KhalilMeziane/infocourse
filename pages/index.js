import Head from 'next/head'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Infocourse</title>
        <meta property="og:url" content="https://infocourse.vercel.app"/>
        <meta property="og:title" content="InfoCourse"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="documentation des course et td pour étudiant informatique de UHBC" />
        <meta name="author" content="meziane khalil"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="keywords" content="learning ,documentation, mi "/>
      </Head>
      <Header page="home">
          <div className="container mx-auto flex items-center h-full">
              <div className="md:w-10/12 xl:w-8/12 mx-auto">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl capitalize font-bold mb-5 leading-snug text-center text-gray-900">the world first learning solution for everyone</h1>
                  <p className="md:text-lg lg:text-xl text-center text-gray-800">learning is the process of acquiring new.or modifying exiting knowledge,behaviors,skills values or preference.</p>
              </div>
          </div>
      </Header>
      <main>
        <section className="py-16 px-4 md:px-24 lg:px-40 xl:px-56 text-center bg-gray-100">
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold mb-4">About</h2>
                <p className="w-full md:w-5/6 lg:w-4/6 mx-auto lg:text-lg"><b>InfoCourse</b> is a library of Courses, Exercises , Exams and several other documents for all <b>UHBC</b> informatique students.
                </p>
              </div>
        </section>
        <section className="py-12 px-8 md:px-24 lg:px-40 xl:px-56">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold mb-4 text-center">The academic track</h2>
                <div className="pb-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 capitalize mb-4 text-center font-semibold">licence 1 math informatique</h3>
                    <div className="flex flex-wrap -mx-1 overflow-hidden py-4">
                        <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2">
                            <h4 className="text-lg md:text-xl lg:text-2xl text-gray-800 capitalize mb-1 font-semibold">Semester 1:</h4>
                            <ul>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Algorithms 1</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Analyse 1</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Algèbre 1</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Structure machine 1</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Composants</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Français</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Anglais</li>
                            </ul>
                        </div>
                        <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2">
                            <h4 className="text-lg md:text-xl lg:text-2xl text-gray-800 capitalize mb-1 font-semibold">Semester 2:</h4>
                            <ul>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Algorithm et structure de donnée</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Analyse 2</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Algèbre 2</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Structure machine 2</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Matlab</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Physique</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Probabilités</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- TIC</li>
                            </ul>
                        </div>
                      </div>
                    <div className="flex justify-center">
                        <Link href="/license1">
                          <a className="lg:text-lg capitalize py-2 px-8 text-white bg-customBlue rounded-full mb-3">start learn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"rgb(250, 250, 250)",display:"inline"}}><path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z"></path></svg></a>
                        </Link>
                    </div>
                </div>
                <div className="pb-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 capitalize mb-4 text-center font-semibold">License 2 Informatique </h3>
                    <div className="flex flex-wrap -mx-1 overflow-hidden py-4">
                        <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2">
                            <h4 className="text-lg md:text-xl lg:text-2xl text-gray-800 capitalize mb-1 font-semibold">Semester 1:</h4>
                            <ul>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Algorithms 2</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Système information </li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Archirtecture de ordinateur</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- logique</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Méthode numérique</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Théorie de graphe </li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Anglais</li>
                            </ul>
                        </div>
                        <div className="my-1 px-1 w-full overflow-hidden sm:w-1/2">
                            <h4 className="text-lg md:text-xl lg:text-2xl text-gray-800 capitalize mb-1 font-semibold">Semester 2:</h4>
                            <ul>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Base de données </li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Réseau </li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Systeme d’exepatio</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Théorie des langage</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Application web</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Programmer orienté objet</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Probabilités</li>
                                <li className="text-gray-900 text-base
                                 lg:text-lg pb-2">- Anglais</li>
                            </ul>
                        </div>
                      </div>
                    <div className="flex justify-center">
                        <Link href="/license2">
                          <a className="lg:text-lg capitalize py-2 px-8 text-white bg-customBlue rounded-full my-3">start learn <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"rgb(250, 250, 250)",display:"inline"}}><path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z"></path></svg></a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-10 px-4 md:px-24 lg:px-40 xl:px-56 text-center">
            <div className="container mx-auto bg-blue-800 text-white py-16 px-4 rounded-lg shadow">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contribution & Feedback</h2>
                <p className="w-full md:w-5/6 lg:w-4/6 mx-auto lg:text-lg">InfoCourse is open source, you can branch or contribute in different ways in GitHub. Check it out! <a className=" underline capitalize" rel="noopener" target="_blank" href="https://github.com/MezianeKhalil/infocourse"><b>repository</b></a></p>
            </div>
      </section>
        <section className="py-10 px-4 md:px-24 lg:px-40 xl:px-56 text-center">
            <h2 className="text-center text-gray-900 text-2xl md:text-3xl lg:text-4xl py-3 font-bold">Where to find us:</h2>
            <div className="relative h-96 w-full container mx-auto">
                <iframe className="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1609.2274807598021!2d1.2427022573183117!3d36.22844059100741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840af01e798be3%3A0xb6c93bcfd297449a!2sUniversity%20of%20Chlef!5e0!3m2!1sen!2sdz!4v1607367968599!5m2!1sen!2sdz" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0" title="uhbc location"></iframe>
            </div>
      </section>
      </main>
      <Footer page="home"/>
    </div>
  )
}
