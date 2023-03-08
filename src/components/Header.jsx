import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt=""
          />
        </Link>
        <div className="header_search">
          <input className="header_searchinput" type="text" />
          <SearchIcon className="header_serchicon" />
        </div>
        <div className="header_nav">
          <Link to="/SignIn">
            <div className="header_option">
              <span className="header_optionlineone">Hello Guest</span>
              <span className="header_optionlinetwo">Sign In</span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionlineone">Returns</span>
            <span className="header_optionlinetwo">& Orders</span>
          </div>
          <div className="header_option">
            <span className="header_optionlineone">Your</span>
            <span className="header_optionlinetwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header_optionbasket">
              <ShoppingBasketIcon className="header_basket" />
              <span className="header_optionlinetwo header_basketcount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
