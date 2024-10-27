import React from "react";
import RegisForm from "./RegisForm";
import HeadForm from "./HeadForm";
class RegisRightSide extends React.Component{
    constructor(props){
        super(props)

        this.registerUserHandler = this.registerUserHandler.bind(this)
    }

    registerUserHandler(user) {
        // Mengirim data ke backend
        fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("User registered successfully:", data);
            console.log(user)
            alert("Registrasi berhasil!");
          })
          .catch((error) => {
            console.error("Error registering user:", error);
            alert("Registrasi gagal. Silakan coba lagi.");
          });
      }

    render(){
    return(
        <div className="w-[55%] flex flex-col justify-center items-center">
            <HeadForm syle={"mb-5"} judul={"Welcome To Eventaris"} sub={"Please Enter Your Data To Create Account"}/>
            <RegisForm addUser={this.registerUserHandler}/>
        </div>
    )
    }
}

export default RegisRightSide;