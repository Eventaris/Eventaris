import React from "react";

const InputField = ({value, onchange, name, type}) => {
    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} id={name} value={value} onChange={onchange}/>
        </div>
    )
}

export default InputField;