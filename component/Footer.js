export default function Footer({page}){
    return(
        <footer className={`${page?'-mt-24':''} px-4 md:px-24 lg:px-32 text-lg  py-8`}>
            <p className="text-center text-gray-900 font-medium capitalize text-sm md:text-base">&copy; Copyright <b>infocourse</b> {new Date().getFullYear()}.</p>
        </footer>
    )
}