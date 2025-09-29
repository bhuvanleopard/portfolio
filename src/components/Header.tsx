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
        p-4
        md:p-4 lg:px-8 z-99
        bg-black
        '>

            <NavBar/>
            <div className="cursor-pointer hover:animate-wiggle hover:text-cyan-400 border border-white/25">
                {/* <img src="logo.webp"/> */}
                <h1 className="text-2xl md:text-2xl lg:text-3xl m-0 bg-white/5 p-2.5 tracking-widest font-extrabold md:px-6 lg:px-8">BHUVAN</h1>

            </div>
        </header>
    )
};

export default Header