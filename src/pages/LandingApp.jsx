import React from "react";
import Navbar from "../components/Navbar";
import CtaBtn from "../components/CtaBtn";

const LandingApp = () => {
    return (
        <div>
            <Navbar />
            <div
                className="bg-blue-700 h-screen bg-cover bg-center pt-16 px-24"
                style={{ backgroundImage: "url('src/assets/Hero Banner.png')" }}
            >
                <div className="w-1/2 inline-flex flex-col">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-green2 text-4xl font-bold">
                            Your Trusted Partner for Unforgottable Events
                        </h1>
                        <p className="text-white">
                            From weddings to corporate events, we provide a wide
                            range of high-quality items to make your occasion
                            truly special. Let us help you create lasting
                            memories with ease and confidence.
                        </p>
                    </div>
                    <CtaBtn />
                </div>
            </div>
        </div>
    );
};

export default LandingApp;
