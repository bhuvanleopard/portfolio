import Contact from "./Contact";
import ProfileImg from "../assets/profile-100.png";
import Project from "./Projects";
import ImgCaterer from "../assets/catering-service.webp";
import ImgVote from "../assets/voting-system.webp";
import ImgTask from "../assets/task-manager-thumbail.webp";
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
        <Intro name="BHUVAN" s1="HI! MY NAME IS" s2="I'M A FULL STACK DEVELOPER."/>
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
            image={ImgCaterer} 
            title="CATERING SERVICE" 
            description="A real-world application for a catering business, designed to manage users and operational needs.
            Engineered a dynamic pricing engine that generates instant, customizable quotes based on menu
            selections, guest count, and dietary needs.
            Developed a comprehensive dashboard for seamless order management, centralizing core business operations." 
            techStack={["TECH STACK:", "TYPESCRIPT", "REACT", "NODE JS", "EXPRESS", "MONGO DB", "NEXT JS", "TAILWIND CSS"]} live="" repo=""/>
            <ProjectCard 
            image={ImgVote} 
            title="VOTE SYSTEM" 
            description="Developed a full-stack, real-time polling application, designed to facilitate live audience engagement.
            Implemented a persistent, bi-directional communication channel using web sockets, enabling
            instantaneous submission of votes.
            Developed a responsive front-end interface that listens for web socket events to dynamically render the
            result charts in real-time." 
            techStack={["TECH STACK:", "TYPESCRIPT", "REACT", "NODE JS", "EXPRESS", "MONGO DB", "WEB SOCKET", "TAILWIND CSS"]} live="" repo=""/>
            <ProjectCard 
            image={ImgTask} 
            title="TASK MANAGER" 
            description="AI-driven task management platform designed to enhance productivity by deploying autonomous agents
            that automate routine administrative and communication tasks.
            Integrated third-party APIs to empower AI agents to draft and dispatch email and message replies.
            Implemented an analytics module where AI agents analyze user activity and task patterns to generate
            daily work summaries and actionable insights." 
            techStack={["TECH STACK:", "TYPESCRIPT", "REACT", "NODE JS", "EXPRESS", "MONGO DB", "AI AGENT", "TAILWIND CSS"]} live="" repo=""/>
        </Projects>
        {/* </div> */}
        {/* </div> */}
        {/* <Skills/> */}

        <Contact/>
    </main>)
};

export default Home