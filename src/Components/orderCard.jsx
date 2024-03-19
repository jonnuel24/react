import React from "react";


function OrderCard({
  imgsrc,
  style,
  orderNumber,
  placedDate,
  price,
  quantity,
}) {
  return (
    <div className="border border-gray-300 w-[442px] rounded-lg shadow-md p-4 flex flex-row items-center gap-[32px]">
      <div>
        <img src={imgsrc} alt="" />
      </div>
      <div className="flex flex-col items-start gap-[8px]">
        <label htmlFor="" style={style} className="text-[20px] font-bold ">
          {orderNumber}
        </label>
        <div className="font-medium text-[18px]">Placed on {placedDate}</div>
        <div className="flex flex-row items-center gap-[8px]">
          <label htmlFor="" className="text-[18px]">Quantity :</label>
          <div className="font-medium text-[18px]">{quantity}</div>
        </div>
        <div className="flex flex-row items-center gap-[8px]">
          <label htmlFor="" className="text-[18px]">Price :</label>
          <div className="font-medium text-[18px]">N{price}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
