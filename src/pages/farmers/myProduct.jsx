import React, { useEffect, useState } from "react";
import Fpanel from "./component/fpanel";
import { Icon } from "@iconify/react";
import FNavbar from "./component/farmersNavbar";
import Searchbar from "./component/searchbar";
import Sortby from "./component/sortBy";
import "../../asset/styles/myProduct.css";
import Option from "./component/optionMyProduct";
import { productServices } from "../../services/product.service";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyProduct() {
  const [farmProducts, setFarmProducts] = useState([]);
  const user = useSelector((state) => state.user?.currentUser);
  const farm = useSelector((state) => state.user?.farm);
  console.log("farmers farm", farm);
  useEffect(() => {
    fetchProducts(farm.id);
  }, []);

  const fetchProducts = async (farmId) => {
    try {
      const products = await productServices.farmProduct(farmId);
      setFarmProducts(products.farmProducts);
      console.log("farm products", farmProducts);
    } catch (e) {
      console.log(e);
    }
  };

  // Defining filter state
  const [isProductFilterOpen, setIsProductFilterOpen] = useState(false);

  // Function to toggle filter visibility
  const toggleProductFilter = () => {
    setIsProductFilterOpen((prev) => !prev);
  };

  const deleteProduct=async(productId)=>{
    await productServices.delete(productId)
    fetchProducts(farm.id)
  }

  // Filter
  const productFilter = [
    { id: 1, label: "newest" },
    { id: 2, label: "oldest" },
    { id: 3, label: "lowest price" },
    { id: 4, label: "highest price" },
  ];

  return (
    <div>
      <FNavbar />
      <div className="pl-[64px] pr-[32px] flex flex-row">
        {/* side panel */}
        <div>
          <Fpanel />
        </div>

        {/* divider */}
        <div className="fd-divider ml-4 h-full"></div>
        {/* body */}
        <div className="p-[24px] flex flex-col items-start w-full gap-[64px]">
          <h2 className="text-left">My products</h2>
          <div className="w-full h-fit">
            <h5 className="text-left">{farmProducts?.length || 0} item(s)</h5>
            <div className="addProduct-rd w-full h-full">
              <div className="flex gap-[16px] p-[16px]">
                {/* search bar */}
                <Searchbar />
                {/* sortby */}
                <div className="relative">
                  <Sortby
                    onClick={toggleProductFilter}
                    aria-expanded={isProductFilterOpen}
                    aria-controls="product-filter"
                  />

                  {isProductFilterOpen && (
                    <div
                      id="product-filter"
                      className="border rounded-md shadow-xl p-2 flex justify-start mt-2 absolute inset-0 z-20 bg-white top-[100%] h-fit w-fit min-w-[200px]"
                    >
                      <ul className="flex flex-col items-start gap-2 w-full pl-0">
                        {productFilter.map((product) => (
                          <li
                            key={product.id}
                            className="hover:bg-gray-100 cursor-pointer w-full text-left py-2 pl-2 pr-8 rounded-sm"
                          >
                            {product.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <table className="mb-[32px]">
                  <thead>
                    <tr className="">
                      <th>Images</th>
                      <th>Product name</th>
                      <th>Category</th>
                      <th>In stock</th>
                      <th>Price (₦)</th>
                      <th className=""></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 01 */}
                    {farmProducts?.map((p, index) => (
                      <tr key={index}>
                        <td className="">
                          <div className="fn-profile">
                            <img
                              src={p.images?.length ? p.images[0] : ""}
                              alt=""
                              className="animal"
                            />
                          </div>
                        </td>
                        <td>{p.name}</td>
                        <td>{p.category}</td>
                        <td>{p.quantity}</td>
                        <td>₦{p.price}</td>
                        <td>
                          <div className="flex items-center justify-start w-full gap-4">
                            <Link to={`/farmer/product/${p.id}`}>
                              <button>
                                <Icon
                                  icon="lets-icons:view"
                                  width="64"
                                  height="64"
                                  className="text-gray-700 hover:text-green-700"
                                />
                              </button>
                            </Link>
                            <button
                            onClick={()=>deleteProduct(p.id)}>
                              <Icon
                                icon="fluent:delete-24-regular"
                                width="64"
                                height="64"
                                style={{ color: "black" }}
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/*  */}
                <div className="flex flex-row justify-between items-center p-[24px] mp-pagination">
                  <div className="">Page 1 of 10</div>
                  <div className="flex gap-[8px]">
                    <button>Previous</button>
                    <button>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProduct;
