import React from "react";

const ProductImage = ({ image, link }) => {
    return (
        <div>
            <a href={link}>
                <img className="w-full" src={image} alt="Product-Img" />
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
    )
}

export default ProductImage;