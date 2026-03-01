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

    async function loadCart() {
        const response = await axios.get("/api/cart-items?expand=product");
        setCart(response.data);
    }

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <Routes>
            <Route index element={<HomePage cart={cart} setCart={setCart} loadCart={loadCart} />} />
            <Route
                path="/checkout"
                element={<Checkout cart={cart} setCart={setCart} />}
            />
            <Route path="/orders" element={<Orders cart={cart} />} />
            <Route
                path="/tracking/:orderId/:productId"
                element={<Tracking cart={cart} />}
            />
        </Routes>
    );
}

export default App;
