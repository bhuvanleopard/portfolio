import reactSvg from '../assets/react.svg'
import tailwindcssSvg from '../assets/tailwindcss.svg'
import nodeSvg from '../assets/nodeJs.svg'
import expressSvg from '../assets/express.svg'
import mongoDbSvg from '../assets/mongoDb.svg'
import nextSvg from '../assets/nextJs.svg'
// import jsSvg from '../assets/js.svg'
import typescriptSvg from '../assets/typescript.svg'
import githubSvg from '../assets/github.svg'

const TechStack = () => {

  const skillsList = [reactSvg, tailwindcssSvg, nodeSvg, expressSvg, mongoDbSvg, nextSvg, typescriptSvg, githubSvg];

  return (
    <div id="skills"
      className="
      flex
      flex-col
      justify-center
      items-center
      relative
      w-[100%]">
      <div 
      className="
        relative
        w-full
        p-[4px]
        cursor-pointer
        transition-colors
        hover:text-cyan-100  rounded-md
        text-base lg:text-[18px]
        font-extrabold
        tracking-widest
        backdrop-blur-sm
        bg-black
      "
      >
      TECH STACK
      </div>

      <div
      className='
        relative
        flex flex-wrap
        gap-auto'>
        {skillsList.map((ele, idx)=>
          (<div className=' relative w-1/8 md:w-1/8 flex justify-center overflow-hidden'>
            <img className="rounded-md bg-white/16 p-[16px] w-[90%] sm:w-[90%] md:w-[85%] lg:w-[60%] grayscale-100" key={idx} src={ele}/>
          </div>))}
      </div>

    </div>
  )
}

export default TechStack