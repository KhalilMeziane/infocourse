import Navigation from './Navigation'
export default function Header({children,page}){
    return(
        // h-screen
        <header className={`${page?'h-screen':'h-80'} px-4 md:px-24 lg:px-32`}>
            <Navigation/>
            {children}
        </header>
    )
}