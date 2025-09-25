import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        otp: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const { confirmPassword, ...dataToSend } = formData;

            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }

            alert("✅ Registration successful!");
            navigate("/login");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <div className="flex justify-center mt-[100px]">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">Registration</h2>

                    {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="fullname"
                            placeholder="First name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            className="w-full border-b outline-none py-2"
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition disabled:bg-gray-400"
                        >
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>

                    <Link to="/login" className="text-blue-500 flex justify-center mt-[10px]">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Register;
