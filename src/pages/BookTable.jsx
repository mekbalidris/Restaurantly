import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookTable({ isAuthenticated }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        tableNumber: "",
        date: "",
        hour: "",
        numberOfPeople: "",
        foodChoices: []
    });

    const foodOptions = ["Pasta", "Pizza", "Burger", "Salad", "Steak"];
    const tableOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/accessaccount");
        }
    }, [navigate, isAuthenticated]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFoodChoiceChange = (e) => {
        const { value, checked } = e.target;
        const updatedChoices = checked
            ? [...formData.foodChoices, value]
            : formData.foodChoices.filter((choice) => choice !== value);
        setFormData({ ...formData, foodChoices: updatedChoices });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
        alert("Table successfully booked!");
    };

    return (
        <div className="max-w-full mx-auto mt-16 p-8 bg-secondbg shadow-md rounded-lg text-white">
            <h1 className="text-10 font-playfair text-center mb-6 title">Book a Table</h1>
            <form 
                onSubmit={handleSubmit} 
                className="flex flex-col lg:flex-row flex-wrap gap-6"
            >
                {/* Name Field */}
                <div className="w-full lg:w-auto ">
                    <label className="block font-medium mb-2">Your Name</label>
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
                <div className="w-full lg:w-auto">
                    <label className="block font-medium mb-2">Table Number</label>
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
                <div className="w-full lg:w-auto">
                    <label className="block font-medium mb-2">Date</label>
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
                <div className="w-full lg:w-auto">
                    <label className="block font-medium mb-2">Hour</label>
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
                <div className="w-full lg:w-64">
                    <label className="block font-medium mb-2">Number of People</label>
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
                <div className="w-full lg:w-1/2">
                    <label className="block font-medium mb-2">Food Choices</label>
                    <div className="flex flex-wrap gap-4">
                        {foodOptions.map((food) => (
                            <label key={food} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="foodChoices"
                                    value={food}
                                    onChange={handleFoodChoiceChange}
                                    className="focus:ring-golden"
                                />
                                {food}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                    <button
                        type="submit"
                        className="w-full bg-golden text-mainbg p-3 rounded-md hover:bg-opacity-80 transition-all"
                    >
                        Book Table
                    </button>
                </div>
            </form>
        </div>
    );
}
