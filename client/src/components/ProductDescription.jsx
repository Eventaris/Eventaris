import React from "react";

const ProductDescription = ({ title, desc, harga }) => {
    return (
        <div className="px-6 py-4 mb-auto">
            <p
                className="font-medium text-lg  hover:text-green1 transition duration-300 ease-in-out inline-block mb-2">{title}
            </p>
            <p className="text-gray-500 text-sm">
                {desc}
            </p>
            <p className="font-bold text-right">
                Rp. {harga.toLocaleString('id-ID')}
            </p>
        </div>
    )
}

export default ProductDescription;