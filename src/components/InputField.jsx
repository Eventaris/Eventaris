import React from "react";

const InputField = ({style,value, onchange, name, type}) => {
    return(
        <div>
            <span class="block text-sm font-medium text-slate-700 mt-3">{name}</span>
            <input className={style} placeholder={name} type={type} name={name} id={name} value={value} onChange={onchange}/>
        </div>
    )
}

export default InputField;