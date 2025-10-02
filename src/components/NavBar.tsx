// import { Link, NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
const NavBar = function(){

    const toggleMobileMenu = ()=>{
        
        const mobileMenu = document.getElementById("mobileMenu");
        const mainSection = document.body;

        if(mobileMenu?.classList.contains('hidden')){

            mobileMenu.classList.remove("hidden");
            mainSection?.classList.add("overflow-hidden")
        }else{

            mobileMenu?.classList.add("hidden");
            mainSection?.classList.remove("overflow-hidden")
        }
    }
    return (<>

        <nav className="hidden md:flex items-center justify-between gap-12 md:gap-6 w-full">
            <a className="nav-bar-item" href="#skills">SKILLS</a>
            <a className="nav-bar-item" href="#projects">PROJECTS</a>
            <a className="nav-bar-item" href="#aboutMe">ABOUT ME</a>
            <a className="nav-bar-item" href="#contact">CONTACT</a>
            <a className="nav-bar-item" href="#resume">RESUME</a>
        </nav>
        

        <button onClick= {toggleMobileMenu} className="text-5xl md:hidden z-50 cursor-pointer">
            <FiMenu/>
        </button>

        
        <div id='mobileMenu' className="hidden fixed items-center top-20  w-full h-screen bottom-0 right-0 left-0 p-4 md:hidden
         bg-black/90 z-40">
            <nav className="flex flex-col gap-12 items-center px-4 py-26 h-full">
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-50 font-extrabold px-6 py-3 w-[180px] border-y-1 border-white/50 text-center" href="#aboutMe">ABOUT-ME</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-50 font-extrabold px-6 py-3 w-[180px] border-y-1 border-white/50 text-center" href="#skills">SKILLS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-50 font-extrabold px-6 py-3 w-[180px] border-y-1 border-white/50 text-center" href="#projects">PROJECTS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-50 font-extrabold px-6 py-3 w-[180px] border-y-1 border-white/50 text-center" href="#contact">CONTACT</a>
            {/* <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-50 font-extrabold" href="#xre py-2sume">RESUME</a> */}
            </nav>
        </div>
    
    </>)
};

export default NavBar;