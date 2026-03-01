import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "./../../components/header/Header";
import ProductsGrid from "./ProductsGrid";

export default function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <>
            <title>Ecom</title>
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}
