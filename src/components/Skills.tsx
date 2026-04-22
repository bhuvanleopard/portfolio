import GithubStats from "./GithubStats"
import TechStack from "./TechStack"
import SoftSkills from "./SoftSkills"

const Skills = () => {
  return (
    <div
      id = 'skills'
      className="
        relative
        flex flex-col justify-center items-center
        w-[100%]
        bg-gradient-to-r
        from-slate-400/0 via-slate-300/0 to-slate-400/0
        ">

        <div className="p-[32px] h-[100%] bg-purple-950/0 w-[100%]"></div>
        <SoftSkills/>
        <div className="p-[32px]"></div>
        <TechStack/>
        <div className="p-[32px] h-[100%] bg-purple-950/0 w-[100%]"></div>
        <GithubStats/>
    </div>
  )
}

export default Skills