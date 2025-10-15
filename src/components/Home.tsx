import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Profile from "../assets/profile-100.png";
import Project from "./Projects";
import ImgCaterer from "../assets/catering-service.webp";
import ImgVote from "../assets/voting-system.webp";
import ImgTask from "../assets/task-manager-thumbail.webp";
import Intro from "./Intro";

const {ProjectCard, Projects} = Project

const Home = function(){

    return(<main 
    className="
    z-20
    pt-[4rem]
    relative
    overflow-x-hidden
    flex flex-col justify-between items-center"
    
    id="main-content">
        <div className="relative h-[100vh] flex flex-col justify-center items-center 
        gap-16 scroll-mt-[4rem] rounded-md ">
            <div className="relative h-[50vw] w-[50vw] sm:w-[320px] sm:h-[320px] md:w-[384px] md:h-[384px] lg:h-[512px] lg:w-[512px] 
            flex justify-center items-center border-2 rounded-md">
            <AboutMe profession="FULL-STACK DEV" name="BHUVAN CHAVAN" profile={Profile}/>
            </div>
            
            <div className="relative w-[100%] sm:w-[632px] md:w-[760px] lg:w-[1016px] p-4 lg:p-8 ">
            <Intro intro="Dynamic and detail-oriented Full Stack Developer with hands-on experience in building scalable and robust
                web applications. Proficient in a variety of front-end, back-end, and system design technologies, with a
                strong commitment to delivering high-quality solutions. Skilled in problem-solving and team collaboration,
                with a strong foundation in data structures and algorithms."/>
            </div>
        </div>
        
        {/* <div className="relative sm:w-[640px] md:w-[768px] lg:w-[1024px] h-"> */}
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