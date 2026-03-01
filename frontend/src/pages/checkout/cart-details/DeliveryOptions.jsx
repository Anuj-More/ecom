import axios from "axios";
import dayjs from "dayjs";
import formatProductPrice from "../../../utility/formatProductPrice";

export default function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                console.log(deliveryOption)
                let priceString = "FREE Shipping";
                if (deliveryOption.priceCents > 0) {
                    priceString = `$${formatProductPrice(deliveryOption.priceCents)} - Shipping`;
                }
                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input
                            onChange={async(event) => {
                                await axios.put(`/api/cart-items/${cartItem.product.id}`, {
                                    productId: cartItem.product.id,
                                    deliveryOptionId: deliveryOption.id
                                });
                                await loadCart();
                            }}
                            type="radio"
                            className="delivery-option-input"
                            checked={
                                deliveryOption.id === cartItem.deliveryOptionId
                            }
                            name={`delivery-option-${cartItem.id}`}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(
                                    deliveryOption.estimatedDeliveryTimeMs,
                                ).format("dddd, MMMM D")}
                            </div>
                            <div className="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
