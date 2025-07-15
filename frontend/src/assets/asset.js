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

];

export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food,
    price: 12,
    description:
      " Food Provides essential nutrients for overall health and well-being",
    category: "Salad",
  },

  {
    _id: "2",
    name: "Margherita Pizza",
    image: food,
    price: 15,
    description: "Classic pizza with tomato, mozzarella, and fresh basil",
    category: "Pizza",
  },
  {
    _id: "3",
    name: "Beef Burger",
    image: food,
    price: 18,
    description: "Juicy beef patty with lettuce, tomato, and cheese",
    category: "Burger",
  },
  {
    _id: "4",
    name: "Caesar Salad",
    image: food,
    price: 13,
    description: "Crisp romaine lettuce with Caesar dressing and croutons",
    category: "Salad",
  },
  {
    _id: "5",
    name: "Pepperoni Pizza",
    image: food,
    price: 17,
    description: "Spicy pepperoni with cheese and tomato sauce",
    category: "Pizza",
  },
  {
    _id: "6",
    name: "Veggie Burger",
    image: food,
    price: 16,
    description: "Plant-based patty with grilled vegetables and hummus",
    category: "Burger",
  },
  {
    _id: "7",
    name: "Chicken Wrap",
    image: food,
    price: 14,
    description: "Grilled chicken with veggies in a soft wrap",
    category: "Steak",
  },
  {
    _id: "8",
    name: "Tuna Sandwich",
    image: food,
    price: 11,
    description: "Tuna salad with lettuce on whole grain bread",
    category: "Soup",
  },
  {
    _id: "9",
    name: "BBQ Chicken Pizza",
    image: food,
    price: 19,
    description: "Pizza with BBQ sauce, chicken, and onions",
    category: "Pizza",
  },
  {
    _id: "10",
    name: "Falafel Bowl",
    image: food,
    price: 13,
    description: "Falafel with quinoa, veggies, and tahini sauce",
    category: "Soup",
  },
  {
    _id: "11",
    name: "Caesar Salad",
    image: food,
    price: 14,
    description: "Classic Caesar with romaine, croutons, and creamy dressing",
    category: "Salad",
  },
  {
    _id: "12",
    name: "Quinoa Salad",
    image: food,
    price: 10,
    description:
      "High-protein salad with quinoa, veggies, and lemon vinaigrette",
    category: "Salad",
  },
  {
    _id: "13",
    name: "Chocolate Lava Cake",
    image: food,
    price: 18,
    description: "Rich molten chocolate center with a soft outer cake layer",
    category: "Dessert",
  },
  {
    _id: "14",
    name: "Strawberry Cheesecake",
    image: food,
    price: 16,
    description: "Creamy cheesecake topped with fresh strawberries and glaze",
    category: "Dessert",
  },
  {
    _id: "15",
    name: "Tiramisu",
    image: food,
    price: 17,
    description:
      "Layered Italian dessert with coffee-soaked ladyfingers and mascarpone",
    category: "Dessert",
  },
  // Pasta
  {
    _id: "16",
    name: "Spaghetti Bolognese",
    image: food,
    price: 20,
    description: "Classic spaghetti with rich meat sauce and parmesan",
    category: "Pasta",
  },
  {
    _id: "17",
    name: "Penne Alfredo",
    image: food,
    price: 19,
    description: "Creamy Alfredo sauce with penne and herbs",
    category: "Pasta",
  },
  {
    _id: "18",
    name: "Pesto Fettuccine",
    image: food,
    price: 21,
    description: "Fettuccine tossed in fresh basil pesto and garlic",
    category: "Pasta",
  },

  // Fries
  {
    _id: "19",
    name: "Classic French Fries",
    image: food,
    price: 8,
    description: "Crispy golden fries with a touch of sea salt",
    category: "Fries",
  },
  {
    _id: "20",
    name: "Cheese Fries",
    image: food,
    price: 10,
    description: "Loaded with melted cheddar and herbs",
    category: "Fries",
  },
  {
    _id: "21",
    name: "Sweet Potato Fries",
    image: food,
    price: 9,
    description: "Crispy sweet potato fries with a dash of paprika",
    category: "Fries",
  },

  // Steak
  {
    _id: "22",
    name: "Grilled Ribeye",
    image: food,
    price: 32,
    description: "Juicy ribeye steak grilled to perfection",
    category: "Steak",
  },
  {
    _id: "23",
    name: "Sirloin Steak",
    image: food,
    price: 28,
    description: "Tender sirloin cut with herb butter topping",
    category: "Steak",
  },
  {
    _id: "24",
    name: "Filet Mignon",
    image: food,
    price: 35,
    description: "Premium cut filet with garlic rosemary glaze",
    category: "Steak",
  },
];

export default images;
