import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router";
import { Fragment } from "react";

export default function OrderProductDetail({ order, product, loadCart }) {
    async function addOneToCart() {
        await axios.post("/api/cart-items", {
            productId: product.productId,
            quantity: 1
        });
        await loadCart();
    }
    return (
        <Fragment>
            <div className="product-image-container">
                <img src={product.product.image} />
            </div>

            <div className="product-details">
                <div className="product-name">{product.product.name}</div>
                <div className="product-delivery-date">
                    Arriving on:{" "}
                    {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
                </div>
                <div className="product-quantity">
                    Quantity: {product.quantity}
                </div>
                <button
                    className="buy-again-button button-primary"
                    onClick={addOneToCart}
                >
                    <img
                        className="buy-again-icon"
                        src="images/icons/buy-again.png"
                    />
                    <span className="buy-again-message">Add to Cart</span>
                </button>
            </div>

            <div className="product-actions">
                <Link to={`/tracking/${order.id}/${product.product.id}`}>
                    <button className="track-package-button button-secondary">
                        Track package
                    </button>
                </Link>
            </div>
        </Fragment>
    );
}
