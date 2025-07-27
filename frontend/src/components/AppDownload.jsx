import React from 'react'
import images from '../assets/asset'

const AppDownload = () => {
  return (
    <div className="m-auto mt-25 text-3xl text-center  font-medium">
      <p>
        Better Experience Download <br /> Zomato App
      </p>
      <div className="flex justify-center gap-3 mt-10">
        <img src={images.appStore} alt="" />
        <img src={images.googleStore} alt="" />
      </div>
    </div>
  );
}

export default AppDownload