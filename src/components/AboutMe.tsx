const AboutMe = ({content}:{content:string}) => {
  return (
    <div
    className="
        relative
        w-[100%]
        h-[100%]
        p-[16px] lg:p-[32px]
        flex flex-col justify-center items-center">

        {/* <div className="skew-x-28"></div> */}

        {/* <div
        className="
            w-[150px] sm:w-[214px] md:w-[256px] lg:w-[342px]
            flex justify-between items-center gap-auto
            backdrop-blur-[2px]">

            <ResumeBtn/>
            <a 
                href = {GithubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                p-4 text-[1rem]  
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
                className="p-4 lg:text-[32px]  
                md:text-md lg:text-xl 
                leading-none inline-flex bg-white/6 
                rounded-sm"
            >
                <FaLinkedinIn/>
            </a>
        </div> */}
        <div
        className="
        md:w-[80%]
        text-base lg:text-[18px]
        font-bold
        text-center
        p-[4px]">
            {content}
        </div>

    </div>
  )
}

export default AboutMe