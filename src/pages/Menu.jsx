import Food from "../sidecomponents/Food.jsx";
import chicken from "../assets/dishes/chicken.png";
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
    { id: 3, image: chicken, title: "Special Chicken Dish", description: "Our specialty chicken dish", price: "15.99", category: "Specialty" },
    { id: 4, image: chicken, title: "Chicken Platter", description: "Delicious chicken platter", price: "12.99", category: "All" },
  ];

  // Filtered food items based on the selected category
  const filteredFoodItems = category === "All"
    ? foodItems
    : foodItems.filter((item) => item.category === category);

  return (
    <div className="bg-secondbg flex flex-col justify-center h-full w-full">
      {/* Menu Title */}
      <div className="flex flex-row mt-8">
        <div className="pl-3 ml-105">
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
      <div className="bg-secondbg grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {filteredFoodItems.map((food) => (
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
  );
}
