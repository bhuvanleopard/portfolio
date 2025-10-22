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
    pt-[8rem]
    flex flex-col justify-between items-center"
    
    id="main-content">
        
        <Intro name="BHUVAN" s1="HI! MY NAME IS" s2="I'M A FULL STACK DEVELOPER."/>
        <div className="p-[32px]"></div>
        <Profile profile={ProfileImg}/>
        <AboutMe
            content="A FULL STACK DEVELOPER WITH HANDS ON EXPERIENCE IN BUILDING SCALABLE AND ROBUST WEB APPLICATIONS. 
            PROFICIENT IN A VARIETY OF FRONTEND, 
            BACKEND, AND SYSTEM DESIGN TECHNOLOGIES, 
            WITH A STRONG COMMITMENT TO DELIVERING HIGH QUALITY SOLUTIONS. 
            SKILLED IN PROBLEM SOLVING AND TEAM COLLABORATION, 
            WITH A STRONG FOUNDATION IN DATA STRUCTURES AND ALGORITHMS."/>
        
        <Skills/>
        
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