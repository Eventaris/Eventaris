import React, { useEffect, useState } from "react";
import ProductCard from "../components/card/ProductCard";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "flowbite-react";
import Loading from "../components/Loading";
const DashboardApp = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalProducts, setTotalProducts] = useState(0);
    const hasMoreProducts = products.length < totalProducts;

    useEffect(() => {
        fetch("http://localhost:5000/dashboard", {
            method: "GET",
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((errorData) => {
                        throw new Error(errorData.message || "Terjadi kesalahan");
                    });
                }
                return response.json();
            })
            .then((data) => {
                setUser(data.user);
            })
            .catch((error) => {
                //alert(`Error: ${error.message}`);
                sessionStorage.setItem("errorMessage", error.message);
                window.location.href = "/login";
            });
        loadProducts();
        setPage(prevPage => prevPage + 1);
    }, []);

    const loadProducts = () => {
        setLoading(true);

        fetch("http://localhost:5000/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ page, limit: 20 }), // Mengirim data halaman melalui body
        })
            .then(response => response.json())
            .then(data => {
                setProducts(prevProducts => [...prevProducts, ...data.products]); // Menambahkan data baru ke produk yang ada
                setTotalProducts(data.totalProducts);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading products:', error);
                setLoading(false);
            });
    };

    // Panggil loadProducts pertama kali saat tombol "Muat Lebih Banyak" diklik
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
        loadProducts();
    };


    if (user) {
        return (
            <div>

                <Navbar isLoggedIn={true} />

                <div className="pt-20 flex flex-col px-24 ">
                    <div className="h-80 py-1 ">
                        <Carousel>
                            <img src="src/assets/promotion-banner/Banner1.png" alt="..." className="h-full w-full" />
                            <img src="src/assets/promotion-banner/Banner2.png" alt="..." className="h-full w-full" />
                        </Carousel>
                    </div>
                    <div className=" grid  md:grid-cols-4  gap-10 py-10">
                        {products.map((product, index) => (
                            <ProductCard key={index} harga={product.harga} count={100000} cate={product.category} image={"https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} link={"/detail/" + product.id} title={product.nama} desc={product.deskripsi} />
                        ))}
                    </div>
                    {hasMoreProducts && (
                        <button onClick={handleLoadMore} disabled={loading}>
                            {loading ? (<Loading />) : 'Muat Lebih Banyak'}
                        </button>
                    )}
                </div>
                {loading ? (<Loading />) : (
                    <Footer />
                )}

            </div>
        )
    }
}

export default DashboardApp