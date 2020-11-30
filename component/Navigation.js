import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState ,useEffect } from 'react';
export default function Navigation(){
    const router = useRouter()
    const [display, setDisplay] = useState(0)
    const toggleHandel =()=>{
        display?setDisplay(false):setDisplay(true)
    }
    return(
        <>
            <nav className="flex flex-wrap items-center justify-between py-3 mb-3 text-gray-900 px-4 md:px-24 lg:px-40 xl:px-56 z-50 fixed top-0 left-0 w-full bg-white border-b-2 border-gray-100" id="nav">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase cursor-pointer">
                            <span className="text-customBlue">info</span><span className="text-gray-800">course</span>
                            </a>
                        </Link>
                        <button id="toggel" className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" aria-label="toggel menu" type="button" onClick={toggleHandel}>
                        <span className="block relative w-6 h-px rounded-sm bg-gray-900"></span>
                        <span className="block relative w-6 h-px rounded-sm mt-1 bg-gray-900"></span>
                        <span className="block relative w-6 h-px rounded-sm mt-1 bg-gray-900"></span>
                        </button>
                    </div>
                    <div className={`lg:flex flex-grow items-center ${display?'':'hidden'}`} id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto" id="navigation">
                            <li className="nav-item text-lg">
                                <Link href="/license1">
                                    <a className={`px-3 py-2 flex items-center uppercase font-meduim leading-snug text-gray-600 transition duration-600 ease-in-out cursor-pointer ${router.pathname ==='/license1'?'active text-customBlue':'hover:text-gray-900'}`}>
                                        L1 mi
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item text-lg">
                                <Link href="/license2">
                                    <a className={`px-3 py-2 flex items-center uppercase font-meduim leading-snug text-gray-600 transition duration-600 ease-in-out cursor-pointer ${router.pathname ==='/license2'?'active text-customBlue':'hover:text-gray-900'}`}>
                                        l2 info
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item text-lg">
                                <Link href="/license3">
                                    <a className={`px-3 py-2 flex items-center uppercase font-meduim leading-snug text-gray-600 transition duration-600 ease-in-out cursor-pointer ${router.pathname ==='/license3'?'active text-customBlue':'hover:text-gray-900'}`}>
                                        l3 info
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item text-lg">
                                <Link href="/master1">
                                    <a className={`px-3 py-2 flex items-center uppercase font-meduim leading-snug text-gray-600 transition duration-600 ease-in-out cursor-pointer ${router.pathname ==='/master1'?'active text-customBlue':'hover:text-gray-900'}`}>
                                        master 1
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item text-lg">
                                <Link href="/master2">
                                    <a className={`px-3 py-2 flex items-center uppercase font-meduim leading-snug text-gray-600 transition duration-600 ease-in-out cursor-pointer ${router.pathname ==='/master2'?'active text-customBlue':'hover:text-gray-900'}`}>
                                        master 2
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}