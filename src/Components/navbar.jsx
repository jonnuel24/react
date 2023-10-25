import React from "react";
import Logo from "../asset/images/logo_light.svg";
import "../asset/styles/navbar.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="left-nav">
        <Link className="">
          <img src={Logo} alt="Agripeller Logo" className="" />
        </Link>

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
          <Link>
            <li className="flex">
              <Icon
                icon="iconoir:home-simple"
                color="white"
                className="icon"
              />
              Home
            </li>
          </Link>
          <Link>
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
          <Link>
            <li>
              <Icon icon="lucide:shopping-cart" className="icon" />
              Cart
            </li>
          </Link>
          <Link>
            <li>
              <Icon icon="mdi:bell-notification-outline" className="icon" />
              Notification
            </li>
          </Link>
          <Link>
            <li>
              <Icon icon="iconamoon:profile" className="icon" to={"/profile"} />
              <Link to={"/profile"}>Profile</Link>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
