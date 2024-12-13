import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup({setisAuthenticated, isAuthenticated, token}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register", formData);
            console.log("Registration Successful:", response.data);
            token = response.data.access_token;
            setisAuthenticated(true);

            setFormData({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            });
            setError({});

            navigate("/");
        } catch (error) {
            console.error("Error during registration:", error.response?.data);
            setError(error.response?.data.errors || {});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 mt-32">
            {/* Name Field */}
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`text-orange-500 ml-110 ${error.name ? "border-red-500" : ""}`}
                />
                {error.name && <p className="text-red-500 text-sm">{error.name[0]}</p>}
            </div>

            {/* Email Field */}
            <div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`text-orange-500 ml-110 ${error.email ? "border-red-500" : ""}`}
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
                    className={`text-orange-500 ml-110 ${error.password ? "border-red-500" : ""}`}
                />
                {error.password && <p className="text-red-500 text-sm">{error.password[0]}</p>}
            </div>

            {/* Password Confirmation Field */}
            <div>
                <input
                    type="password"
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    placeholder="Password Confirmation"
                    className={`text-orange-500 ml-110 ${
                        error.password_confirmation ? "border-red-500" : ""
                    }`}
                />
                {error.password_confirmation && (
                    <p className="text-red-500 text-sm">{error.password_confirmation[0]}</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 mt-4 hover:bg-orange-600"
            >
                Submit
            </button>
        </form>
    );
}
