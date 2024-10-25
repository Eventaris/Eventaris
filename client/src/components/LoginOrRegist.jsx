import React from "react";
import {Link} from "react-router-dom"

const LoginOrRegist = ({text, target, sub}) =>{
    return(
        <div>
        <p className="text-sm text-center mt-5">
            {text}
            <Link to={target}>
                <a className="text-blue-600 visited:text-purple-600 underline hover:font-bold">{sub}</a>
            </Link>
        </p>
        </div>
    )
}

export default LoginOrRegist;