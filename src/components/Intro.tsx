import SVGIntroBoldWords from "./SVGIntroBoldWords";

const Intro = ({name, s1, s2}:{name:string, s1:string, s2:string}) => {
  return (
    <div 
    className="
    w-[100%] h-[100%]
    px-[16px] lg:px-[32px] py-[4px]">

      <div
      className="
      p-[4px] md:p-[8px]
      text-base 
      md:text-[18px] lg:text-[20px] 
      font-extrabold 
      tracking-widest">
        {s1}
      </div>

      <SVGIntroBoldWords 
        className=""
        words={name}/>

      <div
      className="
        p-[4px] md:p-[8px]
        text-base 
        md:text-[18px] lg:text-[20px] 
        font-extrabold 
        tracking-widest">
        {s2}
      </div>
    </div>
)}

export default Intro