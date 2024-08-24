import Option from "../pages/farmers/component/optionMyProduct";

const OrderTable = ({ orders }) => {
  return (
    <table className="mb-[32px]">
      <thead>
        <tr className="">
          <th className="">S/N</th>
          <th className="">Livestock</th>
          <th>Units</th>
          <th className="">Delivery status</th>
          <th>Date</th>

          <th>Price</th>
          <th className="">Order ID</th>
          <th className="">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => {
          return (
            <tr key={index} className="cursor-pointer hover:bg-gray-50 w-full">
              <td className="">{index + 1}</td>
              <td>{order.orderNumber}</td>
              <td>{order?.quantity}</td>
              <td>{order?.orderStatus}</td>
              <td>{order?.orderDate}</td>
              <td>
                {" "}
                {new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "NGN",
                }).format(order?.totalCost)}
              </td>

              <td>{order?.reference} </td>
              <td>
                <Option />
              </td>
            </tr>
          );
        })}
        {/* 01 */}
      </tbody>
    </table>
  );
};

export default OrderTable;
