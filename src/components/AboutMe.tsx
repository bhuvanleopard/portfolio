const AboutMe = ({profession, name, profile}:{profession: string, name: string, profile:string}) => {

return (

<div 
className="
rounded-md
relative overflow-hidden
bg-gradient-to-t from-[#f0f] via-white to-cyan-400
h-[98%] w-[98%]
flex flex-col justify-between items-center">

    <svg 
      
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
      
    > 

      <image href={profile} preserveAspectRatio="xMidYMid slice" width="70" height="70" x="14.5" y="19.5" opacity="0.2"/>
      <image href={profile} preserveAspectRatio="xMidYMid slice" width="70" height="70" x="15.5" y="20.5" opacity="0.2"/>
      <image href={profile} preserveAspectRatio="xMidYMid slice" width="70" height="70" x="15" y="20" />

      <rect width="110" fill="#202c38" height="13" y="0" z="0"/>
      <rect width="110" fill="#2b202a" height="13" x="0" y="88" z="0"/>
      
      
      <text
      
      textLength="94"
      // stroke="#c4c2c4"
      stroke="white"
      // fill="#c4c2c4"
      fill="white"
      opacity="0.95"
      fontSize="10"
      lengthAdjust="spacingAndGlyphs"
      y="10"
      x="53"
      z="10"
      textAnchor="middle"
      transform="skewX(-28)">{profession}</text>

      <text
      textLength="94"
      // stroke="#c4c2c4"
      // fill="#c4c2c4"
      stroke="white"
      fill="white"
      opacity="0.95"
      fontSize="10"
      lengthAdjust="spacingAndGlyphs"
      y="97.5"
      x="100"
      z="10"
      textAnchor="middle"
      transform="skewX(-28)"
      >{name}</text>
      
      
      </svg>
</div>)}

export default AboutMe