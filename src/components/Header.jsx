import logo from "../assets/nuqiulogo.png";
import menuIcon from "../assets/icon/menu.png";
import searchIcon from "../assets/icon/searchblack.png";
import userIcon from "../assets/icon/user.png";
import cartIcon from "../assets/icon/cartblack.png";
import rainbowbg from "../assets/rainbowbg.jpg";


function Header({ logo, menuIcon, searchIcon, userIcon, cartIcon }) {
  return (
    <div className="header">
        <img src={rainbowbg} className="header-bg" />
      <div className="nav-left">
        <img src={menuIcon} className="icon" />
        <img src={searchIcon} className="icon" />
      </div>

      <img src={logo} className="logo" />

      <div className="nav-right">
        <img src={userIcon} className="icon" />
        <img src={cartIcon} className="icon" />
      </div>
    </div>
  );
}

export default Header;