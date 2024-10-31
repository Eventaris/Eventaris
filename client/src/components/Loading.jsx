import React from "react";

const Loading = () => {
    return (
        <div className="relative">
            <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
            <div
                className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-cyan-500 border-t-transparent">
            </div>
        </div>
    );
};

export default Loading
