import React, { useState } from "react";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090] grid place-items-center">
      <form action="" >
       <div style={{ animation: "fadeIn 2s" }} className="place-self-center max-w-90 bg-white flex  flex-col gap-8 px-7 py-8 rounded-xl text-[14px]  ">
       <div className="flex justify-between">
          <h2 className="text-2xl font-medium">{currState}</h2>
          <span onClick={() => setShowLogin(false)}>
            <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
          </span>
        </div>
        <div className="flex flex-col gap-5 ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required  className="outline-none border border-solid border-gray-400 p-2.5 rounded-sm" />
          )}
          <input type="email" name="email" id="email" placeholder="email"  className="outline-none border border-solid border-gray-400 p-2.5 rounded-sm"/>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required className="outline-none border border-solid border-gray-400 p-2.5 rounded-sm"
          />
        </div>
        <button className="bg-red-400 p-2.5 rounded-sm text-white text-sm cursor-pointer"> {currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="flex gap-2 -mt-4 items-start">
          <input className="mt-1" type="checkbox" name="checkbox" id="" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Sign Up" ? (
          <p>
            Already have an Account?{" "}
            <span className="text-blue-600 cursor-pointer underline"  onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        ) : (
          <p>
            Create a New Account?{" "}
            <span  className="text-blue-600 cursor-pointer underline" onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        )}
       </div>
      </form>
    </div>
  );
};

export default LoginPopup;
