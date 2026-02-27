import axios from "axios";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/home-page/HomePage";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("/api/cart-items?expand=product").then((response) => {
            setCart(response.data);
        });
    }, []);

    return (
        <Routes>
            <Route index element={<HomePage cart={cart} setCart={setCart}/>} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart}/>} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    );
}

export default App;
