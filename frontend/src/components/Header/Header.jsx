import React from 'react'
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <>
      <Navbar />

      <div
        style={{ margin: "30px auto", padding: "0px" }}
        className="h-[38vw]  bg-[url(../public/Header.png)] bg-no-repeat bg-cover rounded-2xl relative "
      >
        <div
          style={{ animation: "fadeIn 3s" }}
          className=" absolute flex flex-col items-start gap-[1.5vw] max-w-1/2  bottom-1/10 right-[6vw]"
        >
          <h2 className="text-2xl  font-medium text-white text-[max(4.5vw,22px)]">
            Order your Favoroit food
          </h2>
          <p className="text-white text-[1vw]">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae
            rem tempora corrupti, voluptatibus, neque possimus sequi dolores
            aliquam hic est eaque veritatis corporis aspernatur fugit omnis
            error amet veniam!
          </p>
          <button
            style={{ padding: "1vw 2.3vw" }}
            className="border-none text-[#747474] font-medium px-[1vw] py-[2.3vw] bg-white text-[max(1vw, 13px] rounded-4xl"
          >
            ViewMenu
          </button>
        </div>
      </div>
    </>
  );
}

export default Header