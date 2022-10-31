import React, {useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/086_crown.svg";
import "./086 navigation.styles.scss";
import { UserContext } from "../../user-context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
const {currentUser, setCurrentUser} = useContext(UserContext)

const signOutHandler = async () => {
  await signOutUser();
  setCurrentUser(null);
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
          { currentUser ? (
            <span className="nav-link" onClick={() => signOutHandler()}>SIGN OUT</span>
          ) : ( <Link className="nav-link" to="authentication">
           SIGN IN
          </Link>)}
         
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
