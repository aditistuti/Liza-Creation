import React, { useState } from 'react';
import Product from '../components/Product'; 


const initialProducts = [
    { id: 1, name: 'Dress', price: 2000, image: '/images/dress1.jpg' },
    { id: 3, name: 'Lehenga', price: 5000, image: '/images/lehanga.webp' },
    { id: 4, name: 'Kurti', price: 1200, image: '/images/kurti.webp' },
    { id: 5, name: 'Saree', price: 3000, image: '/images/dress5.webp' },
    { id: 6, name: 'Lehenga Choli', price: 6000, image: '/images/dress6.jpeg' },
    { id: 7, name: 'Salwar Kameez', price: 2500, image: '/images/dress7.jpeg' },
    { id: 8, name: 'Anarkali Suit', price: 3500, image: '/images/dress8.webp' },
    { id: 9, name: 'Patiala Suit', price: 2800, image: '/images/dress9.jpeg' },
    { id: 10, name: 'Dupatta', price: 500, image: '/images/dress10.jpeg' },
    { id: 12, name: 'Kurta', price: 1500, image: '/images/dress12.jpeg' },
    { id: 13, name: 'Churidar', price: 1000, image: '/images/dress13.webp' },
    { id: 14, name: 'Chaniya Choli', price: 4000, image: '/images/dress14.jpeg' },
    { id: 15, name: 'Kanjivaram Saree', price: 8000, image: '/images/dress15.webp' },
    { id: 16, name: 'Banarasi Saree', price: 7500, image: '/images/dress16.jpeg' },
    { id: 17, name: 'Pattu Pavadai', price: 2500, image: '/images/dress171.jpeg' },
    { id: 18, name: 'Jodhpuri Suit', price: 6500, image: '/images/dress18.webp' },
    { id: 19, name: 'Mekhela Chador', price: 3500, image: '/images/dress19.webp' },
    { id: 20, name: 'Rajasthani Ghagra Choli', price: 5500, image: '/images/dress20.jpeg' }
];

function Products({ wishlist, setWishlist }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory,setSelectedCategory] =useState('');
    const [selectedPrice, setSelectedPrice] = useState('');



    const filteredProducts = initialProducts.filter(product =>{
        const search=product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const category= selectedCategory?product.name==selectedCategory:true;
        const price= selectedPrice?(selectedPrice==='under 3000'?product.price<=3000 : product.price>3000 && product.price<=5000):true;
         return search && category && price;
    }
    );

   
    const addtowishlist = (product) => {
        if (!wishlist.find(item => item.id === product.id)) {
            setWishlist([...wishlist, product]);
            alert(`${product.name} added to wishlist!`);
        } else {
            alert(`${product.name} is already in the wishlist!`);
        }
    };

    return (
        <div className="products-page">
            <h2>Our Products</h2>


            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />
             
            <div className='filters'>
                <select onChange={(e)=>{setSelectedCategory(e.target.value)}} value={selectedCategory}>
                <option value="">Select Category</option>
                    <option value="Saree">Saree</option>
                    <option value="Lehenga">Lehenga</option>
                    <option value="Kurti">Kurti</option>
                    <option value="Dress">Dress</option>
                </select>
                <select onChange={(e)=>{setSelectedPrice(e.target.value)}} value={selectedPrice}>
                <option value="">Select Price Range</option>
                    <option value="under 3000">Under ₹3000</option>
                    <option value="3000to5000">₹3000 to ₹5000</option>
                </select>
            </div>
  
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        onaddtowishlist={addtowishlist}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
