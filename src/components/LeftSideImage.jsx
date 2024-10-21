import React from "react";
import SideImage from "./SideImage";

function LeftSideImage() {
    return (
        <div className="bg-gradient-green w-[45%] h-screen flex flex-col">
            <img className="w-[40px] mt-10 ml-10" src="src\assets\Logo White.png" alt="logo" />
            <SideImage />
        </div>
    );
}

export default LeftSideImage;