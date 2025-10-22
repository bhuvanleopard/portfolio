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
      relative
      p-[16px] lg:p[32px] 
      sm:w-[640px] md:w-[768px] lg:w-[1024px]
      flex flex-col
      justify-center items-center
      backdrop-blur-sm 
      border-0 border-white/25 rounded-sm
      ">

      <div 
        className="
          relative
          w-[100%]
          bg-gradient-to-br
          from-[#ededed] via-slate-300 to-[#ededed]
          inline-flex
          justify-between
          items-center
          text-base lg:text-[18px]
          font-extrabold
          text-center
          px-[4px]
          rounded-sm
          ">
            
        {["T", "E", "C", "H", " ", "S", "T", "A", "C", "K"]
          .map((ele, idx)=>(
            <span 
              key={idx}
              className='text-black/50 p-[4px] rounded-sm'>
              {ele}
            </span>
          ))}

      </div>

      <div
        className='
          relative
          flex flex-wrap
          justify-between
          items-center
          w-full
          py-[8px]
          bg-slate-950/50
          '>

        {skillsList.map((ele, idx)=>
          (<div className=' relative w-[52px] h-[52px] md:w-[77px] md:h-[77px] lg:w-[112px] lg:h-[112px] flex justify-center overflow-hidden'>
            <img className="rounded-md p-[16px] " key={idx} src={ele}/>
          </div>))}

      </div>

    </div>
)}

export default TechStack