// PaymentProcessPage.jsx
import { useState } from 'react';
import '../assets/css/PaymentProcessPage.css'
import { Link } from 'react-router-dom';

function PaymentProcessPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating payment processing
    setTimeout(() => {
      // Here, you would typically send the payment information to a server for processing
      // and wait for a response indicating success or failure.
      // For demonstration purposes, we'll simply show a confirmation message.
      setShowConfirmation(true);
    }, 2000); // Simulating 2 seconds of processing time
  };

  return (
    <div className="paymentProcessContainer">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          className="paymentProcessInput"
        />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
          className="paymentProcessInput"
        />
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
          className="paymentProcessInput"
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="paymentProcessInput"
        />
        <input type="submit" value="Make Payment" className="paymentProcessSubmit" />
      </form>
      {showConfirmation && (
        <div className="paymentProcessConfirmation">
          <h3>Payment Confirmation</h3>
          <p>
            Payment of ${amount} made successfully with card ending in {cardNumber.slice(-4)}.
          </p>
          <Link to="/"><button style={{fontSize:"20px",backgroundColor:"grey",textDecoration:"none"}}>Go back</button></Link>
        </div>
      )}
    </div>
  );
}

export default PaymentProcessPage;
