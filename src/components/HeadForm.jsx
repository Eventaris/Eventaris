import React from "react";

const HeadForm = ({syle,judul, sub}) =>{
    return(
        <div className={syle}>
            <h2 className="font-inter text-[#07A0A8] font-bold text-[2rem] text-center">{judul}</h2>
            <p className="font-inter text-[#667085] text-[0.8rem] text-center">{sub}</p>
        </div>
    )
}

export default HeadForm;