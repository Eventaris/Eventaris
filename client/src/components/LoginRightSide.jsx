import React from "react";
import LoginForm from "./LoginForm";
import HeadForm from "./HeadForm";
const LoginRightSide = () => {
    return(
        <div className="w-[55%] flex flex-col justify-center items-center">
            <HeadForm syle={"mb-5"} judul={"Welcome Back!"} sub={"Please Enter Your Data To Login"}/>
            <LoginForm/>
        </div>
    )
}

export default LoginRightSide;