import React from "react";
import ProductImage from "./ProductImage";
import CategoryBar from "./CategoryBar";
const HeadProductCard = ({image, cate}) => {
    return (
        <div className="relative">
            <CategoryBar cate={cate}/>
            <ProductImage image={image}/>
        </div>
    )
}

export default HeadProductCard;