import React, {useState} from "react";
import "../asset/styles/resetPassword.css";
import Logo from "../asset/images/logo.svg";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import accountServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";
function  ResetPassword() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [post, setPost] = useState({
    newPassword: "",
    confirmPassword:""
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  async function resetPass(){
    try{
      if(post.confirmPassword===post.newPassword){
        const response=await accountServices.resetPassword(post);
        if(response.statusCode===200){
          navigate('/passwordChanged')
        }else{
          alert(response.message)
        }
      }else{
        alert("password and confirm password most match")
      }

    }catch(e){

    }
  }
  const navigate = useNavigate();
  return (
    <div className="flex justify-center align-middle rp-main-div">
      <form onSubmit={handleSubmit(resetPass)} className="flex flex-col items-center rp-form">
        <img src={Logo} alt="" />
        <h3 htmlFor="email" className="flex items-center">
          Set New Password
        </h3>
        <p>
          Your new password must be different from the previously used passwords
        </p>
        <div className="inputs items-start">
          <label htmlFor="password" className="flex items-start">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            className="mt-2"
            onChange={handleInput}
            value={post.newPassword}
            placeholder="Enter New Password"
          />
        </div>

        <div className="inputs items-start">
          <label htmlFor="password" className="flex items-start">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="mt-2"
            onChange={handleInput}
            value={post.confirmPassword}
            placeholder="Confirm New Password"
          />
        </div>

        <div className="flex login-div4 rp-btn">
          <button type="submit">Recover Password</button>
          <div className="flex flex-row items-center gap-2 mt-4">
            <Icon icon="ion:chevron-back-outline" /> back to Login
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
