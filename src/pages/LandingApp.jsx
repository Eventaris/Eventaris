import React from "react";
import Navbar from "../components/Navbar";
import CtaBtn from "../components/CtaBtn";
import CategoryCard from "../components/CategoryCard";

const LandingApp = () => {
    return (
        <div>
            <Navbar />
            <div
                className="bg-blue-700 h-screen bg-cover bg-center pt-16 px-24 flex items-center"
                style={{ backgroundImage: "url('src/assets/Hero Banner.png')" }}
            >
                <div className="w-1/2 inline-flex flex-col justify-start items-start gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-green2 text-5xl font-bold">
                            Your Trusted Partner for Unforgottable Events
                        </h1>
                        <p className="text-white/80">
                            From weddings to corporate events, we provide a wide
                            range of high-quality items to make your occasion
                            truly special. Let us help you create lasting
                            memories with ease and confidence.
                        </p>
                    </div>
                    <CtaBtn />
                </div>
            </div>
            <div className="h-96 flex flex-col justify-center items-center gap-8">
                <div className="text-center">
                    <h1 className="text-green2 text-4xl font-bold">
                        Browse by Category
                    </h1>
                    <p className="text-[#667085]">
                        Find your needs by categories
                    </p>
                </div>
                <div className="flex gap-12">
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <CategoryCard key={index} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default LandingApp;
