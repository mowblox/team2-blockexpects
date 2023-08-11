import React, { useState } from 'react';
import './creatShiment.css'; // Import your CSS file for styling

const SimpleForm = () => {
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [product, setProduct] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action you want with the form data here
    console.log('Form submitted:', { firstName, surName, product });
  };

  return (
    <div className="simple-form-container">
      <h2>Buy Product Form</h2>
      <form className="simple-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surName">Surname:</label>
          <input
            type="text"
            id="surName"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Product to Buy:</label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buy Now</button>
      </form>
    </div>
  );
};

export default SimpleForm;
