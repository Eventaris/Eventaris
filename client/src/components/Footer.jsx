import React from "react";

const Footer = () => {
    return (
        <div className="px-24 h-40 bg-gradient-to-r from-green1 to-green2 text-white flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <img
                        src="src/assets/Logo White.png"
                        alt="Logo"
                        className="w-8 h-auto"
                    />
                    <div className="text-2xl font-bold">Eventaris</div>
                </div>
                <p>2024 © Copyright</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Contact Us</p>
                <div className="flex gap-4">
                    <a href="#"><img src="src/assets/footer-icons/Instagram.svg" alt="" className="w-6 h-6"/></a>
                    <a href="#"><img src="src/assets/footer-icons/Linkedin.svg" alt="" className="w-6 h-6"/></a>
                    <a href="#"><img src="src/assets/footer-icons/Github.svg" alt="" className="w-6 h-6"/></a>
                    <a href="#" className="flex gap-2">
                        <img src="src/assets/footer-icons/Mail.svg" alt="" className="w-6 h-6"/>
                        <p>eventaris@gmail.com</p>
                    </a>
                    <a href="#" className="flex gap-2">
                        <img src="src/assets/footer-icons/Whatsapp.svg" alt="" className="w-6 h-6"/>
                        <p>08123456789</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
