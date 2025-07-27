import React from 'react'
import images from '../assets/asset'

const AppDownload = () => {
  return (
    <div className="m-auto mt-25 text-4xl text-center  font-medium">
      <p>
        Better Experience Download <br /> Zomato App
      </p>
      <div className="flex justify-center gap-3 mt-10">
        <img className='cursor-pointer duration-200 hover:scale-105' src={images.appStore} alt="" />
        <img className='cursor-pointer duration-200 hover:scale-105' src={images.googleStore} alt="" />
      </div>
    </div>
  );
}

export default AppDownload