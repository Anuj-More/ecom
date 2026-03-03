import CartItem from "./cart-item/CartItem";

export default function CartDetails({ deliveryOptions, cart, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 &&
                cart.map((cartItem) => {
                    const selectedDeliveryOption = deliveryOptions.find(
                        (deliveryOption) => {
                            return (
                                deliveryOption.id === cartItem.deliveryOptionId
                            );
                        },
                    );

                    return (
                        <CartItem
                            key={cartItem.id}
                            deliveryOptions={deliveryOptions}
                            selectedDeliveryOption={selectedDeliveryOption}
                            cartItem={cartItem}
                            loadCart={loadCart}
                        />
                    );
                })}
        </div>
    );
}
