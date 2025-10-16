const Intro = ({intro}:{intro:string}) => {
  return (
    <div className="w-[94%] h-[100%] text-center
    text-base sm:text-xl">
      {intro}
    </div>
  )
}

export default Intro