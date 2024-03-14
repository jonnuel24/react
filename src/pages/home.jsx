/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AnimalProfile from "../Components/animalProfile";
import "../asset/styles/home.css";
import Card from "../Components/card";
import { productServices } from "../services/product.service";
import { useDispatch, useSelector } from "react-redux";
import { userServices } from "../services/user.service";
import { setItems, setSummary } from "../store/reducers/cartReducer";
import ReactPaginate from "react-paginate";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const [farmProducts, setFarmProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(15);
  const [search, setSearch]=useState("");
  const [loadingProducts, setLoadingProducts]=useState(false);
  const user = useSelector((state) => state.user?.currentUser);
  const handlePageClick=(data)=>{
    setPage(data.selected+1)
  }
  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, [page, size]);

  const fetchProducts = async () => {
    setLoadingProducts(true)
    setPages(0)
    try {
      const products = await productServices.all(page, size);
      if (products?.products) {
        setFarmProducts(products.products);
        setPages(products?.noOfTotalPages)
      }
    } catch (e) {
      console.log(e);
    }
    setLoadingProducts(false)
  };
  const fetchCartItems = async () => {
    try {
      const response = await userServices.userCart(user.id);
      dispatch(setItems(response?.data?.cartItems));
      dispatch(setSummary(response?.data?.cart));
      console.log("cart items from home page", response.data.cartItems);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col">
      <Navbar setSearch={setSearch}/>
      <section className="section2">
        <header>
          Welcome <strong>{user?.firstName},</strong>
        </header>

        <div className="section21 mt-[56px]">
          <div className="section22">
            <a href="/" className="bg-[#006838] active">
              <div className="text-white">All</div>
            </a>
            <a href="/">
              <div>Popular</div>
            </a>
            <a href="/">
              <div>New in</div>
            </a>
            <a href="/">
              <div>Best Rating</div>
            </a>
            <a href="/">
              <div>highest price</div>
            </a>
            <a href="/">
              <div>Lowest Price</div>
            </a>
          </div>

          {/* <div className='section23'>
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              
            </div> */}
        </div>
      </section>

      <section className="card0">
        <div className="flex flex-wrap card1 justify-center">
          {loadingProducts && <BeatLoader color="#36d7b7" />}
          {!loadingProducts && farmProducts.map((p, i) => (
            <Card key={i} product={p} />
          ))}
        </div>
        <ReactPaginate
          className="justify-end flex flex-row gap-10 w-full text-black text-bold"
          pageCount={pages}
          shape="rounded"
          onPageChange={handlePageClick}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
