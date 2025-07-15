import zomato from "./zomato.png";
import ratings from "./ratings.png";

import menu_1 from "./menu_1.png";
import menu_2 from "./menu_1.png";
import menu_3 from "./menu_1.png";
import menu_4 from "./menu_1.png";
import menu_5 from "./menu_1.png";
import menu_6 from "./menu_1.png";
import menu_7 from "./menu_1.png";
import menu_8 from "./menu_1.png";
import food from "./menu_1.png";

const images = {
  zomato,
  ratings,
 
};

export const menu_list = [
  { menu_name: "Salad", menu_image: menu_1 },
  { menu_name: "Pizza", menu_image: menu_2 },
  { menu_name: "Burger", menu_image: menu_3 },
  { menu_name: "Pasta", menu_image: menu_4 },
  { menu_name: "Soup", menu_image: menu_5 },
  { menu_name: "Fries", menu_image: menu_6 },
  { menu_name: "Steak", menu_image: menu_7 },
  { menu_name: "Dessert", menu_image: menu_8 },
  { menu_name: "Dessert", menu_image: menu_8 },
  { menu_name: "Dessert", menu_image: menu_8 },
  { menu_name: "Dessert", menu_image: menu_8 },
  { menu_name: "Dessert", menu_image: menu_8 },
];

export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food,
    price: 12,
    description:
      " Food Provides essential nutrients for overall health and well-being",
    category: "salad",
  },

  {
    _id: "2",
    name: "Margherita Pizza",
    image: food,
    price: 15,
    description: "Classic pizza with tomato, mozzarella, and fresh basil",
    category: "pizza",
  },
  {
    _id: "3",
    name: "Beef Burger",
    image: food,
    price: 18,
    description: "Juicy beef patty with lettuce, tomato, and cheese",
    category: "burger",
  },
  {
    _id: "4",
    name: "Caesar Salad",
    image: food,
    price: 13,
    description: "Crisp romaine lettuce with Caesar dressing and croutons",
    category: "salad",
  },
  {
    _id: "5",
    name: "Pepperoni Pizza",
    image: food,
    price: 17,
    description: "Spicy pepperoni with cheese and tomato sauce",
    category: "pizza",
  },
  {
    _id: "6",
    name: "Veggie Burger",
    image: food,
    price: 16,
    description: "Plant-based patty with grilled vegetables and hummus",
    category: "burger",
  },
  {
    _id: "7",
    name: "Chicken Wrap",
    image: food,
    price: 14,
    description: "Grilled chicken with veggies in a soft wrap",
    category: "wrap",
  },
  {
    _id: "8",
    name: "Tuna Sandwich",
    image: food,
    price: 11,
    description: "Tuna salad with lettuce on whole grain bread",
    category: "sandwich",
  },
  {
    _id: "9",
    name: "BBQ Chicken Pizza",
    image: food,
    price: 19,
    description: "Pizza with BBQ sauce, chicken, and onions",
    category: "pizza",
  },
  {
    _id: "10",
    name: "Falafel Bowl",
    image: food,
    price: 13,
    description: "Falafel with quinoa, veggies, and tahini sauce",
    category: "bowl",
  },
];

export default images;
