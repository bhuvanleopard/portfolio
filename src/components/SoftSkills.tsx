const SoftSkills = () => {

  const skillsList = ["TIME MANAGEMENT", "CLEAR COMMUNICATION", "ADAPTABILITY", "TEAM PLAYER"];

  return (
    <div
      className="
        relative
        p-[16px] lg:p-[32px]
        w-[100%]
        flex flex-col
        justify-center items-center
      ">

      <div className='w-full text-left pb-[24px]'>
        <span className='py-[8px] rounded-md font-extrabold
              section-title
                text-base md:text-xl
                '>
          SOFT SKILLS
        </span>
      </div>

      <div
        className='
          relative
          flex flex-wrap
          justify-center
          items-center
          w-[100%]
          py-[8px]
          rounded-md
          gap-y-[16px]
          md:gap-y-auto
        '>

        {skillsList.map((skill, idx) => (
          <div
            key={idx}
            className='
              relative
              w-1/2 md:w-1/4
              flex flex-wrap
              justify-center
              overflow-hidden'
            title={skill}>
            <span
              className="
                tracking-widest text-base
                font-extrabold
                rounded-sm
                border-1 border-white/15
                py-2 px-4
                text-center
                hover:scale-110
                transition-transform
              "
            >
              {skill}
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SoftSkills
