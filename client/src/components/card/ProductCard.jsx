import React from "react";
import HeadProductCard from "../HeadProductCard";
import ProductDescription from "../ProductDescription";
import FooterCard from "../FooterCard";
const ProductCard = ({ link, desc, title, image, cate, count, harga }) => {
    return (
        <a href={link}>
        <div className="rounded-lg overflow-hidden shadow-xl flex flex-col">
            <HeadProductCard cate={cate} image={image}/>
            <ProductDescription title={title} desc={desc} harga={harga}/>
            <FooterCard count={count}/>
        </div>
        </a>
    )
}

export default ProductCard;