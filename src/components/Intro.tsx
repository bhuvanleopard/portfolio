const Intro = ({intro}:{intro:string}) => {
  return (
    <div className="w-[100%] h-[100%] text-center -skew-x-28 px-16 py-8
    text-base sm:text-xl font-bold text-white/85 backdrop-blur-[4px]">
      {intro}
    </div>
  )
}

export default Intro