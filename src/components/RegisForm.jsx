import React from "react";
import InputField from "./InputField";

class RegisForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            nama: '',
            email: '',
            pass: '',
            phone: '',
            emailError: ''
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
        const inputEmail = event.target.value;
        this.setState(()=>{
            return{
                email: inputEmail
            }
        })

        if(!inputEmail.includes('@')){
            this.setState(()=>{
                return{
                    emailError: 'Input Email Tidak Sesuai'
                }
            })
        }else{
            this.setState(()=>{
                return{
                    emailError: ''
                }
            })
        }
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
                <InputField type={"text"} name={"Name"} value={this.state.nama} onchange={this.onNameChangeEventHandler}></InputField>
                <InputField type={"email"} name={"Email"} value={this.state.email} onchange={this.onEmailChangeEventHandler}></InputField>
                {this.state.emailError!='' && (
                    <div style={{ color: 'red' }}>{this.state.emailError}</div>
                )}
                <InputField type={"password"} name={"Password"} value={this.state.pass} onchange={this.onPassChangeEventHandler}></InputField>
                <InputField type={"text"} name={"Phone"} value={this.state.phone} onchange={this.onPhoneChangeEventHandler}></InputField>
            </div>
        )
    }
}
export default RegisForm;