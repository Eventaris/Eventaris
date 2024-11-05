import React from "react";
const DasboardApp = () => {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    return(
        <div>
            <h1>Hello {user.nama} This Is Main Page After Login</h1>
        </div>
    )
}

export default DasboardApp