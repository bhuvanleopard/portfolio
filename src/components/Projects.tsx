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

    return(<div className="relative overflow-x-hidden bg-red-500
    flex flex-col justify-center items-center 
    sm:w-[440px] md:w-[768px] lg:w-[1024px] h-full ">

        <div className="relative flex justify-between items-center w-[100%] py-2">

            <div className="relative flex flex-row justify-between  items-center">
                
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
        
        <img src={image} className="h-[50vh] shadow-cyan-500 border-2"/>
        
        <div
        className="inline-flex flex-row w-[100%] justify-between items-center py-2"
        >{techStack.map((ele,idx)=>(<span className="tracking-widest" key={idx}>{ele}</span>))}
        </div>
        
        <div className="py-2">{description}</div>

    </div>)
}
const Projects = function({children}:PropsWithChildren){

    return(<div id="projects"
    className="scroll-mt-28 flex flex-col justify-between items-center" >

        {children}
        
    </div>)
};

export default {ProjectCard, Projects}