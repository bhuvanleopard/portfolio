import Resume from "../assets/Bhuvan_Chavan_Resume.pdf"

const ResumeBtn = ()=>{

    return (<a  className="text-2xl h-[100%] tracking-widest font-extrabold text-white bg-white/5 
                    inline-flex items-center justify-between gap-6 cursor-pointer py-1 px-2 
                    -skew-x-28 border border-white/8 backdrop-blur-sm rounded-sm z-100"
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
                </a>)
};

export default ResumeBtn