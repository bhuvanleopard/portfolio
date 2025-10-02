import NavBar from "./NavBar"

const Header = function(){

    return(

        <header className='
        
        fixed
        top-0
        left-0
        w-full
        shadow-xl
        flex justify-between items-center
        py-4 px-6
        sm:pt-5
        md:p-4 lg:px-8 z-99
        bg-black
        
        '>

            <NavBar/>
            <div className="md:hidden relative text-4xl tracking-widest font-extrabold text-white
            inline-flex items-center justify-between gap-6 cursor-pointer">
                {/* <img src="logo.webp"/> */}
                {/* <h1 className="text-4xl md:hidden m-0 tracking-[10px] font-extrabold text-center pl-4
                hover:animate-flow text-white hover:bg-gradient-to-r via-transparent from-gray-200 to-blue-300 bg-[length:200%_auto] bg-clip-text hover:text-transparent
                ">BHUVAN</h1> */}
                {/* <FiGithub/> */}
                <a
            
                    href = ""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer border px-2 py-1"
                >RESUME</a>
            </div>
        </header>
    )
};

export default Header