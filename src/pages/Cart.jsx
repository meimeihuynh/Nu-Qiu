import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/nuqiulogo.png";
import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";


function Cart() {
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
            <h1>Your Cart</h1>
            <Footer />
        </div>
    </div>
</div>);
}

export default Cart;