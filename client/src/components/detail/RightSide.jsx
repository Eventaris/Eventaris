import React from "react";

const RightSide = ({ nama, kategori, dekripsi, harga }) => {
    return (
        <div className="ms-7 flex flex-col w-[55%]">
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
            <div className="flex justify-end items-end mt-auto mb-10">
                <button
                    className="bg-green5 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-green2 "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default RightSide;