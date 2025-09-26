"use client";

import React, { useState, useEffect } from "react";
import { Mail, Send as SendIcon, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SendPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [type, setType] = useState("REGISTER");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return setMessage("Iltimos, emailni kiriting.");
    if (!type) return setMessage("Iltimos, tasdiqlash turini tanlang.");
    setPayload({ email, type });
  }

  useEffect(() => {
    if (!payload) return;

    async function sendOTP() {
      try {
        setLoading(true);
        setMessage("");
        const res = await fetch("http://localhost:5000/verifications/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Xatolik yuz berdi");
        setMessage(`✅ ${data.message || "OTP yuborildi"} — elektron pochtangizni tekshiring.`);
        setSent(true);
      } catch (err) {
        setMessage(`❌ Xatolik: ${err.message}`);
        setSent(false);
      } finally {
        setLoading(false);
        setPayload(null);
      }
    }

    sendOTP();
  }, [payload]);

  function handleVerifyNavigate() {
    navigate("/verify", { state: { email, type } });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-100 via-rose-100 to-red-100 p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-200">
        <div className="bg-gradient-to-r from-orange-400 to-red-400 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl">🍕</div>
            <div>
              <h2 className="text-2xl font-bold">OTP Yuborish</h2>
              <p className="text-sm opacity-90">Email orqali tasdiqlash kodi olasiz</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail size={16} /> Elektron pochta
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="siz@example.com"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <ListChecks size={16} /> Tasdiqlash turi
              </span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="REGISTER">REGISTER</option>
                <option value="RESET_PASSWORD">RESET_PASSWORD</option>
                <option value="RESET_EMAIL">RESET_EMAIL</option>
              </select>
            </label>

            <div className="flex items-center justify-between gap-3">
              {!sent && (
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-semibold shadow-md transition disabled:opacity-50"
                >
                  <SendIcon size={16} /> <span>{loading ? "Yuborilmoqda..." : "Yuborish"}</span>
                </button>
              )}

              {sent && (
                <button
                  type="button"
                  onClick={handleVerifyNavigate}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white font-semibold shadow-md transition"
                >
                  Tasdiqlashga o'tish
                </button>
              )}

              <button
                type="button"
                onClick={() => { setEmail(""); setType("REGISTER"); setMessage(""); setSent(false); }}
                className="px-4 py-2 rounded-lg border border-orange-300 text-sm text-orange-700 bg-orange-50 hover:bg-orange-100 transition"
              >
                Tozalash
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-5 p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 text-sm shadow-sm">
              {message}
            </div>
          )}
        </div>

        <div className="bg-orange-50 px-6 py-4 border-t border-orange-100 text-sm text-gray-600 text-center">
          <span className="font-medium">🍽️ Taomlar ilovasi</span> — Bon Appétit!
        </div>
      </div>
    </div>
  );
}
