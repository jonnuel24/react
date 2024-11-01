import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Icon } from "@iconify/react";
// import Card from "../Components/card";
import "../asset/styles/productDetails.css";
import Prof from "../asset/images/Group 604.svg";
import { Link, useParams } from "react-router-dom";
import { productServices } from "../services/product.service";
import farmServices from "../services/farm.service";
import { notification } from "../services/notification";
import { userServices } from "../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { setItems, setSummary } from "../store/reducers/cartReducer";
import { BeatLoader } from "react-spinners";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productSummary, setProductSummary] = useState({});
  const [processing, setProcessing] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.currentUser);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [farmProducts, setFarmProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart?.items);
  const [selectedImage, setSelectedImage] = useState(0);
  const [farm, setFarm] = useState({});
  useEffect(() => {
    fetchProduct(id);
    fetchProducts();
  }, [id]);

  const fetchProduct = async (id) => {
    try {
      const result = await productServices.one(id);
      if (result?.statusCode === 200) {
        setProduct(result?.product);
        setFarm(result?.farm);
        // fetchFarm(result?.product?.farmId);
        setProductSummary(result?.productSummary);
      }
      console.log("product", result);
    } catch (e) {}
  };

  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const products = await productServices.all(1, 3);
      if (products?.products) {
        setFarmProducts(products.products);
      }
    } catch (e) {
      console.log(e);
    }
    setLoadingProducts(false);
  };

  const fetchFarm = async (farmId) => {
    const result = await farmServices.farm(farmId);
    console.log(result);
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
      dispatch(setSummary(response?.data?.cart));
    } catch (e) {
      notification(e.message, "info");
    }
    setProcessing(false);
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="header1 ">
          <strong>Product Details</strong>
        </div>
        {/* left div */}

        <div className="body flex w-[100%]">
          {product && (
            <div className="col col-8 space-y-4">
              <div className="bg-white rounded-xl p-2">
                <div
                  style={{
                    backgroundImage: `url(${product?.images[selectedImage]})`,
                  }}
                  className="product-img bg-cover bg-no-repeat bg-center w-full h-[640px] border border-gray-50"
                >
                  {/* Optional content inside the image frame */}
                </div>

                <div className="w-full flex items-center justify-center mt-4 pb-6">
                  <ul className="flex gap-2 items-center justify-between w-full m-0 p-0">
                    {/* Previous button */}
                    <button
                      onClick={() => {
                        setSelectedImage((prev) => (prev > 0 ? prev - 1 : 0));
                      }}
                      className="border-[1px] border-gray-300 p-1 rounded-lg"
                    >
                      <Icon
                        icon="ooui:next-rtl"
                        width="64"
                        height="64"
                        style={{ color: "black" }}
                      />
                    </button>

                    {/* Thumbnails */}
                    {product?.images?.map((image, index) => (
                      <li key={index} className="flex-shrink-0">
                        <img
                          src={image}
                          alt={`Product ${index}`}
                          className={`cursor-pointer border ${
                            selectedImage === index
                              ? "border-blue-500"
                              : "border-gray-300"
                          } p-1 rounded w-36 h-36 object-cover`}
                          onClick={() => setSelectedImage(index)}
                        />
                      </li>
                    ))}

                    {/* Next button */}
                    <button
                      onClick={() => {
                        setSelectedImage((prev) =>
                          prev < product.images.length - 1
                            ? prev + 1
                            : product.images.length - 1
                        );
                      }}
                      className="border-[1px] border-gray-300 p-1 rounded-lg"
                    >
                      <Icon
                        icon="ooui:next-ltr"
                        width="64"
                        height="64"
                        style={{ color: "black" }}
                      />
                    </button>
                  </ul>
                </div>
              </div>

              <div className=" bg-white rounded-xl p-4">
                <h1 className="w-full text-left ">{product?.name}</h1>
                <p className="text-gray-700">{product?.description}</p>
                <div className="body21">
                  <div className="btable">
                    {/*  */}
                    <div className="border p-[16px] w-full">
                      {/* breed */}
                      <div className="flex flex-row justify-between">
                        <div>Breed</div>
                        <div className="font-medium">{product?.category}</div>
                      </div>
                      {/* weight */}
                      <div className="flex flex-row justify-between">
                        <div>Weight</div>
                        <div className="font-medium">
                          {product?.weight}kg Plus
                        </div>
                      </div>
                      {/* color */}
                      <div className="flex flex-row justify-between">
                        <div>Color</div>
                        <div className="font-medium">White</div>
                      </div>
                      {/* lifespan */}
                      <div className="flex flex-row justify-between">
                        <div>Lifespan</div>
                        <div className="font-medium">{product?.age}</div>
                      </div>
                      {/* gender */}
                      <div className="flex flex-row justify-between">
                        <div>Gender</div>
                        <div className="font-medium">{product?.gender}</div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          )}
          {!product && <BeatLoader color="#36d7b7" />}

          {/* right-div...... */}

          <div className="flex flex-col gap-6 w-full ml-6">
            {/* profile */}
            <div className="body23">
              <div className="w-full flex items-start font-medium text-lg pb-2 border-b-2">
                Item Price
              </div>
              <div className=" flex flex-col h-32 justify-between items-start mt-4">
                <div className="text-3xl font-bold">
                  {new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "NGN",
                  }).format(product?.price)}{" "}
                  <small>/UNIT</small>
                </div>
                {/* button */}
                <div className="">
                  {!processing &&
                    cartItems?.some((e) => {
                      return e.product?.id === product?.id;
                    }) && (
                      <div className="inline-flex justify-center gap-4 items-center">
                        <button className="bg-green-700 hover:bg-green-900 text-white h-[40px] flex items-center px-3 border-green-700 rounded text-[40px]">
                          -
                        </button>
                        <span className="w-1/4">
                          {
                            cartItems?.find((e) => {
                              return e?.product?.id === product?.id;
                            })?.quantity
                          }
                        </span>
                        <button
                          onClick={() => addToCart(product?.id)}
                          className="bg-green-700 hover:bg-green-900 text-white h-[40px] flex items-center px-3 border-green-700 rounded text-[40px]"
                        >
                          +
                        </button>
                      </div>
                    )}
                  `{processing && <BeatLoader color="#36d7b7" />}
                  {!processing &&
                    !cartItems?.some((e) => {
                      return e?.product?.id === product?.id;
                    }) && (
                      <button
                        onClick={() => addToCart(product?.id)}
                        className="py-2 h-[44px] px-4 rounded-xl bg-green-700 hover:bg-green-900 text-white font-medium"
                      >
                        add to cart
                      </button>
                    )}
                  <Link to="/cart" className="ml-6">
                    <button className="py-2 px-4 h-[44px] rounded-xl bg-transaparent hover:bg-gray-100 border-2 text-gray-700 font-medium">
                      view cart
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-3 body23">
              <div className="body230">
                <div className="body24">
                  <img src={farm.logoUrl || Prof} alt="" />
                  <div className="body241">
                    <div className="text-[32px] font-semibold">{farm?.farmName}</div>
                    <div className=" body240">
                      <h4>Agripeller verified</h4>
                      <Icon
                        icon="codicon:verified-filled"
                        color="white"
                        className="verified"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="body25">
          <header>Comments</header>
          <div className="body250">
            <div className="body251">
              <div className="star">
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#D9D9D9"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#D9D9D9"
                />
              </div>
              <h4>This is an interesting farmer </h4>
              <label htmlFor="">
                12/07/2023 by <strong>James</strong>
              </label>
            </div>
            <div className="body251">
              <div className="star">
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#D9D9D9"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#D9D9D9"
                />
              </div>
              <h4>This is an interesting farmer </h4>
              <label htmlFor="">
                12/07/2023 by <strong>James</strong>
              </label>
            </div>
            <div className="body251">
              <div className="star">
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#EC5858"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#D9D9D9"
                />
                <Icon
                  className="star-icon"
                  icon="bi:star-fill"
                  color="#D9D9D9"
                />
              </div>
              <h4>This is an interesting farmer </h4>
              <label htmlFor="">
                12/07/2023 by <strong>James</strong>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
