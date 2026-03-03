import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import formatProductPrice from "../../../../utility/formatProductPrice";
import DeliveryOptions from "./DeliveryOptions";

export default function CartItem({
    deliveryOptions,
    selectedDeliveryOption,
    cartItem,
    loadCart,
}) {
    const [isUpdating, setIsUpdating] = useState(false);
    let quantity = 0;

    return (
        <div key={cartItem.id} className="cart-item-container">
            <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D",
                )}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">{cartItem.product.name}</div>
                    <div className="product-price">
                        ${formatProductPrice(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity:{" "}
                            <span className="quantity-label">
                                {cartItem.quantity}
                            </span>
                        </span>
                        {!isUpdating && (
                            <span
                                className="update-quantity-link link-primary"
                                onClick={() => {
                                    setIsUpdating(true);
                                }}
                            >
                                Update
                            </span>
                        )}
                        {isUpdating && (
                            <>
                                <select
                                    onChange={(event) => {
                                        quantity = event.target.value;
                                        console.log(quantity);
                                    }}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <span
                                    className="update-quantity-link link-primary"
                                    onClick={async () => {
                                        setIsUpdating(false);
                                        await axios.put(
                                            `/api/cart-items/${cartItem.product.id}`,
                                            {
                                                productId: cartItem.product.id,
                                                quantity: Number(quantity)
                                            },
                                        );
                                        await loadCart();
                                    }}
                                >
                                    Done
                                </span>
                            </>
                        )}
                        <span
                            className="delete-quantity-link link-primary"
                            onClick={async () => {
                                await axios.delete(
                                    `/api/cart-items/${cartItem.product.id}`,
                                );
                                await loadCart();
                            }}
                        >
                            Delete
                        </span>
                    </div>
                </div>

                <DeliveryOptions
                    deliveryOptions={deliveryOptions}
                    cartItem={cartItem}
                    loadCart={loadCart}
                />
            </div>
        </div>
    );
}
