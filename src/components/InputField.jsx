import React from "react";

const InputField = ({value, onchange, name}) => {
    return(
        <div>
            <label htmlFor="Name">Name</label>
            <input type="text" name={name} id={name} value={value} onChange={onchange}/>
        </div>
    )
}

export default InputField;