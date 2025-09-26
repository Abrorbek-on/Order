import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        try {
            const { data } = await axios.post("http://localhost:5000/auth/login", {
                email: formData.email,
                password: formData.password,
            });

            if (data?.accessToken) {
                localStorage.setItem("token", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                }

                navigate("/");
            } else {
                navigate("/register");
            }
        } catch (err) {
            setError("Login yoki parol xato!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-100 via-rose-100 to-red-100 p-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-200">
                <div className="bg-gradient-to-r from-orange-400 to-red-400 p-6 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                            🔑
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Login</h2>
                            <p className="text-sm opacity-90">Hisobingizga kiring</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <Mail size={16} /> Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="siz@example.com"
                                className="mt-2 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <Lock size={16} /> Parol
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Parol kiriting"
                                className="mt-2 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
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

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center items-center bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white py-2 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
                        >
                            {loading ? "Yuklanmoqda..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        <span>Hisobingiz yo‘qmi? </span>
                        <Link to="/register" className="text-orange-600 hover:underline font-medium">
                            Ro‘yxatdan o‘tish
                        </Link>
                    </div>
                </div>

                <div className="bg-orange-50 px-6 py-4 border-t border-orange-100 text-sm text-gray-600 text-center">
                    <span className="font-medium">🍽️ Taomlar ilovasi</span> — Bon Appétit!
                </div>
            </div>
        </div>
    );
}
