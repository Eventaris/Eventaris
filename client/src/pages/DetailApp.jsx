import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailApp = () => {
  const { id } = useParams(); // Mendapatkan ID produk dari URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Produk tidak ditemukan!");
        }
        const data = await response.json();
        setProduct(data); // Simpan data produk
        setLoading(false); // Set loading false setelah data diterima
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct(); // Memanggil fungsi fetch saat komponen mount
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.nama}</h1>
      <p className="text-gray-700">{product.category}</p>
      <p className="my-4">{product.deskripsi}</p>
      <p className="text-xl font-semibold">Harga: Rp {product.harga.toLocaleString('id-ID')}</p>
    </div>
  );
};

export default DetailApp;