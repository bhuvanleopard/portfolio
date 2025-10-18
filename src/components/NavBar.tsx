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
    return (<div>

        <nav className="hidden md:flex justify-center items-center gap-8">
            <a className="nav-bar-item" href="#skills">SKILLS</a>
            <a className="nav-bar-item" href="#projects">PROJECTS</a>
            <a className="nav-bar-item" href="#aboutMe">HOME</a>
            <a className="nav-bar-item" href="#contact">CONTACT</a>
        </nav>
        

        <button onClick= {toggleMobileMenu} className="relative text-4xl md:hidden z-100 cursor-pointer backdrop-blur-sm">
            <FiMenu/>
        </button>

        
        <div id='mobileMenu' className="hidden fixed items-center pt-[8rem]  w-full h-full bottom-0 right-0 left-0 p-4 md:hidden
         bg-black/90 z-90">
            <nav className="flex flex-col gap-12 items-center px-4">
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-100 font-extrabold px-6 py-3 border-white/50 text-center" href="#aboutMe">HOME</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-100 font-extrabold px-6 py-3 border-white/50 text-center" href="#skills">SKILLS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-100 font-extrabold px-6 py-3 border-white/50 text-center" href="#projects">PROJECTS</a>
            <a onClick={toggleMobileMenu} className="cursor-pointer text-2xl tracking-[8px] transition-colors hover:text-gray-300 z-10 font-extrabold px-6 py-3 border-white/50 text-center" href="#contact">CONTACT</a>
            </nav>
        </div>
    
    </div>)
};

export default NavBar;