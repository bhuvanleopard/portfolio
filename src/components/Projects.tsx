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

    return(<div className="relative flex flex-col justify-center items-center w-full">

        <div className="relative flex justify-between items-center w-full py-2">

            <div className="relative flex flex-row justify-between w-full items-center">
                
                <div className="relative sm:text-6xl sm:tracking-[5px] md:text-8xl 
                tracking-[10px] font-extrabold"
                >{title}</div>

                <div className="flex flex-row justify-between items-center gap-4">
                    
                    <a 
                        href = {repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:text-3xl md:text-5xl inline-flex border-2 bg-black"
                    >
                        <FiGithub/>
                    </a>
                    
                    <a 
                        href = {live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:text-3xl md:text-5xl inline-flex border-2 bg-black"
                    >
                        <FaExternalLinkAlt/>
                    </a>
                </div>

            </div>
        </div>
        <img src={image} className="w-full h-[50vh] shadow-cyan-500 border-2"/>
        <div
            className="inline-flex flex-row w-full justify-between items-center py-2 sm:text-xl md:text-2xl lg:text-3xl"
        >{techStack.map((ele,idx)=>(<span className="tracking-widest" key={idx}>{ele}</span>))}</div>
        <div className="py-2">{description}</div>
    </div>)
}
const Projects = function({children}:PropsWithChildren){

    return(<div className="scroll-mt-28" id="projects">

        {children}
        
    </div>)
};

export default {ProjectCard, Projects}