import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cart-icon/CartIcon";
import CartDropdown from "../../Components/cart-dropdown/CartDropdown";
import { NavigationCopntainer, LogoContainer, NavLinks, NavLink, CartBtn } from "./navigation.styles";
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
      <NavigationCopntainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (<Link className="nav-link" to="authentication">
            SIGN IN
          </Link>)}


          <CartBtn onClick={() => DropdpwnToddler()}>
            <CartIcon />
          </CartBtn>



        </NavLinks>
        {dropdownToggle && <CartDropdown />}
      </NavigationCopntainer>

      <Outlet />
    </>
  );
};

export default Navigation;
