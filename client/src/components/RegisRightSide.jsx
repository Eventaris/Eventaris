import React from "react";
import RegisForm from "./RegisForm";
import HeadForm from "./HeadForm";
const RegisRightSide = () => {
    return(
        <div className="w-[55%] flex flex-col justify-center items-center">
            <HeadForm syle={"mb-5"} judul={"Welcome To Eventaris"} sub={"Please Enter Your Data To Create Account"}/>
            <RegisForm/>
        </div>
    )
    
}

export default RegisRightSide;