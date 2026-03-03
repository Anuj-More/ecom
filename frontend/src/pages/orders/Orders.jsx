import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./Orders.css";
import OrderDetail from "./OrderDetail";

export default function Orders({ cart, loadCart }) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get("/api/orders?expand=products").then((response) => {
            setOrders(response.data);
        });
    }, []);

    return (
        <>
            <title>Orders</title>
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((order) => {
                        return (
                            <OrderDetail
                                key={order.id}
                                order={order}
                                loadCart={loadCart}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
