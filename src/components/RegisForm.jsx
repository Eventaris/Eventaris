import React from "react";
import InputField from "./InputField";
const style="mt-1 block w-96 px-1 py-1 bg-white border border-[#0E738C] rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#0E738C] focus:ring-1 focus:ring-[#0E738C]"
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
                <form action="submit">
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
                value={this.state.pass} 
                onchange={this.onPassChangeEventHandler}>

                </InputField>

                <InputField 
                style={style+"px-"}
                type={"text"} 
                name={"Phone"} 
                value={this.state.phone} 
                onchange={this.onPhoneChangeEventHandler}>

                </InputField>
                <button className="rounded-lg bg-[#07A0A8] w-96 py-1 text-white text-center mt-10" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default RegisForm;