import type { PropsWithChildren } from "react";
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

    return(<div className="flex flex-col justify-between items-center p-8 w-full">

        <div className="flex justify-between items-center w-full">

            <div className="relative flex flex-row justify-between w-full items-center py-3">
                
                <div className="sm:text-6xl sm:tracking-[5px] md:text-8xl tracking-[10px] font-extrabold ">{title}</div>

                <div className="flex flex-row justify-between items-center bg-white ">
                    
                    <a 
                        href = {repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:text-3xl md:text-5xl inline-flex border-2 bg-black"
                    >
                        <FiGithub/>
                        {/* <FaGithub/> */}
                        {/* <TbBrandGithubFilled/> */}
                    </a>
                    
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferer"
                        className="sm:px-2 border-x-5 md:px-5 md:pl-6 sm:text-3xl md:text-4xl text-center font-bold text-black scale-y-200 sm:tracking-[4px] md:tracking-[6px] lg:tracking-[8px]"
                    >
                        LIVE
                    </a>
                </div>

            </div>
        </div>
        <img src={image} className="w-full h-auto"/>
        <div
            className="flex flex-row w-full justify-between items-center"
        >{techStack.map((ele,idx)=>(<span className="tracking-widest" key={idx}>{ele}</span>))}</div>
        <div>{description}</div>

    </div>)
}
const Projects = function({children}:PropsWithChildren){

    return(<div className=" main-section" id="projects">

        {children}
        
    </div>)
};

export default {ProjectCard, Projects}