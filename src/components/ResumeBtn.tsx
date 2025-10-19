import Resume from "../assets/Bhuvan_Chavan_Resume.pdf"

const ResumeBtn = ()=>{

    return (<a
            className=" 
                z-100"      
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                    // window.open("https://drive.google.com/file/d/1z_ErdQcVY_uY1HOaYF4zVBAfq1683iTm/view?usp=sharing", "_blank");
                        window.open("./Bhuvan_Chavan_Resume.pdf", "_blank");
                    const link = document.createElement("a");
                    link.href = Resume;
                    link.download = "Bhuvan_Chavan_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    e.preventDefault();}}
                    >
                        RESUME
                </a>)
};

export default ResumeBtn