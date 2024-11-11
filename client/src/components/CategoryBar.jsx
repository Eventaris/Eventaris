import React from "react";

const CategoryBar = ({ cate }) => {
    return (
        <div className="rounded-lg text-xs absolute top-0 right-0 bg-green5 px-4 py-2 text-white mt-3 mr-3">
            {cate}
        </div>
    )
}

export default CategoryBar;