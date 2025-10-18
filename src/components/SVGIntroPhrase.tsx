import SvgText from "./SvgText"

const SVGIntroPhrase = ({content}: {content: string}) => {
  return (
    <div 
    className=" bg-amber-500
    relative
    w-[100%] h-[40px] lg:h[128px]
    p-[8px] lg:p-[16px]">
        
        <SvgText 
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        
        textElementAttr={{
            textAnchor: "middle",
            content: content, 
            stroke:"white",
            fill:"white", 
            textLength: "40",
            lengthAdjust:"spacingAndGlyphs",
            y:"100", x:"50",
            fontSize:"140",
            fontWeight:"bold"}}/>
    </div>
  )
}

export default SVGIntroPhrase