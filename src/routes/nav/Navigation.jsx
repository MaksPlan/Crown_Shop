import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cart-icon/CartIcon";
import CartDropdown from "../../Components/cart-dropdown/CartDropdown";
import "./navigation.styles.scss";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from '../../utils/firebase/firebase.utils.js'



const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const [dropdownToggle, setDropdownToggle] = useState(false)

  const DropdpwnToddler = () => {
    const res = dropdownToggle ? false : true;
    setDropdownToggle(res)
  }


  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (<Link className="nav-link" to="authentication">
            SIGN IN
          </Link>)}


          <button className="cartBTtn" onClick={() => DropdpwnToddler()}>
            <CartIcon />
          </button>



        </div>
        {dropdownToggle && <CartDropdown />}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
