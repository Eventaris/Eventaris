import React from "react";
import InputField from "./InputField";
const style="mt-1 block w-96 px-1 py-1 bg-white border border-[#0E738C] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#0E738C] focus:ring-1 focus:ring-[#0E738C]"
class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            pass: ''
        }

        this.onUsernameChangeEventHandler = this.onUsernameChangeEventHandler.bind(this);
        this.onPassChangeEventHandler = this.onPassChangeEventHandler.bind(this);
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

    render(){
        return(
            <div className="Login-form">
                <form action="submit">
                <InputField
                style={style}
                type={"text"}
                name={"Username"}
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

                <button className="rounded-md bg-[#07A0A8] w-96 py-[5px] text-white text-center mt-10 font-inter text-[13px]" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}
export default LoginForm;