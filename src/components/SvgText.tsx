import type { SVGProps } from "react"

interface SvgTextProps extends SVGProps<SVGSVGElement> {
    textElementAttr: SvgTextEle;
};

interface SvgTextEle extends SVGProps<SVGTextElement>{
    content: string;
};

const SvgText: React.FC<SvgTextProps> = ({textElementAttr:{content, ...textAttr}, ...svgProps}) => {
  return (
    <svg  
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}> 
        <text
        {...textAttr}>
            {content}
        </text>
    </svg>   
  )}

export default SvgText