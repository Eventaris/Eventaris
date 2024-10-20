import React from "react";

const SideImage = ({style}) =>{
    return(
        <div className={style}>
            <img className="size-80 mx-auto" src="/src/assets/sales-team%201.png" alt="team_img" />
            <h2 className="text-center font-inter font-bold text-3xl">Eventaris</h2>
            <p className="text-center font-inter text-base mt-2">Your Trusted Partner for Unforgettable Events.</p>
        </div>
    )
}

export default SideImage;