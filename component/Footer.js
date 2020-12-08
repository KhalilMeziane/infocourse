export default function Footer({page}){
    return(
        <footer className={`px-4 md:px-24 lg:px-32 text-lg  py-8`}>
            <p className="text-center text-gray-800 font-medium capitalize text-sm md:text-base">&copy; {new Date().getFullYear()} InfoCourse, Inc. All rights reserved.</p>
        </footer>
    )
}
// ${page?'-mt-24':''}