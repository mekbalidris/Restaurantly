import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setIsAuthenticated, isAuthenticated }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
            const response = await axios.post("http://localhost:3001/register", formData);
            console.log("Registration response:", response.data); // Log the response
            localStorage.setItem("accessToken", response.data.access_token);
            setIsAuthenticated(true);

            console.log("Registered successfully:", response.data);
            navigate("/");
        } catch (error) {
            console.error("Error during registration:", error.response?.data || error.message); // Log the error
            setError(error.response?.data.errors || { server: 'An error occurred. Please try again.' });
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
            }}
        >
            {/* Background Image */}
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI2Nzd8MHwxfGFsbHwxfHx8fHx8fHwxNjk1MDc5NzYw&ixlib=rb-4.0.3&q=80&w=1080')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            ></div>

            {/* Blur Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(1, 7, 0, 0.5)",
                    filter: "blur(8px)",
                    zIndex: 1,
                }}
            />

            <div className="flex flex-col justify-center items-center text-center h-full relative z-10">
                <div className="w-full max-w-md space-y-8 p-10 bg-secondbg bg-opacity-90 rounded-2xl shadow-2xl mt-12">
                    <h1 className="text-4xl font-bold text-center mb-6 text-golden">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
                        {/* Name Field */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className={`w-full px-4 py-2 border rounded-lg ${error.name ? "border-red-500" : "border-gray-300"}`}
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
                                className={`w-full px-4 py-2 border rounded-lg ${error.email ? "border-red-500" : "border-gray-300"}`}
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
                                className={`w-full px-4 py-2 border rounded-lg ${error.password ? "border-red-500" : "border-gray-300"}`}
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
                                placeholder="Confirm Password"
                                className={`w-full px-4 py-2 border rounded-lg ${error.password_confirmation ? "border-red-500" : "border-gray-300"}`}
                            />
                            {error.password_confirmation && <p className="text-red-500 text-sm">{error.password_confirmation[0]}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}