import GitHubCalendar from "react-github-calendar"

const GithubStats = () => {
  return (
    <div 
      className="
        relative
        p-[16px] lg:p-[32px] 
        w-[100%]
        flex flex-col
        justify-center
        items-end">
      
      <div className='w-full text-left pb-[4px]'>
        <span className='py-[8px] rounded-md 
                font-extrabold text-base 
                md:text-xl bg-white/8 pr-2
                hover-effect01'>
          GITHUB CALENDAR
        </span>
      </div>

      <div
        className="
        relative 
        w-[100%]
        py-[8px] lg:py-[16px]">

          <GitHubCalendar username="bhuvanleopard"/>
      </div>
      
    </div>
  )
}

export default GithubStats