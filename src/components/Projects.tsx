import type { PropsWithChildren } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface CardI {

    image: string;
    title: string;
    description: string;
    techStack: string[];
    live: string;
    repo: string;

};


const ProjectCard = ({image, title, description, techStack, live, repo}:CardI)=>{

    return(
    <div id="projects" 
        className="relative min-h-fit w-full flex items-center justify-center p-4 lg:p-8 pb-[64px]">
    {/* <div className="absolute h-[5%] w-full bottom-0 bg-black"></div> */}
    <div className="relative border-1 border-gray-300/50 bg-cyan-50/0 py-4
    overflow-x-hidden
    flex flex-col justify-center items-center 
    w-[100%] sm:w-[626px] md:w-[752px] lg:w-[992px] backdrop-blur-md rounded-md
    gap-2">

        <div className="relative flex flex-row justify-between items-center w-[100%] p-2 lg:p-4">
                
                <div className="relative  text-[1.25rem] sm:text-3xl md:text-4xl tracking-[5px] lg:text-5xl leading-none 
                scale-y-120 pl-2 px-[8px]
                md:tracking-[10px] font-extrabold"
                
                >{title}</div>

                <div className="flex flex-row justify-between items-center gap-4 pr-1">
                    
                    <a 
                        href = {repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[1rem] md:text-3xl lg:text-5xl
                            leading-none 
                            inline-flex border-2 bg-transparent 
                            hover:scale-105
                            rounded-md"
                    >
                        <FiGithub/>
                    </a>
                    
                    <a 
                        href = {live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[1rem] md:text-3xl lg:text-5xl 
                            leading-none 
                            inline-flex border-2 bg-transparent 
                            hover:scale-105
                            rounded-md"
                    >
                        <FaExternalLinkAlt/>
                    </a>
                </div>

            </div>

        <div className="relative p-[8px] w-[100%] h-[50vw] sm:h-[320px] md:h-[384px] lg:h-[512px] rounded-md flex justify-center">
                <svg 
                    
                    className=" rounded-md" stroke="rgb(14 165 233)"
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio ="none"
                    xmlns="http://www.w3.org/2000/svg"> 
                    
                    <defs>
                        <filter id="grayscale">
                        <feColorMatrix type="saturate" values="0" />
                        </filter>
                    </defs>
                    
                    <image  
                        href={image} 
                        preserveAspectRatio="xMidYMid slice" 
                        width="100" 
                        height="100" 
                        x="0" y="0"
                        // filter="url(#grayscale)"
                        />
                </svg>
        </div>

        <div className="text-base sm:text-xl px-[8px] rounded-sm">{description}</div>
    
        <div
            className="inline-flex flex-row w-[100%] flex-wrap gap-2 items-center p-2 px-[8px]">
            {techStack.map((ele,idx)=>(<span className="tracking-widest text-base first:font-extrabold first:bg-black/50 first:border-white rounded-sm border-1 border-white/25 py-0.5 px-1" key={idx}>{ele}</span>))}
        </div>

        {/* <div className=" absolute top-0 h-[2px] w-[100%] bg-gray-100"></div> */}
        {/* <div className=" absolute bottom-0 h-[8rem] w-[100%] 
        bg-[linear-gradient(to_right,theme(colors.cyan.400),theme(colors.blue.400),theme(colors.cyan.400),theme(colors.white),theme(colors.pink.500))]
        "></div> */}

    </div>

    </div>)}

const Projects = function({children}:PropsWithChildren){

    return(<div id="projects"
        className="relative 
            flex flex-col justify-between items-center 
            w-[100%] 
            min-h-fit
            p-[16px] lg:p-[32px]
            scroll-mt-[4rem]
            " >
  
      <div className='w-full text-left pb-[16px]'>
        <span className='py-[8px] rounded-md 
                font-extrabold text-base 
                md:text-xl bg-white/8 p-4
                hover-effect01'>
          PROJECTS
        </span>
      </div>

        {children}
        
    </div>)
};

export default {ProjectCard, Projects}