import React, { useState } from "react";
import { useCart } from "../utlis/Cartcontext";
import "../assets/cart.css";

const CartPage = () => {
    const { cart, removeFromCart, resetCart } = useCart();
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        address: "",
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    // Calculate total price
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    // Handle form input changes
    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    // Handle order placement
    const handlePlaceOrder = () => {
        if (!userDetails.name || !userDetails.phone || !userDetails.address) {
            alert("Please fill in all contact details!");
            return;
        }
        setOrderPlaced(true);
        resetCart();  // Reset the cart after placing the order
        setUserDetails({
            name: "",
            phone: "",
            address: "",
        });  // Reset user details
    };

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cart.map((product) => (
                            <div key={product.id} className="cart-item">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-info">
                                    <h3>{product.name}</h3>
                                    <p>Price: ₹{product.price}</p>
                                    <button
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-section">
                        <h3>Contact Details</h3>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={userDetails.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <textarea
                                name="address"
                                value={userDetails.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="payment-section">
                            <h3>Payment Option</h3>
                            <p>Cash on Delivery (COD)</p>
                        </div>

                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <p>Total Items: {cart.length}</p>
                            <p>Total Price: ₹{calculateTotal()}</p>
                        </div>

                        <button className="place-order-btn" onClick={handlePlaceOrder}>
                            Place Order
                        </button>
                    </div>
                </div>
            )}

            {orderPlaced && (
                <div className="order-popup">
                    <div className="popup-content">
                        <h3>Order Placed Successfully!</h3>
                        <p>Thank you for shopping with us, {userDetails.name}.</p>
                        <p>We will contact you shortly at {userDetails.phone}.</p>
                        <p>Delivery Address: {userDetails.address}</p>
                        <button onClick={() => setOrderPlaced(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
