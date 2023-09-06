import React from 'react';
import Logo from '../asset/images/logo_light.svg';
import '../asset/styles/navbar.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <div>
      <nav className='w-full'>

        <div className='container-fluid'>
            <div className='left-nav'>
              <a href="" className=''>
                <img src={Logo} alt="Agripeller Logo" className='' />
              </a>

              <form action="submit" className='flex'>
                <div className='input-group search-input'>
                  <input
                    className=''
                    type="text"
                    placeholder="Search..."
                  />

                  <button type='button' className='text-[#fff] search'>
                    <Icon icon="iconamoon:search-thin" color="black" width="32" height="32" />
                  </button>
                </div>
                <button type='button' className='filter'>
                  <Icon icon="iconoir:filter" width="32" height="32" />
                </button>
              </form>
            </div>

            <div className='right-nav'>
              <ul>

                <a href=""><li className='flex'><Icon icon="iconoir:home-simple" color="white" width="30" height="30" />Home</li></a>
                <a href=""><li><Icon icon="lucide:tag" color="white" width="22" height="22" />Orders</li></a>
                <a href=""><li><Icon icon="streamline:interface-help-question-message-bubble-help-mark-message-query-question-speech" className="icon" />Support</li></a>
                <a href=""><li><Icon icon="lucide:shopping-cart" className="icon" />Cart</li></a>
                <a href=""><li><Icon icon="mdi:bell-notification-outline" className="icon" />Notification</li></a>
                <a href=""><li><Icon icon="iconamoon:profile" className="icon" />Profile</li></a>

              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
