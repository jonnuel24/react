import React, { useEffect } from "react";
import Logo from "../asset/images/logo_light.svg";
import "../asset/styles/navbar.css";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate=useNavigate()
  const user=useSelector(state=>state.user?.currentUser)
  const isAuthenticated=useSelector(state=>state.user?.isAuthenticated);
  useEffect(()=>{
    if(isAuthenticated===false) {
      navigate("/login")
    }
  }, [user, isAuthenticated, navigate])
  return (
    <nav className="w-full">
      <div className="left-nav">
        <a href="/" className="">
          <img src={Logo} alt="Agripeller Logo" className="" />
        </a>

        <form action="submit" className="flex">
          <div className="search-input">
            <input className="" type="text" placeholder="Search..." />

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
          <a href="/">
            <li className="flex">
              <Icon
                icon="iconoir:home-simple"
                color="white"
                className="icon"
              />
              Home
            </li>
          </a>
          <a href="/">
            <li>
              <Icon icon="lucide:tag" color="white" className="icon" />
              Orders
            </li>
          </a>
          <a href="/">
            <li>
              <Icon
                icon="streamline:interface-help-question-message-bubble-help-mark-message-query-question-speech"
                className="icon"
              />
              Support
            </li>
          </a>
          <a href="/">
            <li>
              <Icon icon="lucide:shopping-cart" className="icon" />
              Cart
            </li>
          </a>
          <a href="/">
            <li>
              <Icon icon="mdi:bell-notification-outline" className="icon" />
              Notification
            </li>
          </a>
          <a href="/">
            <li>
              <Icon icon="iconamoon:profile" className="icon" to={"/profile"} />
              <Link to={"/profile"}>Profile</Link>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
