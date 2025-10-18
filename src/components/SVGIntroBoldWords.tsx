import SvgText from "./SvgText"

const SVGIntroBoldWords = ({words, className}: {words:string, className: string}) => {
  return (
    <div 
    className="
    relative
    w-[450px] md:w-[675px]  
    h-[64px] md:h-[96px] 
    p-[4px]">
        
        <SvgText 
        className={className}
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        
        textElementAttr={{
            textAnchor: "middle",
            content: words, 
            stroke:"ededed",
            fill:"#ededed", 
            textLength: "75",
            lengthAdjust:"spacingAndGlyphs",
            y:"98", x:"50",
            fontSize:"132",
            fontWeight:"bold"}}/>
    </div>
  )
}

export default SVGIntroBoldWords