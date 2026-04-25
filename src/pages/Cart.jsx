import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/nuqiulogo.png";
import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";
import { useCart } from "../context/CartContext";


function Cart() {

  const { cart } = useCart();

  // total price calculation
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);


   return (
  <div className="app-container">
    <div className="phone">
        <div className="home">
            <div className="header">
                <Header
                    logo={logo}
                    menuIcon={menuIcon}
                    searchIcon={searchIcon}
                    userIcon={userIcon}
                    cartIcon={cartIcon}
                />
            </div> 
            <div className="cart-page"></div>
                <h1>Your Cart</h1>

                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                        <div className="cart-items">
                            {cart.map((item) => (
                            <div key={item.id} className="cart-item">

                                <img src={item.image} className="cart-img" />

                                <div>
                                <h3>{item.productName}</h3>
                                <p>{item.price} kr</p>
                                <p>Qty: {item.quantity}</p>
                                </div>

                            </div>
                            ))}
                        </div>

                        <div className="cart-total">
                            <h2>Total: {total} kr</h2>
                        </div>
                        </>
                    )}
                <Footer />
        </div>
    </div>
</div>);
}

export default Cart;