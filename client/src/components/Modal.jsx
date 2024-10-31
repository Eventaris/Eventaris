import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-lg font-bold">Berhasil</h2>
                <p className="mt-2">{message}</p>
                <Link to={'/login'}>
                    <button
                        className="mt-4 w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
                        onClick={onClose}
                    >
                        Konfirmasi
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Modal