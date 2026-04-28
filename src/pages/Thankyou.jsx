import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/nuqiulogo.png";
import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";
import successemote from "../assets/successemote.png";

import { useNavigate } from "react-router-dom";


function SuccessPage() {

const navigate = useNavigate();
 
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
     
    
            <div className="success-page">
            <img src={successemote} className="success-emote" alt="Success" />
            <h1>Thank you for your order!</h1>
            <p>Your payment was successful.</p>
            </div>
            <div className="cart-actions">
                <button className="continue-btn" onClick={() => navigate("/")}>
                <div className="continue-text">Continue Shopping</div> 
                </button>
                </div>
        </div>
        <Footer />
    </div>
</div>
  );
}

export default SuccessPage;