// import { Link, NavLink } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
const NavBar = function(){

    const toggleMobileMenu = ()=>{
        
        const mobileMenu = document.getElementById("mobileMenu");

        if(mobileMenu?.classList.contains('hidden')){

            mobileMenu.classList.remove("hidden")
        }else{

            mobileMenu?.classList.add("hidden")
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
        

        <button onClick= {toggleMobileMenu} className="text-5xl md:hidden z-50">
            <FiMenu/>
        </button>

        
        <div id='mobileMenu' className="fixed top-20 w-full h-screen bottom-0 right-0 left-0 p-4 md:hidden bg-black/75 z-40">
            <nav className="flex flex-col gap-12 items-center px-4 py-16 animate-pulse">
            <a onClick={toggleMobileMenu} className="cursor-pointer text-3xl tracking-wider transition-colors hover:text-gray-300 z-50 font-bold" href="#aboutMe">ABOUT ME</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-3xl tracking-wider transition-colors hover:text-gray-300 z-50 font-bold" href="#skills">SKILLS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-3xl tracking-wider transition-colors hover:text-gray-300 z-50 font-bold" href="#projects">PROJECTS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-3xl tracking-wider transition-colors hover:text-gray-300 z-50 font-bold" href="#contact">CONTACT</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-3xl tracking-wider transition-colors hover:text-gray-300 z-50 font-bold" href="#resume">RESUME</a>
            </nav>
        </div>
    
    </>)
};

export default NavBar;