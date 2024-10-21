import React from "react";

const Navbar = () => {
    return (
        <div className="bg-green1 w-full h-16 px-24 flex justify-between items-center text-white fixed top-0">
            <div className="flex gap-4 items-center">
                <img
                    src="src\assets\Logo White.png"
                    alt=""
                    className="w-8 h-auto"
                />
                <div className="text-2xl font-bold">Eventaris</div>
            </div>
            <div>
                <ul className="flex gap-8">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">My Order</a>
                    </li>
                </ul>
            </div>
            <div className="bg-white rounded-full w-8 h-8">R</div>
        </div>
    );
};

export default Navbar;
