import React, { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "flowbite-react";
const DashboardApp = () => {
    const [user, setUser] = useState(null);
    // useEffect(() => {
    //     fetch("http://localhost:5000/dashboard", {
    //         method: "GET",
    //         credentials: 'include',
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 return response.json().then((errorData) => {
    //                     throw new Error(errorData.message || "Terjadi kesalahan");
    //                 });
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setUser(data.user);
    //         })
    //         .catch((error) => {
    //             //alert(`Error: ${error.message}`);
    //             sessionStorage.setItem("errorMessage", error.message);
    //             window.location.href = "/login";
    //         });
    // }, []);

    //if (user) {
    return (
        <div>
            <Navbar isLoggedIn={true} />
            <div className="pt-20 flex flex-col px-24 ">
                <div className="h-80 py-1 ">
                    <Carousel>
                        <img src="src/assets/promotion-banner/Banner1.png" alt="..." className="h-full w-full"/>
                        <img src="src/assets/promotion-banner/Banner2.png" alt="..." className="h-full w-full"/>
                    </Carousel>
                </div>
                <div className=" grid  md:grid-cols-4  gap-10 py-10">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <ProductCard key={index} harga={"100.000"} count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
    //}
}

export default DashboardApp