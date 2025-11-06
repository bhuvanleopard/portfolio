import type { PropsWithChildren } from "react";
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
        className="relative min-h-fit  flex items-center justify-center">
    <div className="relative border-1 border-gray-300/25 bg-cyan-50/0 py-0
    overflow-x-hidden
    flex flex-col justify-center items-center 
    w-[400px] backdrop-blur-md rounded-md gap-2 
    ">

        <div className="relative  text-[1rem] sm:text-2xl md:text-3xl tracking-[5px] lg:text-4xl
        md:tracking-[10px] font-extrabold text-center p-4 bg-slate-900/20 w-[100%] rounded-b-2xl rounded-md"
        
        >{title}</div>

        <div className="relative p-[8px] w-[100%] h-[300px] rounded-md flex justify-center">
                <svg 
                    
                    className=" rounded-md border-gray-300/24 border-1" stroke="rgb(14 165 233)"
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

        <div className="text-base sm:text-xl px-[8px] pt-2 rounded-sm">{description}</div>
    
        <div
            className="inline-flex flex-row w-[100%] flex-wrap gap-2 items-center p-2 px-[8px]">
            {techStack.map((ele,idx)=>(<span className="tracking-widest text-base first:font-extrabold first:bg-black/50 first:border-white/40 rounded-sm border-1 border-white/25 py-0.5 px-1" key={idx}>{ele}</span>))}
        </div>

        <div className="flex flex-row justify-between items-center gap-0 w-[100%] p-2">
            
            <a 
                href = {repo} 
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-[10px] sm:text-[1rem] md:text-2xl w-[49%] font-bold
                    leading-none 
                     bg-slate-900/20 text-center
                    hover:scale-98 rounded-md"
            >
                {/* <FiGithub/> */}
                GITHUB
            </a>
            
            <a 
                href = {live}
                title="Live"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-[10px] sm:text-[1rem] md:text-2xl w-[49%] font-bold
                    leading-none 
                     bg-slate-900/20 text-center
                    hover:scale-98 rounded-md"
            >
                {/* <FaExternalLinkAlt/> */}
                LIVE
            </a>
        </div>
    </div>

    </div>)}

const Projects = function({children}:PropsWithChildren){

    return(<div id="projects"
        className="relative 
            flex flex-col justify-center items-center 
            w-[100%] 
            min-h-fit
            p-[16px] lg:p-[32px]
            scroll-mt-[4rem]
            " >
  
      <div className='w-full text-left pb-[24px]'>
        <span className='py-[8px] rounded-md 
                font-extrabold text-base 
                md:text-xl
                section-title
                '>
          PROJECTS
        </span>
      </div>

        <div className="relative flex justify-center items-center flex-wrap w-[100%] gap-12">

        {children}
        
        </div>
    </div>)
};

export default {ProjectCard, Projects}