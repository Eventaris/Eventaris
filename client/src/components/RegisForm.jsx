import React from "react";
import InputField from "./InputField";
import LoginOrRegist from "../components/LoginOrRegist";
const style="mt-1 block w-96 px-1 py-1 bg-white border border-[#0E738C] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#0E738C] focus:ring-1 focus:ring-[#0E738C]"
class RegisForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nama: '',
            email: '',
            password: '',
            phone: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPassChangeEventHandler = this.onPassChangeEventHandler.bind(this);
        this.onPhoneChangeEventHandler = this.onPhoneChangeEventHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onNameChangeEventHandler(event){
        this.setState(()=>{
            return{
                nama: event.target.value
            }
        })
    }
    onEmailChangeEventHandler(event){
        this.setState(()=>{
            return{
                email: event.target.value
            }
        })
    }
    onPassChangeEventHandler(event){
        this.setState(()=>{
            return{
                password: event.target.value
            }
        })
    }
    onPhoneChangeEventHandler(event){
        this.setState(()=>{
            return{
                phone: event.target.value
            }
        })
    }
    onSubmitHandler(event) {
        event.preventDefault();

        const user = {
            nama: this.state.nama,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
        };

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
            <div className="regis-form">
                <form onSubmit={this.onSubmitHandler}>
                <InputField
                style={style} 
                type={"text"} 
                name={"Name"} 
                value={this.state.nama} 
                onchange={this.onNameChangeEventHandler}>
                
                </InputField>
                
                <InputField
                style={style+"invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"} 
                type={"email"} 
                name={"Email"} 
                value={this.state.email} 
                onchange={this.onEmailChangeEventHandler}>
                {/*Kok warnanya gak bisa berubah ijo fokusnya, malah biru*/}
                </InputField>
             
                <InputField 
                style={style}
                type={"password"} 
                name={"Password"} 
                value={this.state.password} 
                onchange={this.onPassChangeEventHandler}>

                </InputField>

                <InputField 
                style={style}
                type={"text"} 
                name={"Phone"} 
                value={this.state.phone} 
                onchange={this.onPhoneChangeEventHandler}>

                </InputField>
                <button className="hover:bg-green2 hover:brightness-110 rounded-md bg-[#07A0A8] w-96 py-[0.5rem] text-white text-center mt-10 font-inter text-[13px]" type="submit">Sign Up</button>
                </form>
                <LoginOrRegist text="Already have an account? " sub="Login" target="/login"/>
            </div>
        )
    }
}
export default RegisForm;