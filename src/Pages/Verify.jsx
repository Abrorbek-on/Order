"use client";

import React, { useState, useEffect } from "react";
import { Mail, KeyRound, ListChecks, CheckCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");
    const [otp, setOtp] = useState("");
    const [type, setType] = useState(location.state?.type || "REGISTER");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email) return setMessage("Iltimos, emailni kiriting.");
        if (!otp) return setMessage("Iltimos, OTP kodini kiriting.");
        if (!type) return setMessage("Iltimos, tasdiqlash turini tanlang.");
        setPayload({ email, otp, type });
    }

    useEffect(() => {
        if (!payload) return;

        async function verifyOTP() {
            try {
                setLoading(true);
                setMessage("");
                const res = await fetch("http://localhost:5000/verifications/verify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || "Xatolik yuz berdi");
                setMessage(`✅ ${data.message || "Tasdiq muvaffaqiyatli!"}`);
                setTimeout(() => navigate("/register"), 1500);
            } catch (err) {
                setMessage(`❌ Xatolik: ${err.message}`);
            } finally {
                setLoading(false);
                setPayload(null);
            }
        }

        verifyOTP();
    }, [payload, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-emerald-100 to-teal-100 p-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-green-200">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">🥗</div>
                        <div>
                            <h2 className="text-2xl font-bold">OTP Tasdiqlash</h2>
                            <p className="text-sm opacity-90">Email orqali olingan kodni kiriting</p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <ListChecks size={16} /> Tasdiqlash turi
                            </span>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                <option value="REGISTER">REGISTER</option>
                                <option value="RESET_PASSWORD">RESET_PASSWORD</option>
                                <option value="RESET_EMAIL">RESET_EMAIL</option>
                            </select>
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Mail size={16} /> Elektron pochta
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="siz@example.com"
                                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <KeyRound size={16} /> OTP kod
                            </span>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="123456"
                                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </label>

                        <div className="flex items-center justify-between gap-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold shadow-md transition disabled:opacity-50"
                            >
                                <CheckCircle size={16} /> <span>{loading ? "Tekshirilmoqda..." : "Tasdiqlash"}</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => { setEmail(""); setOtp(""); setType("REGISTER"); setMessage(""); }}
                                className="px-4 py-2 rounded-lg border border-green-300 text-sm text-green-700 bg-green-50 hover:bg-green-100 transition"
                            >
                                Tozalash
                            </button>
                        </div>
                    </form>

                    {message && (
                        <div className="mt-5 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm shadow-sm">
                            {message}
                        </div>
                    )}
                </div>

                <div className="bg-green-50 px-6 py-4 border-t border-green-100 text-sm text-gray-600 text-center">
                    <span className="font-medium">🥘 Taomlar ilovasi</span> — Sizning ishonchingiz biz uchun muhim!
                </div>
            </div>
        </div>
    );
}
