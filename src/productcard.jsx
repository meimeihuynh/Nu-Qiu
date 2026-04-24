import './App.css';
import products from "./Products.js";
import rainbowBox from "./assets/rainbowbox.png";
import cart from "./assets/icon/cart.png";


function ProductGrid({ products }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="card">

          <div className="image-frame">
            <img
              src={rainbowBox}
              className="frame-img"
              alt="frame"
            />
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

          <button className="add-btn">
            <img src={cart} alt="cart" className="cart-icon" />
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductGrid;