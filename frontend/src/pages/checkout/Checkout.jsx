import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import formatProductPrice from "../../utility/formatProductPrice";
import "./Checkout.css";
import CartDetails from "./cart-details/CartDetails";
import PaymentSummary from "./payment-summary/PaymentSummary";

export default function Checkout({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setpaymentSummary] = useState(null);

    useEffect(() => {
        axios
            .get("/api/delivery-options?expand=estimatedDeliveryTime")
            .then((response) => {
                setDeliveryOptions(response.data);
            });

        axios.get("/api/payment-summary").then((response) => {
            setpaymentSummary(response.data);
        });
    }, []);

    return (
        <>
            <title>Checkout</title>
            <Header cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <CartDetails
                        deliveryOptions={deliveryOptions}
                        cart={cart}
                        loadCart={loadCart}
                    />

                    {paymentSummary && (
                        <PaymentSummary paymentSummary={paymentSummary} />
                    )}
                </div>
            </div>
        </>
    );
}
