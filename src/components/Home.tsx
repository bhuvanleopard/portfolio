import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Profile from "../assets/profile-100.png";
// import Filler from "./Filler";
// import Project from "./Projects";
// import Skills from "./Skills";

// const {ProjectCard, Projects} = Project

const Home = function(){

    return(<main 
    className="
    z-20
    pt-[4rem]
    relative
    overflow-x-hidden
    flex flex-col justify-between items-center"
    
    id="main-content">
        <div className="h-[100vh] w-full flex flex-col justify-between items-center">
            <div className="relative h-[70vw] w-[70vw] flex justify-center items-center border-2 rounded-md">
            <AboutMe profession="FULL-STACK DEV" name="BHUVAN CHAVAN" profile={Profile}/>
            </div>

        </div>
        
        {/* <Projects>
            <ProjectCard image="" title="CATERING" description="" techStack={["TYPESCRIPT", "REACT"]} live="" repo=""/>
            <ProjectCard image="" title="CATERING" description="" techStack={["TYPESCRIPT", "REACT"]} live="" repo=""/>
            <ProjectCard image="" title="LIVE" description="" techStack={["TYPESCRIPT", "REACT"]} live="" repo=""/>
        </Projects>
        <Skills/> */}

        <Contact/>
    </main>)
};

export default Home