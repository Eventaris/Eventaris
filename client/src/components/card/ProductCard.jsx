import React from "react";
import HeadProductCard from "../HeadProductCard";
import ProductDescription from "../ProductDescription";
import FooterCard from "../FooterCard";
const ProductCard = ({ link, desc, title, image, cate, count }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-xl flex flex-col">
            <HeadProductCard link={link} cate={cate} image={image}/>
            <ProductDescription title={title} desc={desc} link={link}/>
            <FooterCard count={count}/>
        </div>
    )
}

export default ProductCard;