import './App.css';
import { useState } from "react";
import { useCart } from "./context/CartContext";

import rainbowBox from "./assets/rainbowbox.png";
import cart from "./assets/icon/cart.png";

function ProductGrid({ products }) {
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const handleAdd = (product) => {
    addToCart(product);

    setMessage(`${product.productName} added to cart`);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div>

      {/* Toast message */}
      {message && <div className="toast">{message}</div>}

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">

            <div className="image-frame">
              <img src={rainbowBox} className="frame-img" alt="frame" />

              <img
                src={product.image}
                alt={product.productName}
                className="product-image"
              />
            </div>

            <h3 className="product-name">
              {product.productName}
            </h3>

            <p className="product-price">
              {product.price} kr
            </p>

            <button
              className="add-btn"
              onClick={() => handleAdd(product)}
            >
              <img src={cart} alt="cart" className="cart-icon" />
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;