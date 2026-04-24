import logo from "../assets/nuqiulogo.png";
import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";
import rainbowbg from "../assets/rainbowbg.jpg";

import { useNavigate } from "react-router-dom";


function Header({ logo, menuIcon, searchIcon, userIcon, cartIcon }) {
  const navigate = useNavigate();

  return (
    <div className="header">
         <img src={logo} className="logo" onClick={() => navigate("/")} />

         <div className="nav">
            <div className="nav-left">
                <img src={menuIcon} className="icon" />
                <img src={searchIcon} className="icon" />
            </div>

            <div className="nav-right">
                 <img src={userIcon} className="icon" />
                <img src={cartIcon} className="icon" 
                onClick={() => navigate("/cart")} />
            </div>
            </div>
        <img src={rainbowbg} className="header-bg" />
    </div>
  );
}

export default Header;