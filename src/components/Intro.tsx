const Intro = ({intro}:{intro:string}) => {
  return (
    <div className="w-[100%] h-[100%] text-center border p-2
    text-base sm:text-xl">
      {intro}
    </div>
  )
}

export default Intro