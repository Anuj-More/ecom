import axios from "axios";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import Tracking from "./pages/tracking/Tracking";

function App() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    async function loadCart() {
        const response = await axios.get("/api/cart-items?expand=product");
        setCart(response.data);
    }

    async function fetchAllProducts() {
        axios.get("/api/products").then((response) => {
            setProducts(response.data);
        });
    }

    useEffect(() => {
        loadCart();
        fetchAllProducts();
    }, []);

    return (
        <Routes>
            <Route
                index
                element={
                    <HomePage
                        cart={cart}
                        setCart={setCart}
                        loadCart={loadCart}
                        products={products}
                        setProducts={setProducts}
                    />
                }
            />
            <Route
                path="/checkout"
                element={
                    <Checkout
                        cart={cart}
                        setProducts={setProducts}
                        loadCart={loadCart}
                        fetchAllProducts={fetchAllProducts}
                    />
                }
            />
            <Route
                path="/orders"
                element={
                    <Orders
                        cart={cart}
                        setProducts={setProducts}
                        loadCart={loadCart}
                        fetchAllProducts={fetchAllProducts}
                    />
                }
            />
            <Route
                path="/tracking/:orderId/:productId"
                element={<Tracking cart={cart} setProducts={setProducts} />}
                fetchAllProducts={fetchAllProducts}
            />
        </Routes>
    );
}

export default App;
