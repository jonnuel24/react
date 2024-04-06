import React, { useState } from "react";
// import Farmer from "../asset/images/farmer.svg";
import "../asset/styles/card.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setItems,
  setSummary,
} from "../store/reducers/cartReducer";
import { userServices } from "../services/user.service";
import { BeatLoader } from "react-spinners";
import { notification } from "../services/notification";
import { useNavigate } from "react-router-dom";

function Card({ product, cartId = null }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);
  const products = useSelector((state) => state.cart?.cartItems);
  const [processing, setProcessing]=useState(false);
  const navigate=useNavigate()
  const viewProduct=(productId)=>{
    navigate(`/user/product/${productId}`)
  }
  const addToCart = async (productId) => {
    setProcessing(true)
    try {
      const payload = {
        userId: user.id,
        productId: productId,
        quantity: 1,
      };
      const response = await userServices.addToCart(payload);
      notification(response?.message, 'success');
      dispatch(setItems(response.data?.cartItems));
      dispatch(setSummary(response?.data?.cart));
    } catch (e) {
      notification(e.message, 'info')
    }
    setProcessing(false)
  };

  const removeCart = async () => {
    setProcessing(true)
    try {
      const response = await userServices.removeCart({
        userId: user.id,
        cartItemId: cartId,
      });
      if(response && response.status==='success'){
        notification(response?.message, 'success');
        dispatch(setItems(response.data?.cartItems));
        dispatch(setSummary(response?.data?.cart));
      }else{
        alert("something went wrong")
      }
    } catch (e) {
      alert(e.message)
    }
    setProcessing(false)
  };
  return (
    <div className="cursor-pointer flex flex-col card  h-auto items-center">
      <div onClick={()=>viewProduct(product?.id)}
        style={{ "--image-url": `url(${product?.images[0]})` }}
        className="cattle bg-[image:var(--image-url)] bg-cover bg-no-repeat h-screen"
      >
        {/* <div className="top-tag">
          <div className="bg-[#006838] text-white">Forsale</div>
          <div className="bg-[#F91919] text-white">New</div>
        </div> */}
      </div>

      <div className="flex information flex-col justify-between">
        <div onClick={()=>viewProduct(product?.id)} className="left-card-body">
          <h3 className="description text-start">{product?.description}</h3>
          <h1 className="price">
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "NGN",
            }).format(product?.price)}{" "}
            <span>/ uniT</span>
          </h1>

          {/* <div className="flex justify-between gap-1 discount">
            <div className="bg-[#F91919] text-white">30% off</div>

            <div className="bg-[#155840] text-white">{product?.age} Years</div>

            <div className="bg-[#36454C] text-white">Sagamulga</div>
          </div> */}
        </div>

        {/* <img src={Farmer} alt="" className="bb" /> */}

        <div className="flex flex-col right-card-body">
        {processing && <BeatLoader color="#36d7b7" />}
          {!cartId && !processing && (
            <button
              onClick={() => addToCart(product?.id)}
              className="btn btn-success mt-[24px] h-[56px]"
            >
              ADD TO CART
            </button>
          )}
          {cartId && !processing && (
            <button
              onClick={() => removeCart()}
              className="btn btn-success mt-[24px] h-[56px]"
            >
              REMOVE FROM CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
