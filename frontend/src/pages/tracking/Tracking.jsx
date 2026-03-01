import { Link, useParams } from "react-router";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import "./Tracking.css";
import dayjs from "dayjs";

export default function Tracking({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `/api/orders/${orderId}?expand=products`,
            );
            setOrder(response.data);
            console.log(response.data);
        })();
    }, [orderId]);

    if (!order) {
        return null;
    }

    const product = order.products.find((product) => {
        return product.productId === productId;
    });

    console.log(product);

    return (
        <>
            <Header cart={cart} />
            <div className="tracking-page">
                <div className="order-tracking">
                    <Link
                        className="back-to-orders-link link-primary"
                        to="/orders"
                    >
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(product.estimatedDeliveryTimeMs).format('dddd MMMM, D')}
                    </div>

                    <div className="product-info">
                        {product.product.name}
                    </div>

                    <div className="product-info">Quantity: {product.quantity}</div>

                    <img
                        className="product-image"
                        src={`${product.product.image}`}
                    />

                    <div className="progress-labels-container">
                        <div className="progress-label">Preparing</div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">Delivered</div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
