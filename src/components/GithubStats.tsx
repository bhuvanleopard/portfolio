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
        items-center">
      
      <div className='w-full text-left pb-[16px] '>
        <span className='py-[8px] rounded-md  
                section-title
                font-extrabold text-base 
                md:text-xl
                '>
          GITHUB CALENDAR
        </span>
      </div>

      <div
        className="
        relative 
        w-[100%]
        p-[16px] lg:p-[32px]
        backdrop-blur-md rounded-md
        flex justify-center
        bg-gradient-to-br
        from-purple-300/2 via-purple-600/0 to-slate-300/2">

          <GitHubCalendar username="bhuvanleopard" />
      </div>
      
    </div>
  )
}

export default GithubStats