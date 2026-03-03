import axios from "axios";
import { Link, useNavigate } from "react-router";
import "./Header.css";
import { useRef } from "react";

export default function Header({ cart, setProducts, fetchAllProducts }) {
    const searchRef = useRef(null);
    const navigate = useNavigate();
    let totalQuantity = 0;

    async function searchProduct() {
        navigate("/");
        const response = await axios.get(
            `/api/products/?search=${searchRef.current.value}`,
        );
        setProducts(response.data);
    }

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link" onClick={fetchAllProducts}>
                    <img className="logo" src="images/logo-white.png" />
                    <img
                        className="mobile-logo"
                        src="images/mobile-logo-white.png"
                    />
                </Link>
            </div>

            <div className="middle-section">
                <input
                    ref={searchRef}
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                />

                <button className="search-button" onClick={searchProduct}>
                    <img
                        className="search-icon"
                        src="images/icons/search-icon.png"
                    />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img
                        className="cart-icon"
                        src="images/icons/cart-icon.png"
                    />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    );
}
