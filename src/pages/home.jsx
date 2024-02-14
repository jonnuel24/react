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
import { setCartItems, setCartSummary } from "../store/reducers/cartReducer";

const Home = () => {
  const dispatch=useDispatch()
  const [farmProducts, setFarmProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const user = useSelector((state) => state.user?.currentUser);

  useEffect(() => {
    fetchProducts();
    fetchCartItems()
  }, [page, size]);

  const fetchProducts = async () => {
    try {
      const products = await productServices.all(page, size);
      console.log(products.products);
      if (products?.products) {
        setFarmProducts(products.products);
      }
      
    } catch (e) {
      console.log(e);
    }
  };
  const fetchCartItems = async () => {
    try {
      const response = await userServices.userCart(user.id);
      console.log(response);
      dispatch(setCartItems(response?.data?.cartItems))
      dispatch(setCartSummary(response?.data?.cart))
      // if (response) {
      //   dispatch(products.products);
      // }
      
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="section2">
        <header>
          Welcome <strong>{user.firstName},</strong>
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
          {farmProducts.map((p) => (
            <Card product={p} />
          ))}
          {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
