import dayjs from "dayjs";
import formatProductPrice from "../../utility/formatProductPrice";
import OrderProductDetail from "./OrderProductDetail";

export default function OrderDetail({ order, loadCart }) {
    return (
        <div className="order-container">
            <div className="order-header">
                <div className="order-header-left-section">
                    <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>${formatProductPrice(order.totalCostCents)}</div>
                    </div>
                </div>

                <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                </div>
            </div>

            <div className="order-details-grid">
                {order.products.map((product) => {
                    return (
                        <OrderProductDetail
                            key={product.productId}
                            order={order}
                            product={product}
                            loadCart={loadCart}
                        />
                    );
                })}
            </div>
        </div>
    );
}
