import { MdMenu, MdMenuOpen } from "react-icons/md";
import ResumeBtn from "./ResumeBtn";
const NavBar = function(){

    const toggleMobileMenu = ()=>{
        
        const mobileMenu = document.getElementById("mobileMenu");
        const menuOpen = document.getElementById("menuOpen");
        const menuClose = document.getElementById("menuClose");
        const mainSection = document.body;

        if(mobileMenu?.classList.contains('hidden')){

            mobileMenu.classList.remove("hidden");
            menuOpen?.classList.remove("hidden");
            menuClose?.classList.add("hidden")
            mainSection?.classList.add("overflow-hidden")
        }else{

            mobileMenu?.classList.add("hidden");
            menuOpen?.classList.add("hidden");
            menuClose?.classList.remove("hidden")
            mainSection?.classList.remove("overflow-hidden")
        }
    }
    return (<div>

        <nav className="hidden md:flex justify-center items-center gap-8 pt-1">
            <a className="nav-bar-item" href="#about-me">HOME</a>
            <a className="nav-bar-item" href="#skills">SKILLS</a>
            <a className="nav-bar-item" href="#projects">PROJECTS</a>
            <a className="nav-bar-item" href="#contact">CONTACT</a>
            <div className="nav-bar-item">
                <ResumeBtn/>
            </div>
        </nav>
        

        <button onClick= {toggleMobileMenu} id="menuClose" className="relative flex text-4xl md:hidden z-100 cursor-pointer backdrop-blur-sm">
            <MdMenu/>
        </button>


        <button onClick= {toggleMobileMenu} id="menuOpen" className="hidden pt-1.5 relative text-4xl md:hidden z-100 cursor-pointer backdrop-blur-sm">
            <MdMenuOpen/>
        </button>

        
        <div id='mobileMenu' className="hidden fixed items-center pt-[8rem]  w-full h-full bottom-0 right-0 left-0 p-4 md:hidden
         bg-black/90 z-90 ">
            <nav className="flex flex-col gap-12 items-center px-4">
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-100 font-extrabold px-6 py-3 border-white/50 text-center" href="#about-me">HOME</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-100 font-extrabold px-6 py-3 border-white/50 text-center" href="#skills">SKILLS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-100 font-extrabold px-6 py-3 border-white/50 text-center" href="#projects">PROJECTS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-10 font-extrabold px-6 py-3 border-white/50 text-center" href="#contact">CONTACT</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-10 font-extrabold px-6 py-3 border-white/50 text-center" href="#contact">
                <ResumeBtn/>
            </a>
            
            
            </nav>
        </div>
    
    </div>)
};

export default NavBar;