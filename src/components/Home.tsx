import Contact from "./Contact";
import ProfileImg from "../assets/profile-100.png";
import Project from "./Projects";
import Intro from "./Intro";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

const {ProjectCard, Projects} = Project

const Home = function(){

    return(<main 
    className="
    z-20
    relative
    overflow-x-hidden
    flex flex-col justify-between items-center"
    
    id="main-content">
        
        <div id="about-me"
            className="
                relative
                flex flex-col 
                h-[100vh] 
                min-h-fit
                justify-center items-center 
                w-[100%]
                ">
        <Intro name="BHUVAN" s1="HI... MY NAME IS" s2="I'M A FULL STACK DEVELOPER."/>
        <div className="p-[32px]"></div>
        <Profile profile={ProfileImg}/>
        <AboutMe
            content="HIGHLY MOTIVATED SOFTWARE DEVELOPER WITH A STRONG FOUNDATION IN FULL-STACK TECHNOLOGIES, INCLUDING REACT, NODE.JS, EXPRESS, TYPESCRIPT, AND TAILWIND CSS. 
            MY EXPERTISE EXTENDS BEYOND WEB DEVELOPMENT, DRIVEN BY A DEEP UNDERSTANDING OF DATA STRUCTURES, ALGORITHMS, AND LOW-LEVEL DESIGN PRINCIPLES. 
            I AM A PASSIONATE LIFELONG LEARNER, ACTIVELY EXPLORING DIVERSE DOMAINS OF SOFTWARE ENGINEERING AND STAYING AT THE FOREFRONT OF TECHNOLOGICAL ADVANCEMENTS. 
            MY ULTIMATE AMBITION IS TO LEVERAGE THIS BROAD AND EVER-EXPANDING SKILL SET TO CONTRIBUTE TO THE NEXT WAVE OF INNOVATION IN SOFTWARE TECHNOLOGY."/>
        
        </div>

        <div className="h-[48px]"></div>

        <Skills/>
        <div className="p-[48px]"></div>
        <Projects>
            <ProjectCard 
            image="./resumeBuilder.png" 
            title="BUILD RESUME" 
            description="Resume Builder is a user-friendly web app to create, customize, and download professional resumes with ready-to-use templates and tips." 
            techStack={["TECH STACK:", "REACT", "NODE JS", "EXPRESS", "MONGO DB", "TAILWIND CSS"]} 
            repo="" live=""/>
            
            <ProjectCard 
            image="./memoCap.png" 
            title="TIME CAPSULE" 
            description="Digital Time Capsule is an app to save photos, messages, and videos as memories, locked and revealed at a future date" 
            techStack={["TECH STACK:", "REACT", "NODE JS", "EXPRESS", "MONGO DB", "TAILWIND CSS"]}
            repo="" live=""/>
            
            <ProjectCard 
            image="./pharmacy.png"
            title="BUY MEDICINE" 
            description="A responsive e-commerce platform for medicines and healthcare products, with advanced search, filter, and add to cart feature." 
            techStack={["TECH STACK:", "REACT", "NODE JS", "EXPRESS", "MONGO DB", "TAILWIND CSS"]}
            repo="" live=""/>
        </Projects>
        {/* </div> */}
        {/* </div> */}
        {/* <Skills/> */}

        <Contact/>
    </main>)
};

export default Home
