import React, { useState } from 'react'
import Header from '../components/Header'
import ExpressMenu from '../components/ExpressMenu'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {

  let [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExpressMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home 