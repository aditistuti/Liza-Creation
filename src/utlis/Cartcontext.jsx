import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!cart.find(item => item.id === product.id)) {
            setCart([...cart, product]);
            alert(`${product.name} added to cart!`);
        } else {
            alert(`${product.name} is already in the cart!`);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
