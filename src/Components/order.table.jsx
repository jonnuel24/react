import { useState } from "react";
import Option from "../pages/farmers/component/optionMyProduct";

const OrderTable = ({ orders, updateOrderStatus }) => {
  const [isOpenManage, setIsOpenManage] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const orderStatuses = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const toggleManage = (orderIndex) => {
    setSelectedOrder(orderIndex);
    setNewStatus(orders[orderIndex]?.orderStatus); // Initialize with current status
    setIsOpenManage(!isOpenManage);
  };

  const handleStatusChange = () => {
    updateOrderStatus(selectedOrder, newStatus);
    setIsOpenManage(false); // Close the modal
  };

  return (
    <div className="relative">
      <table className="mb-[32px]">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Order Number</th>
            <th>Date</th>
            <th>Delivery Status</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="w-full">
              <td>{index + 1}</td>
              <td>{order?.orderNumber}</td>
              <td>{order?.orderDate}</td>
              <td>{order?.orderStatus}</td>
              <td>
                {new Intl.NumberFormat("en-us", {
                  style: "currency",
                  currency: "NGN",
                }).format(order?.totalCost)}
              </td>
              <td className="relative">
                <button onClick={() => toggleManage(index)} className="p-2 rounded-lg border hover:bg-gray-50">Manage</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isOpenManage && selectedOrder !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="w-[300px] bg-white shadow-2xl border rounded-md p-4 relative">
            <button
              onClick={() => setIsOpenManage(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Manage Order</h2>
            <div className="flex flex-col items-start w-full space-y-2">
              <div className="flex justify-between w-full">
                <p className="text-gray-500 font-medium">Order Number:</p>
                <div className="font-semibold text-gray-900">
                  {orders[selectedOrder]?.orderNumber}
                </div>
              </div>

              <div className="flex justify-between w-full">
                <p className="text-gray-500 font-medium">Date:</p>
                <div className="font-semibold text-gray-900">
                  {orders[selectedOrder]?.orderDate}
                </div>
              </div>

              <div className="flex justify-between w-full">
                <p className="text-gray-500 font-medium">Price:</p>
                <div className="font-semibold text-gray-900">
                  {orders[selectedOrder]?.totalCost}
                </div>
              </div>

              <div className="flex justify-between w-full">
                <p className="text-gray-500 font-medium">Current Status:</p>
                <div className="font-semibold text-gray-900">
                  {orders[selectedOrder]?.orderStatus}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Change Status
              </label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {orderStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleStatusChange}
              className="mt-4 px-4 py-2 bg-[#006300] text-white rounded hover:bg-[#006838]"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;
