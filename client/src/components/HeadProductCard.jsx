import React from "react";
import ProductImage from "./ProductImage";
import CategoryBar from "./CategoryBar";
const HeadProductCard = ({image, link, cate}) => {
    return (
        <div className="relative">
            <CategoryBar cate={cate}/>
            <ProductImage image={image} link={link}/>
        </div>
    )
}

export default HeadProductCard;