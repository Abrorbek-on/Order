import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, KeyRound } from "lucide-react";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        otp: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const res = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    otp: Number(formData.otp) // 🔑 OTP raqam sifatida yuboriladi
                })
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Ro‘yxatdan o‘tishda xatolik!");

            setSuccess("✅ Ro‘yxatdan o‘tish muvaffaqiyatli!");
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setError(err.message);
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
                            🍔
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Ro‘yxatdan o‘tish</h2>
                            <p className="text-sm opacity-90">Hisobingizni yarating va OTP orqali tasdiqlang</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">{error}</div>}
                    {success && <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">{success}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <User size={16} /> To‘liq ism
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Ismingizni kiriting"
                                className="mt-2 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                required
                            />
                        </div>

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

                        <div>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <KeyRound size={16} /> OTP kod
                            </label>
                            <input
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                placeholder="123456"
                                className="mt-2 w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center gap-2 items-center bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white py-2 rounded-lg font-semibold shadow-md transition disabled:opacity-50"
                        >
                            {loading ? "Yuklanmoqda..." : "Ro‘yxatdan o‘tish"}
                        </button>
                    </form>

                    <div className="mt-4 text-center text-sm">
                        <Link to="/login" className="text-orange-600 hover:underline">
                            Hisobingiz bormi? Kirish
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

export default Register;
