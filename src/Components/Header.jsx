import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
    return (
        <div className="w-full shadow-sm border-b max-w-[1700px] m-auto">
            <div className="bg-white text-sm flex items-center justify-between px-6 py-2 border-b">
                <span className="text-gray-700">
                    🌟 Get 5% Off your first order,{" "}
                    <span className="text-orange-500 font-medium">Promo: ORDER5</span>
                </span>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1 text-gray-700">
                        <LocationOnIcon className="text-gray-600" fontSize="small" />
                        <span>Regent Street, A5, A4201, London</span>
                        <button className="text-orange-500 ml-2 text-sm">
                            Change Location
                        </button>
                    </div>

                    <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer">
                        <ShoppingCartIcon />
                        <span className="ml-2">23 Items</span>
                    </div>

                    <div className="flex items-center bg-green-700 text-white px-3 py-1 rounded-md cursor-pointer">
                        <span>GBP 79.89</span>
                        <ArrowDropDownIcon />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between px-6 py-3 bg-white">
                <div className="text-2xl font-bold">
                   <img src="assets/LOGO 1.png" alt="order uk" />
                </div>

                <div className="flex items-center gap-6 text-gray-700 font-medium">
                    <button className="text-orange-500">Home</button>
                    <button>Browse Menu</button>
                    <button>Special Offers</button>
                    <button>Restaurants</button>
                    <button>Track Order</button>
                </div>

                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                    <PersonIcon className="text-orange-400" />
                    Login/Signup
                </button>
            </div>
        </div>
    );
}
