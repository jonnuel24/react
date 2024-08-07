import React, { useEffect } from "react";
import Logo from "../../../asset/images/Logo (white).svg";
import "../../../asset/styles/farmersNabar.css";
import { Icon } from "@iconify/react";
import pic from "../../../asset/images/animal_profile.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FNavbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.currentUser);
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [user, isAuthenticated, navigate]);

  return (
    <div>
      <div className="fnav bg-[#000000] px-16 py-6 w-full flex flex-row justify-between">
        <Link to={"/website"} className="no-underline">
          <img src={Logo} alt="" />
        </Link>

        <div className="flex flex-row items-center gap-[21px]">
          {/* <Icon icon="uil:comment-message" className="fn-icon" /> */}
          <Link to="/notifications" className="no-underline cursor-pointer">
            <Icon icon="solar:bell-linear" className="fn-icon" />
          </Link>
          <Link to="/settings" className="no-underline flex">
            <div className="flex flex-row items-center gap-[21px]">
              <div className="fn-profile">
                <img src={pic} alt="" className="animal" />
              </div>
              <div className="flex flex-row items-center gap-[4px]">
                <label
                  htmlFor=""
                  className="text-white text-[20px] font-medium leading-normal"
                >
                  {user?.firstName}
                </label>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FNavbar;
