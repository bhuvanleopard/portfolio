import reactSvg from '../assets/react.svg'
import tailwindcssSvg from '../assets/tailwindcss.svg'
import nodeSvg from '../assets/nodeJs.svg'
import expressSvg from '../assets/express.svg'
import mongoDbSvg from '../assets/mongoDb.svg'
import nextSvg from '../assets/nextJs.svg'
import typescriptSvg from '../assets/typescript.svg'
import githubSvg from '../assets/github.svg'

const TechStack = () => {

  const skillsList = [reactSvg, tailwindcssSvg, nodeSvg, expressSvg, mongoDbSvg, nextSvg, typescriptSvg, githubSvg];

  return (

    <div id="skills"
      className="
      relative
      p-[16px] lg:p-[32px] 
      w-[100%] sm:w-[640px] md:w-[768px] lg:w-[1024px]
      flex flex-col
      justify-center items-center
      backdrop-blur-sm 
      border-0 border-white/25 rounded-md
      scroll-mt-[4rem] 
      ">

      {/* <div 
        className="
          relative
          w-[100%]
          inline-flex
          justify-between
          items-center
          text-base lg:text-[18px]
          font-extrabold
          text-center
          px-[4px]
          
          ">
            
        {["T", "E", "C", "H", " ", "S", "T", "A", "C", "K"]
          .map((ele, idx)=>(
            <span 
              key={idx}
              className=' p-[1px] md:p-[4px] rounded-sm'>
              {ele}
            </span>
          ))}

      </div> */}
      <div className='w-full text-left pb-[16px]'>
        <span className='py-[8px] rounded-md font-extrabold 
                text-base md:text-xl 
                bg-white/8 p-4
                hover-effect01'>
          TECH STACK
        </span>
      </div>
      <div
        className='
          relative
          flex flex-wrap
          justify-between
          items-center
          w-full
          py-[8px]
          bg-slate-950/0
          rounded-md
          '>

        {skillsList.map((ele, idx)=>
          (<div 
            className='
            relative
            w-1/4 md:w-1/8 
            flex flex-wrap 
            justify-center 
            overflow-hidden'>
            <img className="rounded-md 
            w-[50px]
            md:w-[64px]   
            lg:w-[75px]
            p-[8px] md:p-[12px]
            hover:scale-110" 
            
            key={idx} src={ele}/>

          </div>))}

      </div>

    </div>
)}

export default TechStack