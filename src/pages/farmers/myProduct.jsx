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
      console.log(products);
      setFarmProducts(products.farmProducts);
      console.log("farm products", farmProducts);
    } catch (e) {
      console.log(e);
    }
  };
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
            <h5 className="text-left">{farmProducts?.length || 0} items</h5>
            <div className="addProduct-rd w-full h-full">
              <div className="flex gap-[16px] p-[16px]">
                {/* search bar */}
                <Searchbar />
                {/* sortby */}
                <Sortby />
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
                          <Option />
                        </td>
                      </tr>
                    ))}
                    {/* 02 */}
                    {/* <tr>
                      <td className="">
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                      </td>
                      <td>Meadow Belle</td>
                      <td>Dairy Cow</td>
                      <td>15</td>
                      <td>₦20,000</td>
                      <td>
                        <Icon
                          icon="iwwa:option-horizontal"
                          color="#909090"
                          width="24"
                          height="24"
                          rotate={1}
                        />
                      </td>
                    </tr> */}
                    {/* 03 */}
                    {/* <tr>
                      <td className="">
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                      </td>
                      <td>Meadow Belle</td>
                      <td>Dairy Cow</td>
                      <td>15</td>
                      <td>₦20,000</td>
                      <td>
                        <Icon
                          icon="iwwa:option-horizontal"
                          color="#909090"
                          width="24"
                          height="24"
                          rotate={1}
                        />
                      </td>
                    </tr> */}
                    {/* 04 */}
                    {/* <tr>
                      <td className="">
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                      </td>
                      <td>Meadow Belle</td>
                      <td>Dairy Cow</td>
                      <td>15</td>
                      <td>₦20,000</td>
                      <td>
                        <Icon
                          icon="iwwa:option-horizontal"
                          color="#909090"
                          width="24"
                          height="24"
                          rotate={1}
                        />
                      </td>
                    </tr> */}
                    {/* 05 */}
                    {/* <tr>
                      <td className="">
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                      </td>
                      <td>Meadow Belle</td>
                      <td>Dairy Cow</td>
                      <td>15</td>
                      <td>₦20,000</td>
                      <td>
                        <Icon
                          icon="iwwa:option-horizontal"
                          color="#909090"
                          width="24"
                          height="24"
                          rotate={1}
                        />
                      </td>
                    </tr> */}
                    {/* 06 */}
                    {/* <tr>
                      <td className="">
                        <div className="fn-profile">
                          <img
                            src="https://imgs.search.brave.com/9H0-mUVGmmzqTU9AM9qiNEzDsupKvLlKiEDZ2efNb98/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTgyNzY4L3Iv/aWwvNmE4ZTc5LzM3/MDEwNDE1MjgvaWxf/NjAweDYwMC4zNzAx/MDQxNTI4X21kNzcu/anBn"
                            alt=""
                            className="animal"
                          />
                        </div>
                      </td>
                      <td>Meadow Belle</td>
                      <td>Dairy Cow</td>
                      <td>15</td>
                      <td>₦20,000</td>
                      <td>
                        <Icon
                          icon="iwwa:option-horizontal"
                          color="#909090"
                          width="24"
                          height="24"
                          rotate={1}
                        />
                      </td>
                    </tr> */}
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
