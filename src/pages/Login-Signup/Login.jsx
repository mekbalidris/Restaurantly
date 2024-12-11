import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/signup", formData);

            // Store the token in localStorage
            localStorage.setItem("accessToken", response.data.access_token);

            console.log("Signed up successfully:", response.data);

            // Redirect to the BookTable page after successful signup
            navigate("/book-table");
        } catch (error) {
            console.error("Error during signup:", error.response?.data);
            setError(error.response?.data.errors || {});
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-32">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4">
                {/* Email Field */}
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`text-orange-500 ${error.email ? "border-red-500" : ""}`}
                    />
                    {error.email && <p className="text-red-500 text-sm">{error.email[0]}</p>}
                </div>

                {/* Password Field */}
                <div>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className={`text-orange-500 ${error.password ? "border-red-500" : ""}`}
                    />
                    {error.password && <p className="text-red-500 text-sm">{error.password[0]}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 mt-4 hover:bg-orange-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
