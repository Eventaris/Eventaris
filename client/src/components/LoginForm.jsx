import React from "react";
import InputField from "./InputField";
import LoginOrRegist from "../components/LoginOrRegist";
import Loading from "./Loading";
const style="mt-1 block w-96 px-1 py-1 bg-white border border-[#0E738C] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#0E738C] focus:ring-1 focus:ring-[#0E738C]"
class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            pass: '',
            isLoading: false
        }

        this.onUsernameChangeEventHandler = this.onUsernameChangeEventHandler.bind(this);
        this.onPassChangeEventHandler = this.onPassChangeEventHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onUsernameChangeEventHandler(event){
        this.setState(()=>{
            return{
                username: event.target.value
            }
        })
    }
    onPassChangeEventHandler(event){
        this.setState(()=>{
            return{
                pass: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault()
        this.setState({isLoading: true})
    }

    render(){
        return(
            <div className="Login-form">
                <form onSubmit={this.onSubmitHandler}>
                <InputField
                style={style + "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"}
                type={"email"}
                name={"Email"}
                value={this.state.usernamne}
                onchange={this.onUsernameChangeEventHandler}>

                </InputField>
             
                <InputField 
                style={style}
                type={"password"} 
                name={"Password"} 
                value={this.state.pass} 
                onchange={this.onPassChangeEventHandler}>

                </InputField>

                <button className="hover:bg-green2 hover:brightness-110 rounded-md bg-[#07A0A8] w-96 py-[0.5rem] text-white text-center mt-10 font-inter text-[13px]" type="submit">Log In</button>
                </form>
                <LoginOrRegist text="Don’t have an account?  " sub="Create account" target="/registrasi"/>

                {this.state.isLoading && (
                <Loading/>
                )}

            </div>
        )
    }
}
export default LoginForm;