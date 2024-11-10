import React from "react";

const ProductDescription = ({ title, desc, link }) => {
    return (
        <div className="px-6 py-4 mb-auto">
            <a href={link}
                className="font-medium text-lg  hover:text-green1 transition duration-300 ease-in-out inline-block mb-2">{title}
            </a>
            <p className="text-gray-500 text-sm">
                {desc}
            </p>
        </div>
    )
}

export default ProductDescription;