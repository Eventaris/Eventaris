import React, {useEffect, useState } from "react";
const DasboardApp = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
    fetch("http://localhost:5000/dasboard", {
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
    },[]);
    if (user) {
        return (
            <div>
                <h1>Hello {user.nama} This Is Main Page After Login</h1>
            </div>
        )
    }
}

export default DasboardApp