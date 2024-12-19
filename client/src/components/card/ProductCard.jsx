import React from "react";
import HeadProductCard from "../HeadProductCard";
import ProductDescription from "../ProductDescription";
import FooterCard from "../FooterCard";
const ProductCard = ({ link, desc, title, image, cate, count, harga }) => {
    return( 
        <div className="rounded-lg overflow-hidden shadow-xl flex flex-col cursor-pointer" onClick={() => window.location.href = link}>
            <HeadProductCard cate={cate} image={image}/>
            <ProductDescription title={title} desc={desc} harga={harga}/>
            <FooterCard count={count}/>
        </div>
    )
}

export default ProductCard;