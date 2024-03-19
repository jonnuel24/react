import React, { useEffect } from "react";
import Logo from "../asset/images/logo_light.svg";
import "../asset/styles/navbar.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ setSearch }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.currentUser);
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);
  const cartItems = useSelector((state) => state.cart?.items);
  const cartSummary = useSelector((state) => state.cart?.summary);
  console.log("cart products", cartItems);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [user, isAuthenticated, navigate]);
  return (
    <nav className="w-full">
      <div className="left-nav">
        <Link to="/user" className="">
          <img src={Logo} alt="Agripeller Logo" className="" />
        </Link>

        <form action="submit" className="flex">
          <div className="search-input">
            <input onChange={(e)=>setSearch(e.target.value)} className="" type="text" placeholder="Search..." />

            <button type="button" className="text-[#fff] search">
              <Icon
                icon="iconamoon:search-thin"
                color="black"
                className="icon"
              />
            </button>
          </div>
          <button type="button" className="filter">
            <Icon icon="iconoir:filter" className="icon" />
          </button>
        </form>
      </div>

      <div className="right-nav">
        <ul>
          <Link to={"/user"}>
            <li className="flex">
              <Icon icon="iconoir:home-simple" color="white" className="icon" />
              Home
            </li>
          </Link>

          <Link to={"/OrderConfirmation"}>
            <li>
              <Icon icon="lucide:tag" color="white" className="icon" />
              Orders
            </li>
          </Link>

          <Link>
            <li>
              <Icon
                icon="streamline:interface-help-question-message-bubble-help-mark-message-query-question-speech"
                className="icon"
              />
              Support
            </li>
          </Link>

          <Link to={"/cart"}>
            <li className="relative">
              <Icon icon="lucide:shopping-cart" className="icon" />
              Cart
              <span
                className={`absolute ${
                  cartItems
                    ? "bg-red-600 text-red-100"
                    : "bg-green-700 text-white"
                } px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3`}
              >
                {cartItems ? cartItems?.length : 0}
              </span>
            </li>
          </Link>

          <Link>
            {" "}
            <li>
              <Icon icon="mdi:bell-notification-outline" className="icon" />
              Notification
            </li>
          </Link>

          <Link to={"/profile"}>
            <li>
              <Icon icon="iconamoon:profile" className="icon" />
              Profile
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
