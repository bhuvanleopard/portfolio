import NavBar from "./NavBar"

const Header = function(){

    return(

        <header className='
        
        z-100
        fixed
        top-0
        w-full h-[4rem]
        shadow-2xs
        flex flex-row justify-between items-center
        px-4 py-2
        md:px-4 lg:px-16
        '>
            
            <div className="hidden md:flex text-3xl font-extrabold">RESUME</div>
            <NavBar/>
            <div className="md:hidden relative text-2xl tracking-widest font-extrabold text-white
            inline-flex items-center justify-between gap-6 cursor-pointer py-1 px-3 -skew-x-28 border border-transparent backdrop-blur-sm rounded-sm">
                
                <a
                    href = ""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                >RESUME</a>
            </div>

        </header>
    )
};

export default Header