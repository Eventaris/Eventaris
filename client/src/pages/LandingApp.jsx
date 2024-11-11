import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CtaBtn from "../components/CtaBtn";
import CategoryCard from "../components/CategoryCard";
import StepCard from "../components/StepCard";
import Footer from "../components/Footer";

const LandingApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} />
            {/* Hero Section */}
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

            {/* Category Section */}
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

            {/* Step Section */}
            <div className="px-24 h-screen bg-green3 flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-green2 text-4xl font-bold">
                        How it works?
                    </h1>
                    <p className="text-[#667085]">
                        Just take some easy steps to get wat you need
                    </p>
                </div>
                <div className="flex gap-8">
                    <StepCard />
                    <StepCard />
                    <StepCard />
                </div>
            </div>

            {/* Abot Section */}
            <div className="px-24 h-screen flex justify-between items-center">
                <div className="w-5/12 flex justify-start">
                    <img src="src/assets/about-illustration.png" alt="" />
                </div>
                <div className="w-1/2 flex flex-col gap-4">
                    <h1 className="text-green2 text-4xl font-bold">About</h1>
                    <p className="text-[#667085]">
                        We are a comprehensive platform dedicated to providing
                        everything you need for events or organizational
                        requirements. From weddings and parties to corporate
                        gatherings and organizational needs, we serve as a
                        bridge connecting clients with trusted partners offering
                        high-quality rental items. Our mission is to simplify
                        the process of finding the right products, ensuring that
                        every detail of your event or project is handled with
                        care and professionalism. Let us help you create
                        seamless, successful, and unforgettable experiences.
                    </p>
                </div>
            </div>
            
            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LandingApp;
