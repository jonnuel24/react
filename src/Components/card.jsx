import React from "react";
// import Farmer from "../asset/images/farmer.svg";
import "../asset/styles/card.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCartCount, setCartItems, setCartSummary } from "../store/reducers/cartReducer";
import { userServices } from "../services/user.service";

function Card({ product }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);
  const products=useSelector(state=>state.cart?.cartItems)
  const addToCart = async (productId) => {
    let cartProducts=products
    try {
   
      const payload={
        userId: user.id,
        productId: productId,
        quantity: 1,
      }
      const response=await userServices.addToCart(payload)
      alert(response?.message)
      dispatch(
        setCartItems(response.data?.cartItems)
      );
      dispatch(setCartSummary(response?.data?.cart))
      // dispatch(increaseCartCount())
      console.log('cart products', products)
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="flex flex-col card  h-auto items-center">
      <div
        style={{ "--image-url": `url(${product.images[0]})` }}
        className="cattle bg-[image:var(--image-url)] bg-cover bg-no-repeat h-screen"
      >
        <div className="top-tag">
          <div className="bg-[#006838] text-white">Forsale</div>
          <div className="bg-[#F91919] text-white">New</div>
        </div>
      </div>

      <div className="flex information flex-col justify-between">
        <div className="left-card-body">
          <h3 className="description text-start">{product?.description}</h3>
          <h1 className="price">
            {new Intl.NumberFormat("en-us", {
              style: "currency",
              currency: "NGN",
            }).format(product?.price)}{" "}
            <span>/ uniT</span>
          </h1>

          <div className="flex justify-between gap-1 discount">
            <div className="bg-[#F91919] text-white">30% off</div>

            <div className="bg-[#155840] text-white">{product?.age} Years</div>

            <div className="bg-[#36454C] text-white">Sagamulga</div>
          </div>
        </div>

        {/* <img src={Farmer} alt="" className="bb" /> */}

        <div className="flex flex-col right-card-body">
          <button onClick={()=>addToCart(product?.id)} className="btn btn-success mt-[24px] h-[56px]">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
