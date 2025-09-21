import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full max-w-[1700px] m-auto">
            <div className="bg-white text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 border rounded-b-2xl">
                <span className="text-gray-700 text-center sm:text-left">
                    🌟 Get 5% Off your first order,{" "}
                    <span className="text-orange-500 font-medium">Promo: ORDER5</span>
                </span>

                <div className="hidden lg:flex items-center gap-6 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1 text-gray-700 text-sm">
                        <LocationOnIcon className="text-gray-600" fontSize="small" />
                        <span>Regent Street, A5, A4201, London</span>
                        <button className="text-orange-500 ml-2 text-sm">
                            Change Location
                        </button>
                    </div>

                    <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer text-sm">
                        <ShoppingCartIcon />
                        <span className="ml-2">23 Items</span>
                    </div>

                    <div className="flex items-center bg-green-700 text-white px-3 py-1 rounded-md cursor-pointer text-sm">
                        <span>GBP 79.89</span>
                        <ArrowDropDownIcon />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white relative">
                <div className="text-xl sm:text-2xl font-bold">
                    <img src="assets/LOGO 1.png" alt="order uk" className="h-8 sm:h-10" />
                </div>

                <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
                    <Link to="/" className="text-orange-500 hover:text-orange-600">
                        Home
                    </Link>
                    <Link to="/menu" className="hover:text-orange-500">
                        Browse Menu
                    </Link>
                    <Link to="/offers" className="hover:text-orange-500">
                        Special Offers
                    </Link>
                    <Link to="/restaurants" className="hover:text-orange-500">
                        Restaurants
                    </Link>
                    <Link to="/track" className="hover:text-orange-500">
                        Track Order
                    </Link>
                </div>

                <Link
                    to="/login"
                    className="hidden lg:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                >
                    <PersonIcon className="text-orange-400" />
                    Login/Signup
                </Link>

                <div className="flex items-center gap-4 lg:hidden">
                    <ShoppingCartIcon className="text-green-600 text-2xl cursor-pointer" />
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <CloseIcon className="text-3xl" />
                        ) : (
                            <MenuIcon className="text-3xl" />
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-3/4 h-screen bg-white shadow-lg p-6 z-50">
                    <div className="flex flex-col gap-4 text-gray-700 font-medium">
                        <Link to="/" className="text-orange-500">Home</Link>
                        <Link to="/menu">Browse Menu</Link>
                        <Link to="/offers">Special Offers</Link>
                        <Link to="/restaurants">Restaurants</Link>
                        <Link to="/track">Track Order</Link>
                        <Link
                            to="/login"
                            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition w-fit"
                        >
                            <PersonIcon className="text-orange-400" />
                            Login/Signup
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
