import React from "react";

const RightSide = ({ nama, kategori, dekripsi, harga }) => {
    return (
        <div className="ms-7">
            <div className="flex flex-row">
                <div>
                    <h1 className="text-3xl font-bold">{nama}</h1>
                    <p className="text-gray-700">{kategori}</p>
                    <p className="text-3xl font-bold my-1 text-green5">{harga}</p>
                </div>
                <div className="ml-auto flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 91 90" fill="none">
                        <rect x="0.177734" width="90" height="90" rx="45" fill="white" />
                        <path d="M40.6849 35.8155L45.1776 21.9885L49.6702 35.8155C50.0719 37.0516 51.2237 37.8884 52.5234 37.8884L67.062 37.8884L55.3 46.434C54.2486 47.1979 53.8086 48.552 54.2102 49.7881L58.7029 63.6151L46.9409 55.0695C45.8895 54.3056 44.4657 54.3056 43.4142 55.0695L31.6523 63.6151L36.1449 49.7881C36.5466 48.552 36.1066 47.1979 35.0551 46.434L23.2932 37.8884L37.8317 37.8884C39.1314 37.8884 40.2833 37.0516 40.6849 35.8155Z" fill="white" stroke="#2B293D" strokeWidth="4" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="0 0 41 50" fill="none">
                        <circle cx="32.9446" cy="7.90944" r="5.90944" stroke="#2B293D" strokeWidth="4" />
                        <circle cx="32.9446" cy="41.805" r="5.90944" stroke="#2B293D" strokeWidth="4" />
                        <circle cx="8.08718" cy="24.8557" r="5.90944" stroke="#2B293D" strokeWidth="4" />
                        <path d="M12.4814 22.7259L29.5602 11.2968" stroke="#2B293D" strokeWidth="4" />
                        <path d="M11.4814 27.1179L29.5602 39.547" stroke="#2B293D" strokeWidth="4" />
                    </svg>
                </div>
            </div>
            <h1 className=" text-3xl font-bold mt-4">Dekripsi</h1>
            <p className="mt-2">{dekripsi}</p>
        </div>
    )
}

export default RightSide;