import React, { useState } from "react";
import images from "../../assets/asset";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="px-5 flex justify-between items-center   ">
      <img src={images.zomato} alt="" className="w-35" />
      <ul className="flex gap-5 text-[#49557e] text-[18px]">
        <li
          onMouseOver={() => setMenu("home")}
          className={menu === "home" ? "underline" : ""}
        >
          Home
        </li>

        <li
          onMouseOver={() => setMenu("menu")}
          className={menu === "menu" ? "underline" : ""}
        >
          menu
        </li>

        <li
          onMouseOver={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "underline" : ""}
        >
          mobile-app
        </li>
        <li
          onMouseOver={() => setMenu("contactus")}
          className={menu === "contactus" ? "underline" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex items-center gap-10">
        <i className="fas fa-search"></i>
        <div className="relative">
          <i class="fa-solid fa-basket-shopping"></i>
          <div className="absolute min-h-[10px] min-w-[10px] bg-red-400 rounded -top-2 -right-2"></div>
        </div>
        <button
          style={{ padding: "8px 18px" }}
          className="bg-transparent text-[#49557e] text-[18px] border border-solid border-red-300  rounded-[48px] cursor-pointer hover:bg-[#fff4f2] transition duration-300"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
