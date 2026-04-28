import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/nuqiulogo.png";
import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";
import thankyou from "../assets/successemote.png";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


  function Checkout() {

    const navigate = useNavigate();
    
    const { cart, clearCart } = useCart();
    
    const [status, setStatus] = useState("idle"); 
    // idle | loading | success | error

        const handlePayment = () => {
          setStatus("loading");

          setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
              setStatus("success");

              setTimeout(() => {
                clearCart();
                navigate("/Thankyou");
              }, 1000);
            } else {
              setStatus("error");
        }
      }, 2000);
    };

    if (cart.length === 0) {
      return (
        <div className="checkout">
          <h1>Your cart is empty</h1>
          <button onClick={() => navigate("/")}>
            Go shopping
          </button>
        </div>
      );
    }


    const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
    );

    return (
    <div className="app-container">
      <div className="phone">
              <div className="header">
                  <Header
                      logo={logo}
                      menuIcon={menuIcon}
                      searchIcon={searchIcon}
                      userIcon={userIcon}
                      cartIcon={cartIcon}
                  />
              </div> 

            <div className="content">

            <div className="checkout">

                <h1>Checkout</h1>
                <h2 className="checkout-summary">Review your order</h2>

                  {cart.map(item => (
                    <div key={item.id}>
                      <p>{item.productName}</p>
                      <p>{item.quantity}x</p>
                      <p>{item.price} kr</p>
                    </div>
                  ))}

                <h3>Total: {total} kr</h3>

                
                {status === "idle" && (
                  <button className="pay-btn" onClick={handlePayment}>
                    Pay now
                  </button>
                )}

                {status === "loading" && (
                  <p className="loading">Processing payment...</p>
                )}

                {status === "success" && (
                  <div className="success">
                    <p>Payment successful 🎉</p>
                  </div>
                )}

                {status === "error" && (
                <div className="error">
                  <p>Payment failed ❌</p>
                  <button onClick={() => navigate("/cart")}>
                    Back to cart
                  </button>
                  <button onClick={handlePayment}>
                    Try again
                  </button>
                </div>
                )}
                </div>
                </div>
          <Footer />
        </div>
  </div>
  );
  }

  export default Checkout;
