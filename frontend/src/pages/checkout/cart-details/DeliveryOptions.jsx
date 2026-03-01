import dayjs from "dayjs";
import formatProductPrice from "../../../utility/formatProductPrice";

export default function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                let priceString = "FREE Shipping";
                if (deliveryOption.priceCents > 0) {
                    priceString = `$${formatProductPrice(deliveryOption.priceCents)} - Shipping`;
                }
                return (
                    <div key={deliveryOption.id} className="delivery-option">
                        <input
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
