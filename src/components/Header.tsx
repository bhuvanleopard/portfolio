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
                {/* <a  className="text-2xl tracking-widest font-extrabold text-white bg-white/5 
                    inline-flex items-center justify-between gap-6 cursor-pointer py-1 px-2 
                    -skew-x-28 border border-white/8 backdrop-blur-sm rounded-sm"
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        window.open("https://drive.google.com/file/d/1z_ErdQcVY_uY1HOaYF4zVBAfq1683iTm/view?usp=sharing", "_blank");

                        const link = document.createElement("a");
                        link.href = Resume;
                        link.download = "Bhuvan_Chavan_Resume.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);

                        e.preventDefault();}}>RESUME
                </a> */}
        </header>
    )
};

export default Header