import GithubStats from "./GithubStats"
import TechStack from "./TechStack"

const Skills = () => {
  return (
    <div id='skills'
      className="
        relative
        w-[100%]
        p-[16px] lg:p-[32px]
        flex
        flex-col justify-center items-center
        ">

        <TechStack/>
        <GithubStats/>
    </div>
  )
}

export default Skills