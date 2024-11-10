import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
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
            <div>
                <h1>Hello {user.nama} This Is Main Page After Login</h1>
                <div classname="relative"><a href="#">
                    <img classname="w-full"
                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains" />
                    <div
                        classname="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                </div>
            </div>
        )
    }
}

export default DashboardApp