import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const { data } = await axios.post("http://localhost:3000/auth/login", {
                email: formData.email,
                password: formData.password,
            });

            if (data?.token?.accessToken) {
                localStorage.setItem("token", data.token.accessToken);
                localStorage.setItem("refreshToken", data.token.refreshToken);

                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                }

                navigate("/home");
            } else {
                navigate("/register");
            }
        } catch (err) {
            setError("Login yoki parol xato!");
        }
    };

    return (
        <>
           

            <div className="flex justify-center mt-[100px]">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">Sign in</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b outline-none py-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border-b outline-none py-2"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="w-4 h-4"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot
                            </a>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                    <Link to="/register" className='text-blue-500 flex justify-center mt-[10px]'>Register</Link>
                </div>
            </div>
        </>
    );
}
