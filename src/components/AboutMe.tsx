import ResumeBtn from "./ResumeBtn"

const AboutMe = ({content}:{content:string}) => {
  return (
    <div
    className="
        relative
        w-[100%]
        h-[100%]
        px-[16px] lg:px-[32px]
        py-[4px]
        flex flex-col justify-center items-center">

        {/* <div className="skew-x-28"></div> */}
        
        <div
        className="
            
            w-[146px] sm:w-[210px] md:w-[252px] lg:w-[338px]
            flex justify-center
            cursor-pointer
            transition-colors
            border-2 border-white/50
            hover:text-cyan-100 z-50  rounded-md
            hover:border-2 hover:border-cyan-50
            text-xl md:text-3xl lg:text-4xl
            font-extrabold
            tracking-widest
            p-1
            backdrop-blur-sm
            ">
            
            <ResumeBtn/>

            {/* <a 
                href = {GithubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                p-3 text-[1rem]  
                md:text-md lg:text-[32px] 
                leading-none inline-flex 
                bg-white/6 rounded-sm"
            >
                <FiGithub/>
            </a>
            <a 
                href = {LinkedInURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:text-[32px]  
                md:text-md lg:text-xl 
                leading-none inline-flex bg-white/6 
                rounded-sm"
            >
                <FaLinkedinIn/>
            </a> */}
        </div>
        
        <div className="p-[32px]"></div>

        <div
        className="
        text-end
        text-base lg:text-[18px]
        p-[4px]">
            {content}
        </div>

    </div>
  )
}

export default AboutMe