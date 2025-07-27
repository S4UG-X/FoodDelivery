import React from "react";
import images from "../assets/asset";
const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-20">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr]">
        <div className=" flex flex-col items-start gap-5">
          <img className="h-8" src={images.zomato} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            consequuntur corporis iste quos quas, cupiditate provident labore
            dolorum ab aliquid cumque doloremque sequi dolorem in fugit minus
            velit distinctio eos.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-square-twitter fa-xl mr-4"></i>
            <i className="fa-brands fa-facebook fa-xl mr-4"></i>
            <i className="fa-brands fa-linkedin fa-xl mr-4"></i>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-5">
          <h2  className="text-white text-xl font-medium">COMPANY</h2>
          <ul>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us </li>
            <li className="cursor-pointer">Delivery </li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        <div className=" flex flex-col items-start gap-5">
          <h2 className="text-white text-xl font-medium">GET IN TOUCH</h2>
          <ul>
            <li className="cursor-pointer">+1-212-222-8746</li>
            <li className="cursor-pointer">contact@zomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 my-5 text-gray-500 " />
      <p className="">Copyright 2025 Zomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
