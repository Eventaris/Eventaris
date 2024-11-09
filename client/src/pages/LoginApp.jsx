import React, { useState } from "react";
import LeftSideImage from "../components/LeftSideImage";
import LoginRightSide from "../components/LoginRightSide";
const LoginApp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const message = sessionStorage.getItem("errorMessage");
    if (message) {
        setErrorMessage(message);
        sessionStorage.removeItem("errorMessage");
    }

    return (
        <div className="flex h-screen">
            <LeftSideImage />
            <LoginRightSide />
            {errorMessage && alert(errorMessage)}
        </div>
    )
}

export default LoginApp;