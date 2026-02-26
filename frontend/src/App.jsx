import HomePage from "./pages/home-page/HomePage";
import { Route, Routes } from "react-router";
import "./App.css";
import Checkout from "./pages/checkout/Checkout";

function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
}

export default App;
