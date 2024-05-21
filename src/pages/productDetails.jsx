import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Icon } from "@iconify/react";
import Card from "../Components/card";
import "../asset/styles/productDetails.css";
import Prof from "../asset/images/Group 604.svg";
import { Link, useParams } from "react-router-dom";
import { productServices } from "../services/product.service";
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
  useEffect(() => {
    fetchProduct(id);
    fetchProducts();
  }, [id]);

  const fetchProduct = async (id) => {
    try {
      const result = await productServices.one(id);
      if (result?.statusCode === 200) {
        setProduct(result?.product);
        setProductSummary(result?.productSummary);
      }
      console.log(result);
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
          Product <strong>Details</strong>
        </div>

        {/* left div */}

        <div className="body row">
          {product && (
            <div className="col left-div col-8">
              <div>
                <div
                  style={{ "--image-url": `url(${product?.images[0]})` }}
                  className="product-img bg-[image:var(--image-url)]"
                >
                  {/* <div className="new">New</div> */}
                </div>

                <div className="product-details">
                  <ul className="flex gap-2 items-center justify-center">
                    {/* previous */}
                    <button className="border-[1px] border-gray-300 p-2 rounded-lg">
                      Previous
                    </button>
                    {product?.images?.map((e, i) => (
                      <li>
                        <img key={i} src={e} alt="" className="inactive" />
                      </li>
                    ))}
                    {/* <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li>
                  <li>
                    <img src={Cattle} alt="" className="inactive" />
                  </li> */}

                    {/* next button */}
                    <button className="border-[1px] border-gray-300 p-2 rounded-lg">
                      Next
                    </button>
                  </ul>
                </div>
              </div>

              <div className="body2">
                <h1>livestock Description</h1>
                <p>
                  {/* The Jamunapari Goat or Jamnapari is a breed of goat. They are
                basically originated from Indian subcontinent & have are
                basically a mixture of local goat called “PE” peranakan Etawa or
                Etawa mix. Apart from this they have been a great source for
                meat. The breed has good weight & mass & the breeds yield large
                quantity of milk. Further they can be used to give good meat.
                They are available at an affordable price point */}
                  {product?.description}
                </p>
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
                    {/* <table className="table">
                      
                      <tr>
                        <td>Weight</td>
                        <th>{product?.weight}kg plus</th>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <th>White</th>
                      </tr>
                      <tr>
                        <td>Lifespan</td>
                        <th>{product?.age} years</th>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <th>{product?.gender}</th>
                      </tr>
                    </table> */}
                  </div>

                  <div className="body22">
                    <h1>
                      {new Intl.NumberFormat("en-us", {
                        style: "currency",
                        currency: "NGN",
                      }).format(product?.price)}{" "}
                      <small>/UNIT</small>
                    </h1>
                  </div>
                </div>
              </div>

              <div className="body23">
                <div className="body230">
                  <div className="body231">
                    <h3>CUSTOMER FEEDBACK</h3>
                    <div className="body236">
                      <h6>Ratings bar</h6>
                      <div className="body232">
                        <div className="body234">4.5/5</div>
                        <div className="body235"></div>
                      </div>
                    </div>
                  </div>

                  <div className="body24">
                    <img src={Prof} alt="" />
                    <div className="body241">
                      <header>
                        GASGOS <br />
                        FARMS
                      </header>
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
            </div>
          )}
          {!product && <BeatLoader color="#36d7b7" />}

          {/* right-div...... */}

          <div className="col right-div0 col-4">
            <div className="right-div01">
              <div>
                <header>for sale</header>
                <p>
                  100 Pedigree Lleyn Breeding Gimmers, Shearlings 100 Pedigree
                  Lleyn Breeding Gimmers, Shearlings{" "}
                </p>
              </div>

              <div className="right-div1">
                <div>
                  <Icon icon="ci:tag" />
                  Listed days ago
                </div>

                <div>
                  <Icon icon="formkit:people" />
                  2,045 VIEWS
                </div>

                <div>
                  <Icon icon="fluent-emoji-high-contrast:star" />
                  {product?.age ? product?.age / 12 : 0} MONTHS old
                </div>
                <div>
                  <Icon icon="akar-icons:location" />
                  Ogun State
                </div>
              </div>

              <div className="right-div2">
                {!processing && cartItems?.some(e=>{
                  return e.product?.id === product?.id
                }) &&
                <div className="inline-flex justify-center items-center">
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    -
                  </button>
                  <span className="w-1/4">
                    {cartItems?.find(e=>{return e?.product?.id === product?.id})?.quantity}

                  </span>
                  <button  onClick={() => addToCart(product?.id)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    +
                  </button>
                </div>
                }
                `{processing && <BeatLoader color="#36d7b7" />}
                {!processing && !cartItems?.some(e=>{
                  return e?.product?.id === product?.id
                }) && (
                  <button
                    onClick={() => addToCart(product?.id)}
                    className="btn btn-danger btn-lg button-red"
                  >
                    ADD TO CART
                  </button>
                )}
                <Link
                  to="/cart"
                  className="btn btn-secondary btn-lg button-grey"
                >
                  VIEW CART
                </Link>
              </div>
              <div className="right-div3">
                <div>
                  <Icon icon="ri:share-line" />
                  SHARE
                </div>
                <div>
                  <Icon icon="tdesign:location-1" />
                  WATCH
                </div>
                <div>
                  <Icon icon="solar:chat-dots-linear" />
                  REPORT
                </div>
              </div>
            </div>

            <div className="right-div04">
              <div>
                <a href="/" className="button1">
                  RELATED LISTINGS
                </a>
                <a href="#" className="button2">
                  NEARBY LISTINGS
                </a>
              </div>

              <div>
                <div className="bottom-switch">
                  <div className="top-switch"></div>
                </div>
              </div>
              {loadingProducts && <BeatLoader color="#36d7b7" />}
              {!loadingProducts &&
                farmProducts.map((p, i) => (
                  <Card className="right-div-img pd-card" key={i} product={p} />
                ))}
              {/* <Card className="right-div-img pd-card" />
              <Card />
              <Card /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
