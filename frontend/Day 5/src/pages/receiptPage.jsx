// CartPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // Sample data for selected services (replace with your actual data)
  const selectedServices = [
    {
      id: 1,
      name: 'Web Development',
      image: 'web-development.jpg', // Replace with your image path
      price: 500, // Replace with the actual price
    },
    {
      id: 2,
      name: 'Graphic Design',
      image: 'graphic-design.jpg', // Replace with your image path
      price: 300, // Replace with the actual price
    },
    // Add more services as needed
  ];

  return (
    <div className="cart-container">
      <h1>Your Selected Services</h1>
      <div className="service-cards">
        {selectedServices.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>${service.price}</p>
          </div>
        ))}
      </div>
      <Link to="/paymentProcess"><button className="checkout-button">Checkout</button></Link>
      <style >{`
        .cart-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .service-cards {
          display: flex;
          flex-wrap: wrap;
        }

        .service-card {
          flex: 0 0 calc(50% - 10px);
          border: 1px solid #ccc;
          border-radius: 5px;
          margin: 5px;
          padding: 10px;
          box-sizing: border-box;
          text-align: center;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        h3 {
          font-size: 18px;
          margin: 10px 0;
        }

        p {
          font-size: 16px;
          margin: 5px 0;
        }

        .checkout-button {
          background-color: #3f51b5;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default CartPage;
