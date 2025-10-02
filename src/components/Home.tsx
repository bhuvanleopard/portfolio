import AboutMe from "./AboutMe";
import Contact from "./Contact";
// import Filler from "./Filler";
import Project from "./Projects";
import Skills from "./Skills";

const {ProjectCard, Projects} = Project

const Home = function(){

    return(<main className="pt-26 px-8 z-30" id="main-content">

        <AboutMe/>
        <Projects>
            <ProjectCard image="" title="CATERING" description="" techStack={["TYPESCRIPT", "REACT"]} live="" repo=""/>
            <ProjectCard image="" title="CATERING" description="" techStack={["TYPESCRIPT", "REACT"]} live="" repo=""/>
            <ProjectCard image="" title="LIVE" description="" techStack={["TYPESCRIPT", "REACT"]} live="" repo=""/>
        </Projects>
        <Skills/>

        <Contact/>
    </main>)
};

export default Home