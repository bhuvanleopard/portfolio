interface BackgroundProps {

    children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = () => {
  
    return (

    <div className="fixed w-full h-full z-10">
        {/* <img src="logo.webp" alt="." className="absolute  opacity-50"/> */}
        {/* <div className="absolute w-[75%] h-[50%] border-transparent border-8 shadow-2xl bg-cyan-200/20 z-13"></div> */}
        {/* <div className="absolute top-[50%] w-[50%] h-[60%] border-8 border-transparent shadow-2xl bg-gray-500/30 z-11"></div> */}
        <div className="absolute top-[45%] w-full h-[50%] border-transparent border-8 shadow-2xl bg-cyan-100/10 z-12"></div>
    
    </div>
  )
  
};

export default Background