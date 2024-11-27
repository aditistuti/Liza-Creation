import React, { useEffect, useState } from 'react';
import '../assets/Home.css';  // Assuming your styles will go in this file

function Home() {
  const reviews = [
    {
      text: `"Absolutely love the collection! Perfect blend of tradition and modern style."`,
      author: `- Aarti Sharma`
    },
    {
      text: `"Great quality and excellent service. Will definitely shop here again!"`,
      author: `- Priya Mehta`
    },
    {
      text: `"The clothes are stunning and the customer support is top-notch!"`,
      author: `- Ritu Yadav`
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h2>Welcome to Liza Creation Boutique</h2>
          <p>Explore our unique collection of ethnic and contemporary wear!</p>
        </div>
        <div className="home-image">
          <img src="/images/home1.png" alt="home" />
        </div>
      </div>

      <div className="reviews">
        <h3>What Our Customers Say</h3>
        <div className="review-box">
          <div className="review-text">
            <p>{reviews[currentReview].text}</p>
          </div>
          <div className="review-author">
            <p>{reviews[currentReview].author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
