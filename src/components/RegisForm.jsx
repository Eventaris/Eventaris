import React from "react";
import InputField from "./InputField";
const style="mt-1 block w-96 px-1 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`"
class RegisForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nama: '',
            email: '',
            pass: '',
            phone: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPassChangeEventHandler = this.onPassChangeEventHandler.bind(this);
        this.onPhoneChangeEventHandler = this.onPhoneChangeEventHandler.bind(this);
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
                pass: event.target.value
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

    render(){
        return(
            <div className="regis-form">
                <InputField
                style={style} 
                type={"text"} 
                name={"Name"} 
                value={this.state.nama} 
                onchange={this.onNameChangeEventHandler}>
                
                </InputField>
                
                <InputField
                style={style+"disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"} 
                type={"email"} 
                name={"Email"} 
                value={this.state.email} 
                onchange={this.onEmailChangeEventHandler}>

                </InputField>
             
                <InputField 
                style={style}
                type={"password"} 
                name={"Password"} 
                value={this.state.pass} 
                onchange={this.onPassChangeEventHandler}>

                </InputField>

                <InputField 
                style={style}
                type={"text"} 
                name={"Phone"} 
                value={this.state.phone} 
                onchange={this.onPhoneChangeEventHandler}>

                </InputField>
            </div>
        )
    }
}
export default RegisForm;