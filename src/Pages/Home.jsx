import React from "react";
import Navbar from "../Components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchat, FaTwitter, FaTelegram } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";


function Home() {
    const deals = [
        {
            id: 1,
            img: "assets/Group 8 (3).png",
            discount: "-40%",
            title: "Chef Burgers London",
        },
        {
            id: 2,
            img: "assets/Group 8 (3).png",
            discount: "-20%",
            title: "Grand Ai Cafe London",
        },
        {
            id: 3,
            img: "assets/Group 8 (3).png",
            discount: "-17%",
            title: "Butterbrot Café London",
        },
        {
            id: 4,
            img: "assets/Group 8 (3).png",
            discount: "-30%",
            title: "Pizza Hub London",
        },
    ];

    const categories = [
        { name: "Burgers & Fast food", restaurants: 21, img: "assets/Rectangle 13 (2).png" },
        { name: "Salads", restaurants: 32, img: "assets/Rectangle 13 (2).png" },
        { name: "Pasta & Casuals", restaurants: 4, img: "assets/Rectangle 13 (2).png" },
        { name: "Pizza", restaurants: 32, img: "assets/Rectangle 13 (2).png" },
        { name: "Breakfast", restaurants: 4, img: "assets/Rectangle 13 (2).png" },
        { name: "Soups", restaurants: 32, img: "assets/Rectangle 13 (2).png" },
    ];

    const restaurants = [
        { name: "McDonald’s London", img: "assets/Rectangle 13 (3).png" },
        { name: "Papa Johns", img: "assets/Rectangle 13 (3).png" },
        { name: "KFC West London", img: "assets/Rectangle 13 (3).png" },
        { name: "Texas Chicken", img: "assets/Rectangle 13 (3).png" },
        { name: "Burger King", img: "assets/Rectangle 13 (3).png" },
        { name: "Shaurma 1", img: "assets/Rectangle 13 (3).png" },
    ];

    return (
        <>
            <Navbar />
            <section className="max-w-[1700px] m-auto h-[610px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 relative">
                <div className="flex-1 space-y-6 mb-10 lg:mb-0">
                    <p className="text-gray-600 text-center lg:text-left">
                        Order Restaurant food, takeaway and groceries.
                    </p>

                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-center lg:text-left">
                        Feast Your Senses, <br />
                        <span className="text-orange-500">Fast and Fresh</span>
                    </h1>

                    <div className="flex justify-center lg:justify-start mt-6">
                        <input
                            type="text"
                            placeholder="e.g. EC4R 3TE"
                            className="px-4 py-3 w-[250px] sm:w-[300px] rounded-l-full border border-gray-300 focus:outline-none"
                        />
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-r-full font-medium hover:bg-orange-600">
                            Search
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative flex justify-center hidden lg:flex">
                    <img
                        src="assets/Untitled-1 1.png"
                        alt="girl eating pizza"
                        className="w-[700px] relative z-10"
                    />
                    <img
                        src="assets/Untitled-2 1 (1).png"
                        alt="girl eating pizza"
                        className="w-[300px] h-[400px] relative mr-[700px] mt-[52px]"
                    />

                    <div className="absolute top-0 right-0 w-[626px] h-[470px] rounded-tl-[200px] -z-10 bg-amber-600" />

                    <div className="absolute top-10 right-10 bg-white shadow-lg rounded-xl px-4 py-3 w-[260px]">
                        <p className="font-bold">Order.uk</p>
                        <p className="text-sm text-gray-600">
                            We’ve Received your order! <br /> Awaiting Restaurant acceptance
                        </p>
                    </div>

                    <div className="absolute top-40 right-16 bg-white shadow-lg rounded-xl px-4 py-3 w-[260px]">
                        <p className="font-bold">Order.uk</p>
                        <p className="text-sm text-gray-600">
                            ✅ Order Accepted! <br /> Your order will be delivered shortly
                        </p>
                    </div>

                    <div className="absolute bottom-10 right-24 bg-white shadow-lg rounded-xl px-4 py-3 w-[260px]">
                        <p className="font-bold">Order.uk</p>
                        <p className="text-sm text-gray-600">
                            🎉 Your rider’s nearby <br /> They’re almost there – get ready!
                        </p>
                    </div>
                </div>
            </section>


            <section className="max-w-[1700px] mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-0">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        Up to <span className="text-orange-500">-40%</span> 🎊 Order.uk exclusive deals
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                    <button className="px-6 py-2 rounded-full border hover:bg-gray-100 transition">
                        Vegan
                    </button>
                    <button className="px-6 py-2 rounded-full border hover:bg-gray-100 transition">
                        Sushi
                    </button>
                    <button className="px-6 py-2 rounded-full border bg-orange-500 text-white transition">
                        Pizza & Fast food
                    </button>
                    <button className="px-6 py-2 rounded-full border hover:bg-gray-100 transition">
                        Others
                    </button>
                </div>
            </section>


            <section>
                <div className="max-w-[1700px] m-auto py-10">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        {deals.map((deal) => (
                            <SwiperSlide key={deal.id}>
                                <div className="relative rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src={deal.img}
                                        alt={deal.title}
                                        className="w-full h-[325px] object-cover"
                                    />
                                    <div className="absolute top-0 right-3 bg-black text-white px-9 py-5 mr-[10px] rounded-md text-sm font-bold">
                                        {deal.discount}
                                    </div>
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <p className="text-orange-400 text-sm">Restaurant</p>
                                        <h3 className="text-lg font-semibold">{deal.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="max-w-[1700px] m-auto">
                <div className="bg-white min-h-screen p-6 font-sans">
                    <h1 className="text-2xl font-bold mb-4 flex items-center">
                        Order.uk Popular Categories <span className="ml-2">🤩</span>
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition duration-200">
                                <img src={cat.img} alt={cat.name} className="w-full h-100 object-cover" />
                                <div className="p-2">
                                    <h2 className="font-semibold text-sm">{cat.name}</h2>
                                    <p className="text-xs text-orange-400">{cat.restaurants} Restaurants</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold mb-4">Popular Restaurants</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {restaurants.map((res, i) => (
                            <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow hover:shadow-md transition duration-200 overflow-hidden">
                                <div className="w-full h-40 flex items-center justify-center bg-gray-100">
                                    <img src={res.img} alt={res.name} className="w-full" />
                                </div>
                                <div className="w-full bg-orange-400 text-white text-center py-2 font-semibold text-sm">
                                    {res.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="max-w-[1700px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between bg-[#ededec] p-6 rounded-lg">
                    <div className="w-full lg:w-1/2 relative z-10 mb-6 lg:mb-0">
                        <img
                            src="assets/friends-laughing-using-mobiles 2.png"
                            alt="People using mobiles"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col gap-6 px-0 sm:px-6 lg:px-10">
                        <h2 className="text-3xl sm:text-4xl font-bold leading-snug text-[#0a0a0a] flex items-center gap-2">
                            <img src="assets/LOGO 1.png" alt="Logo" className="h-10 sm:h-12" />
                            <span className="text-[#0a0a0a]">ing is more</span>
                        </h2>

                        <h3 className="relative text-3xl sm:text-4xl font-semibold">
                            <span className="bg-[#0a0a0a] text-white px-4 py-1 rounded-full inline-block max-w-full sm:max-w-[600px] md:max-w-[800px] text-right">
                                <span className="text-[#ff8c00] underline">Personalised</span> & Instant
                            </span>
                        </h3>

                        <p className="text-[16px] sm:text-[18px] text-gray-700">
                            <strong>Download the Order.uk app for faster ordering</strong>
                        </p>

                        <div className="flex gap-4 mt-2">
                            <a href="#">
                                <img
                                    src="assets/appstore.png"
                                    alt="Download on the App Store"
                                    className="h-[40px] sm:h-[50px]"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="assets/googleplay.png"
                                    alt="Get it on Google Play"
                                    className="h-[40px] sm:h-[50px]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-[1700px] mx-auto mt-[50px] px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="relative flex-1">
                        <img
                            src="assets/Group 8 (1).png"
                            alt="oshpaz"
                            className="rounded-xl w-full"
                        />

                        <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-md shadow">
                            <p className="text-sm font-medium text-gray-800">Earn more with lower fees</p>
                        </div>

                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm text-orange-400">Signup as a business</p>
                            <h2 className="text-3xl font-bold mb-4">Partner with us</h2>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="relative flex-1">
                        <img
                            src="assets/Group 8 (2).png"
                            alt="oshpaz"
                            className="rounded-xl w-full"
                        />

                        <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-md shadow">
                            <p className="text-sm font-medium text-gray-800">Avail exclusive perks</p>
                        </div>

                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm text-orange-400">Signup as a rider</p>
                            <h2 className="text-3xl font-bold mb-4">Ride with us</h2>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-[1700px] mx-auto mt-[60px] px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 lg:gap-0">
                    <h2 className="text-2xl font-bold">Know more about us!</h2>

                    <div className="flex flex-wrap gap-4 lg:gap-6">
                        <button className="px-6 py-2 rounded-full border border-orange-500 bg-orange-500 text-white font-medium">
                            Frequent Questions
                        </button>
                        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-orange-500 hover:text-orange-500 transition">
                            Who we are?
                        </button>
                        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-orange-500 hover:text-orange-500 transition">
                            Partner Program
                        </button>
                        <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-orange-500 hover:text-orange-500 transition">
                            Help & Support
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 md:p-8 flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3 space-y-4">
                        <button className="flex items-center gap-2 font-medium text-black">
                            <span className="bg-orange-500 text-white px-4 py-2 rounded-full">
                                How does Order.UK work?
                            </span>
                        </button>
                        <p className="text-gray-600">What payment methods are accepted?</p>
                        <p className="text-gray-600">Can I track my order in real-time?</p>
                        <p className="text-gray-600">Are there any special discounts or promotions available?</p>
                        <p className="text-gray-600">Is Order.UK available in my area?</p>
                    </div>

                    <div className="lg:w-2/3 flex flex-col md:flex-row gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-100 rounded-xl p-6 flex-1 text-center">
                                <img
                                    src="assets/order-food 1.png"
                                    alt="Order step"
                                    className="mx-auto mb-4 w-20"
                                />
                                <h3 className="font-bold text-lg">
                                    {item === 1 && "Place an Order!"}
                                    {item === 2 && "Track Progress"}
                                    {item === 3 && "Get your Order!"}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item === 1 && "Place order through our website or Mobile app"}
                                    {item === 2 && "You can track your order status with delivery time"}
                                    {item === 3 && "Receive your order at lightning fast speed!"}
                                </p>
                                {item === 3 && <br />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-orange-500 text-white rounded-xl mt-10 p-6 md:p-8 text-center font-semibold">
                    <div>
                        <h3 className="text-2xl">546+</h3>
                        <p className="text-sm">Registered Riders</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">789,900+</h3>
                        <p className="text-sm">Orders Delivered</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">690+</h3>
                        <p className="text-sm">Restaurants Partnered</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">17,457+</h3>
                        <p className="text-sm">Food items</p>
                    </div>
                </div>
            </section>


            <footer className="bg-gray-100 mt-[50px]">
                <div className="max-w-[1700px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold">
                            <img src="assets/LOGO 1.png" alt="Order.UK Logo" />
                        </div>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Button
                                variant="contained"
                                startIcon={<AppleIcon />}
                                href="https://apps.apple.com/app/your-app-id"
                                target="_blank"
                                sx={{ width: 120, justifyContent: "flex-start", p: 1 }}
                            >
                                <span style={{ fontSize: 12, textTransform: "none", marginLeft: 6 }}>
                                    App Store
                                </span>
                            </Button>

                            <Button
                                variant="contained"
                                startIcon={<AndroidIcon />}
                                href="https://play.google.com/store/apps/details?id=your.package.name"
                                target="_blank"
                                sx={{ width: 120, justifyContent: "flex-start", p: 1 }}
                            >
                                <span style={{ fontSize: 12, textTransform: "none", marginLeft: 6 }}>
                                    Google Play
                                </span>
                            </Button>
                        </Stack>
                        <p className="text-sm mt-3 text-gray-600 max-w-[300px]">
                            Company # 490038-445, Registered with House of companies.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Get Exclusive Deals in your Inbox</h3>

                        <div className="flex gap-2 flex-wrap">
                            <input
                                type="email"
                                placeholder="youremail@gmail.com"
                                className="flex-grow min-w-[180px] p-2 border border-gray-300 rounded-lg"
                            />
                            <button className="bg-orange-500 text-white px-4 rounded-lg whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-2 max-w-[300px]">
                            we won’t spam, read our{" "}
                            <a href="#" className="underline">
                                email policy
                            </a>
                        </p>

                        <div className="flex gap-4 mt-4 text-xl text-gray-600 flex-wrap">
                            <a
                                href="https://www.youtube.com/@abrorbekkarimov1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <BsYoutube />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.linkedin.com/feed/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="https://t.me/ka0o9"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <FaTelegram />
                            </a>

                        </div>
                    </div>


                    <div>
                        <h3 className="font-semibold mb-3">Legal Pages</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:underline">Terms and conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy</a></li>
                            <li><a href="#" className="hover:underline">Cookies</a></li>
                            <li><a href="#" className="hover:underline">Modern Slavery Statement</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Important Links</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#" className="hover:underline">Get help</a></li>
                            <li><a href="#" className="hover:underline">Add your restaurant</a></li>
                            <li><a href="#" className="hover:underline">Sign up to deliver</a></li>
                            <li><a href="#" className="hover:underline">Create a business account</a></li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] text-gray-300 py-4">
                    <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-3 md:gap-0">
                        <p>Order.UK Copyright 2024, All Rights Reserved.</p>
                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms</a>
                            <a href="#" className="hover:underline">Pricing</a>
                            <a href="#" className="hover:underline">Do not sell or share my personal information</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Home;
