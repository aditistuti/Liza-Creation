import React from 'react';
import { useCart } from '../utlis/Cartcontext';
import "../assets/wishlist.css";
 function Wishlist({wishlist, setWishlist}){
    const { addToCart } = useCart();

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };
      return(
        <div className='wishlist-page'>
            <h2>
                Wishlist
            </h2>
            {wishlist.length>0?(
                <ul>
                    {wishlist.map((item)=>(
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                                <p>Price: ₹{item.price}</p>
                                <div className="wishlist-buttons">
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromWishlist(item.id)}
                                >
                                    ❌ Remove
                                </button>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            ):(
                <p>No item in wishlist</p>
            )}
        </div>
      )
 }
  export default Wishlist