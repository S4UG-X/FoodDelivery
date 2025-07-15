import React, { useContext, useState } from "react";
import images from "../assets/asset";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {

  const {  cartItems,  addToCart, removeFromCart,} = useContext(StoreContext)
  let [itemCount, setItemCount] = useState(0);
  return (
    <div
      style={{ animation: "fadeIn 1s" }}
      className="w-full m-auto rounded-2xl  shadow-[0px_0px_10px_#00000040] "
    >
      <div className="relative">
        <img className=" w-full rounded-t-2xl" src={image} alt="" />

        {!cartItems[id] ? (
          <div
            onClick={() => addToCart(id)}
            className="size-8 absolute -bottom-4 right-4 cursor-pointer rounded-full bg-green-400 flex items-center justify-center"
          >
            <i className="fa-solid fa-plus text-white text-sm"></i>
          </div>
        ) : (
          <>
            <div
              onClick={() => addToCart(id)}
              className="size-8 absolute -bottom-4 right-4 cursor-pointer rounded-full bg-green-400 flex items-center justify-center"
            >
              <i className="fa-solid fa-plus text-white  text-sm"></i>
            </div>

            <p className="absolute -bottom-2.5 right-14 transform text-sm font-bold">
              {cartItems[id]}
            </p>

            <div
              onClick={() => removeFromCart(id)}
              className="size-8 absolute -bottom-4 right-18 cursor-pointer rounded-full bg-red-400 flex items-center justify-center"
            >
              <i className="fa-solid fa-minus text-white text-sm"></i>
            </div>
          </>
        )}
      </div>
      <div className="p-5">
      
        <div className="flex justify-between">
          <p className="font-medium"> {name} </p>
          <img className="w-20" src={images.ratings} alt="" />
        </div>
        <p className="text-[#676767] text-[14px]"> {description}</p>
        <p className="text-red-400 text-xl font-medium mt-2.5">${price} </p>
      </div>
    </div>
  );
};

export default FoodItem;
