import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookTable({isAuthenticated}) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tableNumber: "",
        date: "",
    });

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/accessaccount");
        }
    },);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 mt-32">
            {/* Table Number Field */}
            <div>
                <input
                    type="text"
                    name="tableNumber"
                    value={formData.tableNumber}
                    onChange={handleChange}
                    placeholder="Table Number"
                    className="text-orange-500 ml-110"
                />
            </div>

            {/* Date Field */}
            <div>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Date"
                    className="text-orange-500 ml-110"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 mt-4 hover:bg-orange-600"
            >
                Book Table
            </button>
        </form>
    );
}
