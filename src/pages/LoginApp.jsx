import React from "react";
import LeftSideImage from "../components/LeftSideImage";
import LoginRightSide from "../components/LoginRightSide";
const LoginApp = () => {
    return(
        <div className="flex h-screen">
            <LeftSideImage/>
            <LoginRightSide/>
        </div>
    )
}

export default LoginApp;