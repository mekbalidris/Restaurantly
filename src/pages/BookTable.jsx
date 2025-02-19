import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import process from '../../../.env'

export default function BookTable({ isAuthenticated }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        tableNumber: "",
        date: "",
        hour: "",
        numberOfPeople: "",
        foodChoices: {} // Store food choices as { foodName: quantity }
    });

    const foodOptions = ["Pasta", "Pizza", "Burger", "Salad", "Steak"];
    const tableOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/accessaccount"); 
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFoodChoiceChange = (e) => {
        const { name, value, checked } = e.target;
        const updatedChoices = { ...formData.foodChoices };

        if (checked) {
            updatedChoices[name] = 1; // Default quantity is 1
        } else {
            delete updatedChoices[name]; // Remove the food item if unchecked
        }

        setFormData({ ...formData, foodChoices: updatedChoices });
    };

    const handleQuantityChange = (e, food) => {
        const { value } = e.target;
        const updatedChoices = { ...formData.foodChoices };

        if (value > 0) {
            updatedChoices[food] = parseInt(value, 10); // Update the quantity
        } else {
            delete updatedChoices[food]; // Remove the food item if quantity is 0
        }

        setFormData({ ...formData, foodChoices: updatedChoices });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/book-table`, formData);
            console.log("Booking response:", response.data);
            alert("Table successfully booked!");
        } catch (error) {
            console.error("Error booking table:", error.response?.data || error.message);
            alert("Failed to book table. Please try again.");
        }
    };

    return (
        <div className="min-h-screen pt-[4rem] w-full flex items-center justify-center bg-secondbg p-4">
            <div className="w-full max-w-4xl bg-secondbg bg-opacity-90 p-8 rounded-2xl shadow-2xl">
                <h1 className="text-4xl font-playfair text-center mb-8 text-golden">Book a Table</h1>
                <form 
                    onSubmit={handleSubmit} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Name Field */}
                    <div className="flex flex-col">
                        <label className="block font-medium mb-2 text-white">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full p-3 border border-golden bg-mainbg rounded-md focus:outline-none focus:ring-2 focus:ring-golden"
                            required
                        />
                    </div>

                    {/* Table Number Field */}
                    <div className="flex flex-col">
                        <label className="block font-medium mb-2 text-white">Table Number</label>
                        <select
                            name="tableNumber"
                            value={formData.tableNumber}
                            onChange={handleChange}
                            className="w-full p-3 border border-golden bg-mainbg rounded-md focus:outline-none focus:ring-2 focus:ring-golden"
                            required
                        >
                            <option value="">Select a table</option>
                            {tableOptions.map((table) => (
                                <option key={table} value={table}>{`Table ${table}`}</option>
                            ))}
                        </select>
                    </div>

                    {/* Date Field */}
                    <div className="flex flex-col">
                        <label className="block font-medium mb-2 text-white">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-3 border border-golden bg-mainbg rounded-md focus:outline-none focus:ring-2 focus:ring-golden"
                            required
                        />
                    </div>

                    {/* Hour Field */}
                    <div className="flex flex-col">
                        <label className="block font-medium mb-2 text-white">Hour</label>
                        <input
                            type="time"
                            name="hour"
                            value={formData.hour}
                            onChange={handleChange}
                            className="w-full p-3 border border-golden bg-mainbg rounded-md focus:outline-none focus:ring-2 focus:ring-golden"
                            required
                        />
                    </div>

                    {/* Number of People Field */}
                    <div className="flex flex-col">
                        <label className="block font-medium mb-2 text-white">Number of People</label>
                        <input
                            type="number"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            placeholder="Enter number of people"
                            className="w-full p-3 border border-golden bg-mainbg rounded-md focus:outline-none focus:ring-2 focus:ring-golden"
                            min="1"
                            required
                        />
                    </div>

                    {/* Food Choices */}
                    <div className="md:col-span-2">
                        <label className="block font-medium mb-2 text-white">Food Choices</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            {foodOptions.map((food) => (
                                <div key={food} className="flex flex-col gap-2">
                                    <label className="flex items-center gap-2 text-white">
                                        <input
                                            type="checkbox"
                                            name={food}
                                            checked={!!formData.foodChoices[food]}
                                            onChange={handleFoodChoiceChange}
                                            className="focus:ring-golden"
                                        />
                                        {food}
                                    </label>
                                    {formData.foodChoices[food] && (
                                        <input
                                            type="number"
                                            min="1"
                                            value={formData.foodChoices[food]}
                                            onChange={(e) => handleQuantityChange(e, food)}
                                            className="w-full p-2 border border-golden bg-mainbg rounded-md focus:outline-none focus:ring-2 focus:ring-golden"
                                            placeholder="Quantity"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-golden text-mainbg p-3 rounded-md hover:bg-opacity-80 transition-all"
                        >
                            Book Table
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}