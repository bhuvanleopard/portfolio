const Profile = ({profile}:{profile:string}) => {

return (

<div
className="
relative
p-[4px]
w-[150px] sm:w-[214px] md:w-[256px] lg:w-[342px]
h-[150px] sm:h-[214px] md:h-[256px] lg:h-[342px]
perspective-[500px]
rounded-sm
opacity-100">
<div 
className="
border-4 border-white/5
rounded-sm
relative
flex flex-col justify-between items-center">

    <svg
      className="
        rounded-sm
        bg-gradient-to-r from-[#00a3a3] via-white to-[#7a0278]/100"
      stroke="transparent"
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"> 

      <image href={profile} preserveAspectRatio="xMidYMid slice" width="100" height="100" x="1" y="0" opacity="0.2"/>
      <image href={profile} preserveAspectRatio="xMidYMid slice" width="100" height="100" x="1" y="0" opacity="0.2"/>
      <image href={profile} preserveAspectRatio="xMidYMid slice" width="100" height="100" x="0.5" y="0"  opacity="0.9"/>      
    </svg>
</div>
</div>)}

export default Profile