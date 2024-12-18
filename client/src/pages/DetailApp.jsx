import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftSide from "../components/detail/LeftSide";
import RightSide from "../components/detail/RightSide";
import Loading from "../components/Loading";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";

const DetailApp = () => {
    const { id } = useParams(); // Mendapatkan ID produk dari URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            fetch(`http://localhost:5000/api/products/${id}`, {
                method: "GET",
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Produk tidak ditemukan!");
                    }
                    return response.json();
                })
                .then(data => {
                    setProduct(data); // Simpan data produk
                })
                .catch(err => {
                    console.error(err); // Tangani kesalahan di sini
                });
        };

        fetchProduct(); // Memanggil fungsi fetch saat komponen mount
    }, [id]);

    if (!product) {
        // Tampilkan pesan loading atau spinner saat data produk sedang diambil
        return (
            <div>
                <Navbar isLoggedIn={true} />
                <Loading/>
            </div>
        );
    }

    return (
        <div>
            <Navbar isLoggedIn={true} />
            <div className="mx-auto p-6 flex flex-row pt-20">
                <LeftSide />
                <RightSide
                    nama={product.nama}
                    kategori={product.category}
                    dekripsi={product.deskripsi}
                    harga={product.harga.toLocaleString('id-ID')}
                />
            </div>
            <Footer />
        </div>
    );
};

export default DetailApp;