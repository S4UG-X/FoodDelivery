import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    // console.log(food_list); 
  return (
    <div className="mt-8">
      <h2 className="text-[max(2vw,24px)] font-semibold ">
        Top Dishes Near you
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-8 gap-x-12 mt-8">
        {" "}
        {food_list.map((item, index) => {
          if(category==="All" || category===item.category) {
           return <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
          }
})}
      </div>
    </div>
  );
}

export default FoodDisplay