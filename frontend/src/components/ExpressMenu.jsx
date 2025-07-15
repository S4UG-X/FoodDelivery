import React from 'react'
import { menu_list } from '../assets/asset'
const ExpressMenu = ({category, setCategory}) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium text-2xl">Explore our Menu</h1>
      <p className="max-w-[80%]">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
        perferendis rerum doloremque ad repellendus fugit inventore deserunt
        quaerat. Ab deleniti sit repellat earum ut fugit illum deserunt iure
        quibusdam quam.
      </p> 

      <div className="gap-8 text-center flex justify-start items-center overflow-x-scroll no-scrollbar ">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="flex-shrink-0 text-center cursor-pointer"
          >
            <img
              className={`imgMenu ${
                category == item.menu_name
                  ? "border-2 border-red-400 border-solid"
                  : ""
              }`}
              src={item.menu_image}
            />
            <p className="pointer text-[#747474] text-[max(1.4vw, 16px)]">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr
        style={{ margin: "10px 0px" }}
        className="h-0.5 bg-[#e2e2e2] border-none "
      />
    </div>
  );
}

export default ExpressMenu