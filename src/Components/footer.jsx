import React from "react";
import "../asset/styles/footer.css";
import Logo from "../asset/images/Logo (white).svg";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer>
        <div className="flex container">
          <div className="left-div">
            <img src={Logo} alt="" />
            <p>Subscribe to get the latest news on listings and Articles</p>
            <form action="">
              <input type="text" placeholder="Enter your mail" />
              <button>Farmer</button>
              <button>User</button>
            </form>
          </div>

          <div className="right-div">
            <div className="flex links">
              <div>
                <h1>SERVICES</h1>
                <ul>
                  <Link>
                    <li>BUY LIVESTOCKS</li>
                  </Link>
                  <Link>
                    <li>SELL LIVESTOCKS</li>
                  </Link>
                </ul>
              </div>

              <div>
                <h1>SUPPORT</h1>
                <ul>
                  <Link>
                    <li>HELP</li>
                  </Link>
                  <Link>
                    <li>FAQ</li>
                  </Link>
                </ul>
              </div>

              <div>
                <h1>COMPNAY</h1>
                <ul>
                  <Link>
                    <li>BLOG</li>
                  </Link>
                  <Link>
                    <li>ABOUT</li>
                  </Link>
                </ul>
              </div>

              <div>
                <h1>LEGAL</h1>
                <ul>
                  <Link>
                    <li>TERMS & PRIVACY </li>
                  </Link>
                </ul>
              </div>
            </div>

            <label htmlFor="">©Agripeller 2023</label>
            <div className="text-white flex gap-2">
              <Icon
                icon="mingcute:facebook-line"
                color="white"
                width="32"
                height="32"
              />

              <Icon icon="uil:instagram" color="white" width="32" height="32" />

              <Icon
                icon="teenyicons:twitter-outline"
                color="white"
                width="32"
                height="32"
              />

              <Icon icon="jam:linkedin" color="white" width="32" height="32" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
