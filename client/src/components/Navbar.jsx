import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

const Navbar = ({ isLoggedIn }) => {
    return (
        <div className="bg-green1 w-full h-16 px-24 flex justify-between items-center text-white fixed top-0">
            {/* Logo */}
            <div className="flex gap-4 items-center">
                <img
                    src="src/assets/Logo White.png"
                    alt="Logo"
                    className="w-8 h-auto"
                />
                <div className="text-2xl font-bold">Eventaris</div>
            </div>

            {isLoggedIn ? (
                <>
                    {/* Menu items */}
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

                    {/* Profile */}
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-green1">
                        R
                    </div>
                </>
            ) : (
                <div className="flex gap-4 items-center">
                    <PrimaryBtn />
                    <SecondaryBtn />
                </div>
            )}
        </div>
    );
};

export default Navbar;
