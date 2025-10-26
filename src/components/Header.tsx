import NavBar from "./NavBar"
import ResumeBtn from "./ResumeBtn";
const Header = function(){

    return(

        <header className='
        
        z-100
        fixed
        top-0
        w-[100%] h-[4rem]
        shadow-2xs
        flex flex-row justify-between  md:justify-end items-center
        px-4 py-2
        md:px-[16px] lg:px-[32px]
        '>
            <NavBar/>
                <div className="hidden cursor-pointer
                    transition-colors
                    border-2
                    border-transparent
                    hover:text-cyan-100 z-50  rounded-md
                    hover:border-2 hover:border-cyan-50
                    text-2xl
                    font-extrabold
                    tracking-widest
                    p-1
                    backdrop-blur-sm">
                    <ResumeBtn/>
                </div>
        </header>
    )
};

export default Header