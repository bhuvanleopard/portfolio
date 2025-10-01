import AboutMe from "./AboutMe";
import Contact from "./Contact";
// import Filler from "./Filler";
import Project from "./Projects";
import Skills from "./Skills";

const {ProjectCard, Projects} = Project

const Home = function(){

    return(<div className="relative z-40 sm:pt-22 lg:pt-26">
        {/* <Filler/> */}
        <AboutMe/>
        <Projects>

            <ProjectCard title="CATERING" image="dk" live="kdjfkd" repo="https://github.com/bhuvanleopard/voting_system" description="dkfjkd" techStack={["React", "TypeScript", "Node", "WebSockets", "TailwindCss"]}/>
        </Projects>
        <Skills/>
        <Contact/>  
    </div>)
};

export default Home