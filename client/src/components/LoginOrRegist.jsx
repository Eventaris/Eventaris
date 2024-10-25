import React from "react";
import {Link} from "react-router-dom"

const LoginOrRegist = ({text, target, sub}) =>{
    return(
        <div>
        <p className="text-sm text-center mt-5">
            {text}
            <Link className="text-blue-600 underline hover:font-bold" to={target}>
                {sub}
            </Link>
        </p>
        </div>
    )
}

export default LoginOrRegist;