import React from "react";
import PrimaryBtn from "../btn/PrimaryBtn";
import SecondaryBtn from "../btn/SecondaryBtn";
import SearchBar from "../SearchBar";

const Navbar = ({ isLoggedIn }) => {
    return (
        <div className="z-10 bg-green1 w-full h-16 px-24 flex justify-between items-center text-white fixed top-0">
            {/* Logo */}
            <div className="flex gap-4 items-center cursor-pointer">
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
                    <SearchBar />

                    <div className="flex items-center gap-8">
                        {/* cart */}
                        <button>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 69 67"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:opacity-80"
                            >
                                <path
                                    d="M11.8055 11.9995H66.4067L59.5815 41.5751H18.6307M59.5815 50.6753H20.9057L9.53047 2.89929H2.70532"
                                    stroke="white"
                                    stroke-width="4.5501"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M55.0314 64.3255C57.5444 64.3255 59.5815 62.2884 59.5815 59.7754C59.5815 57.2625 57.5444 55.2253 55.0314 55.2253C52.5185 55.2253 50.4813 57.2625 50.4813 59.7754C50.4813 62.2884 52.5185 64.3255 55.0314 64.3255Z"
                                    stroke="white"
                                    stroke-width="4.5501"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25.4559 64.3255C27.9688 64.3255 30.006 62.2884 30.006 59.7754C30.006 57.2625 27.9688 55.2253 25.4559 55.2253C22.9429 55.2253 20.9058 57.2625 20.9058 59.7754C20.9058 62.2884 22.9429 64.3255 25.4559 64.3255Z"
                                    stroke="white"
                                    stroke-width="4.5501"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>

                        {/* separate */}
                        <svg
                            width="1"
                            height="32"
                            viewBox="0 0 1 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="0.5"
                                y1="2.18557e-08"
                                x2="0.499998"
                                y2="54"
                                stroke="white"
                            />
                        </svg>

                        {/* Profile */}
                        <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-green1">
                            R
                        </button>
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
