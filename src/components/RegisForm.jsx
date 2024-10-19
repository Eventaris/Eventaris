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
}