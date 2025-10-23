// import GithubStats from "./GithubStats"
import TechStack from "./TechStack"

const Skills = () => {
  return (
    <div
      className="
        relative
        flex flex-col justify-center
        w-[100%]
        bg-gradient-to-r
        from-slate-400/0 via-slate-300/0 to-slate-400/0
        ">

        <TechStack/>
        {/* <GithubStats/> */}
    </div>
  )
}

export default Skills