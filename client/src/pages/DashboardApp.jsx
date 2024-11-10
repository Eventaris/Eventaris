import React, { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
const DashboardApp = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/dashboard", {
            method: "GET",
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((errorData) => {
                        throw new Error(errorData.message || "Terjadi kesalahan");
                    });
                }
                return response.json();
            })
            .then((data) => {
                setUser(data.user);
            })
            .catch((error) => {
                //alert(`Error: ${error.message}`);
                sessionStorage.setItem("errorMessage", error.message);
                window.location.href = "/login";
            });
    }, []);

    if (user) {
        return (
            <div className="pt-10">
                <Navbar isLoggedIn={true}/>
                <div className=" grid  md:grid-cols-4  gap-10 p-10">
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                    <ProductCard count={100000} cate={"Sablon"} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"#"} title={"Sablon Annas"} desc={"loreimpus loreimpus loreimpus loreimpusloreimpus loreimpus loreimpus"} />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DashboardApp