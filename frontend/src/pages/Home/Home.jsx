import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExpressMenu from '../../components/ExpressMenu/ExpressMenu'

const Home = () => {

  let [category, setCategory] = useState("All")
  return (
    <div>

      <Header/>
      <ExpressMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home 