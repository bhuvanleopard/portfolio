const Profile = ({profile}:{profile:string}) => {

return (

<div
className="
relative
p-[4px]
w-[150px] sm:w-[214px] md:w-[256px] lg:w-[342px]
h-[150px] sm:h-[214px] md:h-[256px] lg:h-[342px]
rounded-sm
opacity-100">
<div 
className="
rounded-md
relative
flex flex-col justify-between items-center">

    <svg
      className="

        rounded-md
        bg-gradient-to-bl
        from-slate-400 via-slate-50 to-slate-400 backdrop-blur-md
        bg-[radial-gradient(circle_at_center,transparent,transparent,#a855f7/0)]"
      stroke="transparent"
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"> 

      <image href={profile} preserveAspectRatio="xMidYMid slice" width="100" height="100" x="-0.5" y="-0.5" opacity="0.75"/>
      <image href={profile} preserveAspectRatio="xMidYMid slice" width="100" height="100" x="0.5" y="-0.5" opacity="0.75"/>
      <image href={profile} preserveAspectRatio="xMidYMid slice" width="100" height="100" x="0" y="0"  opacity="0.9"/>      
    </svg>
</div>
</div>)}

export default Profile