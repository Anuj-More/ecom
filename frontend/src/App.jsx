import HomePage from "./pages/home-page/HomePage";
import { Route, Routes } from "react-router";
import "./App.css";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";

function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    );
}

export default App;
