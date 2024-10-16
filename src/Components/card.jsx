import React, { useState } from "react";
import "../asset/styles/card.css";
import { useDispatch, useSelector } from "react-redux";
import { setItems, setSummary } from "../store/reducers/cartReducer";
import { userServices } from "../services/user.service";
import { BeatLoader } from "react-spinners";
import { notification } from "../services/notification";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

function Card({ product, cartId = null }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);
  const cartItems = useSelector((state) => state.cart?.items);
  const [processing, setProcessing] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  const viewProduct = (productId) => {
    navigate(`/user/product/${productId}`);
  };

  const addToCart = async (productId) => {
    setProcessing(true);
    try {
      const payload = {
        userId: user.id,
        productId: productId,
        quantity: 1,
      };
      const response = await userServices.addToCart(payload);
      notification(response?.message, "success");
      dispatch(setItems(response.data?.cartItems));
      dispatch(setSummary(response.data?.cart));
    } catch (e) {
      notification(e.message, "info");
    }
    setProcessing(false);
  };

  const removeCart = async () => {
    setProcessing(true);
    try {
      const response = await userServices.removeCart({
        userId: user.id,
        cartItemId: cartId,
      });
      if (response && response.status === "success") {
        notification(response?.message, "success");
        dispatch(setItems(response.data?.cartItems));
        dispatch(setSummary(response.data?.cart));
      } else {
        alert("something went wrong");
      }
    } catch (e) {
      alert(e.message);
    }
    setProcessing(false);
  };

  const truncateDescription = (description) => {
    if (description.length > 100 && !showFullDescription) {
      return description.slice(0, 100) + "...";
    }
    return description;
  };

  return (
    <div className="cursor-pointer flex flex-col card justify-between max-h-[400px] h-fit space-y-4 items-center border-none hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden">
      {/* Image */}
      <div
        onClick={() => viewProduct(product?.id)}
        style={{ "--image-url": `url(${product?.images[0]})` }}
        className="cattle bg-[image:var(--image-url)] bg-cover bg-no-repeat h-48 w-full"
      ></div>

      {/* Body */}
      <div className="flex information flex-col space-y-4 justify-between p-4 w-full">
        <div
          onClick={() => viewProduct(product?.id)}
          className="left-card-body"
        >
          <div className="text-xl font-semibold">{product?.name}</div>
          {/* Product Description */}
          <h3 className="description text-start text-black overflow-hidden whitespace-nowrap text-ellipsis">
            {truncateDescription(product?.description)}
            {product?.description.length > 100 && !showFullDescription && (
              <button
                onClick={() => setShowFullDescription(true)}
                className="text-blue-500 mt-2"
              >
                Read More
              </button>
            )}
            {showFullDescription && (
              <button
                onClick={() => setShowFullDescription(false)}
                className="text-blue-500 mt-2"
              >
                Show Less
              </button>
            )}
          </h3>
          <h1 className="price text-black mt-2">
            {`₦ ${new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(product?.price)} `}
            <span className="text-gray-600">/ unit</span>
          </h1>
        </div>

        {/* Add/Remove Items to Cart */}
        <div className="flex flex-col items-start justify-between w-full">
          {!cartId && !processing && cartItems?.some((e) => e.product?.id === product?.id) && (
            <div className="inline-flex justify-between w-full items-center">
              <button className="bg-green-500 hover:bg-green-700 font-bold py-2 px-2 border-green-500 hover:border-green-700 rounded">
                <Icon
                  icon="material-symbols:remove"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                />
              </button>

              {/* Count */}
              <span className="w-1/4 text-lg font-medium">
                {cartItems?.find((e) => e?.product?.id === product?.id)?.quantity}
              </span>

              {/* Increase */}
              <button
                onClick={() => addToCart(product?.id)}
                className="bg-green-500 hover:bg-green-700 font-bold py-2 px-2 border-green-500 hover:border-green-700 rounded"
              >
                <Icon
                  icon="fluent:add-12-filled"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                />
              </button>
            </div>
          )}
          {processing && <BeatLoader color="#36d7b7" />}
          {!cartId && !processing && !cartItems?.some((e) => e.product?.id === product?.id) && (
            <button
              onClick={() => addToCart(product?.id)}
              className="btn btn-success h-fit py-2 px-4 w-full"
            >
              ADD TO CART
            </button>
          )}
          {cartId && !processing && (
            <button
              onClick={() => removeCart()}
              className="btn btn-success h-fit py-2 px-4"
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
