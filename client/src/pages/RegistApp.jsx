import React from "react";
import RegisRightSide from "../components/regis/RegisRightSide";
import LeftSideImage from "../components/LeftSideImage";
const RegistApp = () =>{
    return(
        <div className="flex h-screen">
            <LeftSideImage/>
            <RegisRightSide/>
        </div>
        )
}

export default RegistApp;