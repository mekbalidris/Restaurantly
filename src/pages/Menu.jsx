import Food from "../sidecomponents/Food.jsx";
import chicken from "../assets/dishes/chicken.png";
import khodra from "../assets/dishes/khodra.png";
import ma9aron from "../assets/dishes/ma9aron.png";
import ma9aronlux from "../assets/dishes/ma9aronlux.png";
import { useState } from "react";

export default function Menu() {
  // State for the selected category
  const [category, setCategory] = useState("All");

  // Menu categories
  const categories = ["All", "Starters", "Salads", "Specialty"];

  // Food items data
  const foodItems = [
    { id: 1, image: chicken, title: "Chicken Starter", description: "Lorem ipsum delicious starter chicken", price: "9.99", category: "Starters" },
    { id: 2, image: chicken, title: "Chicken Salad", description: "Fresh salad with grilled chicken", price: "8.99", category: "Salads" },
    { id: 3, image: ma9aron, title: "Special Chicken Dish", description: "Our specialty chicken dish", price: "15.99", category: "Specialty" },
    { id: 6, image: ma9aronlux, title: "Chicken Platter", description: "Delicious chicken platter", price: "12.99", category: "All" },
    { id: 7, image: chicken, title: "Chicken Starter", description: "Lorem ipsum delicious starter chicken", price: "9.99", category: "Starters" },
    { id: 8, image: chicken, title: "Chicken Salad", description: "Fresh salad with grilled chicken", price: "8.99", category: "Salads" },
    { id: 9, image: ma9aron, title: "Special Chicken Dish", description: "Our specialty chicken dish", price: "15.99", category: "Specialty" },
    { id: 10, image: ma9aronlux, title: "Chicken Platter", description: "Delicious chicken platter", price: "12.99", category: "All" },
    { id: 11, image: chicken, title: "Chicken Starter", description: "Lorem ipsum delicious starter chicken", price: "9.99", category: "Starters" },
    { id: 12, image: chicken, title: "Chicken Salad", description: "Fresh salad with grilled chicken", price: "8.99", category: "Salads" },
    { id: 13, image: ma9aron, title: "Special Chicken Dish", description: "Our specialty chicken dish", price: "15.99", category: "Specialty" },
    { id: 14, image: ma9aronlux, title: "Chicken Platter", description: "Delicious chicken platter", price: "12.99", category: "All" },
  ];

  // Filtered food items based on the selected category
  const filteredFoodItems = category === "All"
    ? foodItems
    : foodItems.filter((item) => item.category === category);

  return (

    <>
    <div id="menu">

    <div className="bg-secondbg flex flex-col justify-center h-screen w-full">
      {/* Menu Title */}
      <div className="flex flex-row mt-[15rem] lg:mt-[0]">
        <div className="pl-4 ml-105">
          <div className="flex flex-row items-center">
            <span className="text-gray-500">MENU</span>
            <div className="bg-golden" style={{ width: "150px", height: "1px", margin: "0 10px" }} />
          </div>
          <div className="title text-10">Check Our Tasty Menu</div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-row justify-center align-middle gap-6 mt-14">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`cursor-pointer ${cat === category ? "text-yellow-400 font-bold" : "text-white"}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Food Items */}
      <div className="bg-secondbg w-full pt-5 pl-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredFoodItems.slice(0, 4).map((food) => (
          <Food
            key={food.id}
            image={food.image}
            title={food.title}
            description={food.description}
            price={food.price}
          />
        ))}
      </div>
    </div>
    </div>

    </>
  );
}
