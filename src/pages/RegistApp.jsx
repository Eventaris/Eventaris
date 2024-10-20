import React from "react";
import RegisRightSide from "../components/RegisRightSide";
import RegisLeftSide from "../components/RegisLeftSide";
const RegistApp = () =>{
    return(
        <div className={"flex h-screen"}>
            <RegisLeftSide/>
            <RegisRightSide/>
        </div>
        )
}

export default RegistApp;