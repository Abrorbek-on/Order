import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from '../Components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Phone, Clock, Truck, MapPin, AppleIcon } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Button, Stack } from '@mui/material';
import { BsYoutube } from 'react-icons/bs';
import AndroidIcon from '@mui/icons-material/Android';
import humberger from "/assets/Group 23.png"
import burger from "/assets/Rectangle 44.png"
import card from "/assets/Rectangle 64.png"
import moto from "/assets/Order Completed.png"
import order from "/assets/Motocross.png"
import clock from "/assets/Clock.png"
import { Star } from "lucide-react";

import { FaInstagram, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

function Restaurants() {
    const deals = [
        {
            id: 1,
            img: "assets/Group 8 (4).png",
            discount: "-20%",
            address: "McDonald’s East London",
            title: "First Order Discount",
        },
        {
            id: 2,
            img: "assets/Group 8 (4).png",
            discount: "-20%",
            address: "McDonald’s East London",
            title: "Vegan Discount",
        },
        {
            id: 3,
            img: "assets/Group 8 (4).png",
            discount: "-100%",
            address: "McDonald’s East London",
            title: "Free ice Cream Offer",
        },
        {
            id: 4,
            img: "assets/Group 8 (4).png",
            discount: "-30%",
            address: "McDonald’s East London",
            title: "Pizza Hub London",
        },
    ];

    const burgers = [
        {
            id: 1,
            title: "Royal Cheese Burger with extra Fries",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (1).png",
            icon: "assets/Plus.png",
        },
        {
            id: 2,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (1).png",
            icon: "assets/Plus.png",

        },
        {
            id: 3,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (1).png",
            icon: "assets/Plus.png",

        },
        {
            id: 4,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (1).png",
            icon: "assets/Plus.png",
        },
        {
            id: 5,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (1).png",
            icon: "assets/Plus.png",

        },
        {
            id: 6,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (1).png",
            icon: "assets/Plus.png",
        },
    ];


    const fries = [
        {
            id: 1,
            title: "Royal Cheese Burger with extra Fries",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (2).png",
            icon: "assets/Plus.png",
        },
        {
            id: 2,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (2).png",
            icon: "assets/Plus.png",

        },
        {
            id: 3,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (2).png",
            icon: "assets/Plus.png",

        },
        {
            id: 4,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (2).png",
            icon: "assets/Plus.png",
        },
        {
            id: 5,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (2).png",
            icon: "assets/Plus.png",

        },
        {
            id: 6,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (2).png",
            icon: "assets/Plus.png",
        },
    ];


    const Drinks = [
        {
            id: 1,
            title: "Royal Cheese Burger with extra Fries",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (3).png",
            icon: "assets/Plus.png",
        },
        {
            id: 2,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (3).png",
            icon: "assets/Plus.png",

        },
        {
            id: 3,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (3).png",
            icon: "assets/Plus.png",

        },
        {
            id: 4,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (3).png",
            icon: "assets/Plus.png",
        },
        {
            id: 5,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (3).png",
            icon: "assets/Plus.png",

        },
        {
            id: 6,
            title: "The classics for 3",
            desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            price: "GBP 23.10",
            img: "assets/Rectangle 46 (3).png",
            icon: "assets/Plus.png",
        },
    ];

    const restaurants = [
        { name: "McDonald’s London", img: "assets/Rectangle 13 (3).png" },
        { name: "Papa Johns", img: "assets/Rectangle 13 (3).png" },
        { name: "KFC West London", img: "assets/Rectangle 13 (3).png" },
        { name: "Texas Chicken", img: "assets/Rectangle 13 (3).png" },
        { name: "Burger King", img: "assets/Rectangle 13 (3).png" },
        { name: "Shaurma 1", img: "assets/Rectangle 13 (3).png" },
    ];

    const reviews = [
        {
            id: 1,
            name: "St Glx",
            location: "South London",
            date: "24th September, 2023",
            rating: 5,
            review:
                "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.",
            img: "https://i.pravatar.cc/50?img=1",
        },
        {
            id: 2,
            name: "St Glx",
            location: "South London",
            date: "24th September, 2023",
            rating: 5,
            review:
                "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.",
            img: "https://i.pravatar.cc/50?img=2",
        },
        {
            id: 3,
            name: "St Glx",
            location: "South London",
            date: "24th September, 2023",
            rating: 5,
            review:
                "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald’s standard – hot and satisfying.",
            img: "https://i.pravatar.cc/50?img=3",
        },
    ];

    return (
        <>
            <Navbar />


            <div>
                <section className='max-w-[1700px] mx-auto'>
                    <div
                        className="md:flex-row flex-col  md:flex max-w-[1700px] justify-between min-h-[500px] mx-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${humberger})` }}
                    >
                        <div className=" p-15 mt-30 flex flex-col justify-start items-start gap-6">
                            <h1 className='text-2xl text-gray-200'>I'm lovin' it!</h1>
                            <h1 className='text-6xl font-bold text-white'>McDonald’s East London</h1>
                            <div className='flex gap-5'>
                                <button className='flex justify-center items-center px-10 py-3 border rounded-4xl gap-3 font-bold text-white'>  <img src={moto} alt="" />      Minimum Order: 12 GBP        </button>
                                <button className='flex justify-center items-center px-10 py-3 border rounded-4xl gap-3 font-bold text-white'>  <img src={order} alt="" />     Delivery in 20-25 Minutes </button>
                            </div>
                        </div>

                        <div className='flex   max-w-[600px] w-full '>
                            <div className=" border-amber-400 max-w-[600px]  justify-center min-h-[100px] w-full flex items-center relative">
                                <img src={burger} alt="Burger" className="w-[500px]" />
                                <img src={card} alt="Card decoration" className="absolute bottom-10 left-0" />
                            </div>
                        </div>

                    </div>
                    <div className='justify-start  mt-[-30px]  flex '>
                        <div className='bg-[#FC8A06] z-[999] p-4 max-w-[300px] rounded-tr-2xl rounded-br-2xl w-full flex gap-3 items-center justify-center'>
                            <img src={clock} alt="" />
                            <h1 className='font-bold text-white'>Open until 3:00 AM</h1>
                        </div>
                    </div>
                    <div className='flex justify-center py-10 '>
                        <div className=' md:flex md:flex-row flex-col justify-between  max-w-[1580px] w-full items-center'>
                            <h1 className='text-4xl font-bold'>All Offers from McDonald’s East London</h1>
                            <input type="text" className='border border-gray-400 text-gray-400 py-3 px-8 rounded-4xl' placeholder='Search from menu...' />
                        </div>
                    </div>


                </section>
                <section>
                    <div className='maw-w-[1950px] bg-[#FC8A06] py-5 w-full '>
                        <div className='md:flex flex-col md:flex-row justify-start gap-13  max-w-[1700px] items-center mx-auto'>
                            <h1 className='font-bold text-2xl p-2 bg-[#03081F] text-white  px-5 rounded-4xl hover:scale-[0.9] transition-all duration-200'>Offers</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Burgers</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Fries</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Snacks</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Salads</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Cold drinks</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Happy Meal</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Desserts</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Hot drinks</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Sauces</h1>
                            <h1 className='font-bold text-2xl text-white cursor-pointer hover:scale-[0.9] transition-all duration-200'>Orbit®</h1>
                        </div>
                    </div>
                </section>
            </div>




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
                                        <p className="text-orange-400 text-sm">{deal.address}</p>
                                        <h3 className="text-lg font-semibold">{deal.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </section>


            <section className="max-w-[1700px] m-auto py-10">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Burgers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {burgers.map((burger) => (
                            <div
                                key={burger.id}
                                className="bg-white rounded-2xl shadow p-4 flex flex-col"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="basis-1/2">
                                        <h3 className="font-semibold text-lg">{burger.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2">{burger.desc}</p>
                                        <span className="font-bold block mt-3">{burger.price}</span>
                                    </div>

                                    <div className="basis-1/2 relative flex justify-center">
                                        <img
                                            src={burger.img}
                                            alt={burger.title}
                                            className="w-full h-40 object-contain rounded-lg"
                                        />
                                        <div className="absolute bottom-0 right-11 w-[50px] h-[50px] bg-gray-400 rounded flex items-center justify-center">
                                            <img
                                                src={burger.icon}
                                                alt={burger.title}
                                                className="w-[30px] h-[30px]"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="max-w-[1700px] m-auto py-10">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Fries</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fries.map((fries) => (
                            <div
                                key={fries.id}
                                className="bg-white rounded-2xl shadow p-4 flex flex-col"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="basis-1/2">
                                        <h3 className="font-semibold text-lg">{fries.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2">{fries.desc}</p>
                                        <span className="font-bold block mt-3">{fries.price}</span>
                                    </div>

                                    <div className="basis-1/2 relative flex justify-center">
                                        <img
                                            src={fries.img}
                                            alt={fries.title}
                                            className="w-full h-40 object-contain rounded-lg"
                                        />
                                        <div className="absolute bottom-0 right-11 w-[50px] h-[50px] bg-gray-400 rounded flex items-center justify-center">
                                            <img
                                                src={fries.icon}
                                                alt={fries.title}
                                                className="w-[30px] h-[30px]"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="max-w-[1700px] m-auto py-10">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Cold Drinks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Drinks.map((drink) => (
                            <div
                                key={drink.id}
                                className="bg-white rounded-2xl shadow p-4 flex flex-col"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="basis-1/2">
                                        <h3 className="font-semibold text-lg">{drink.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2">{drink.desc}</p>
                                        <span className="font-bold block mt-3">{drink.price}</span>
                                    </div>

                                    <div className="basis-1/2 relative flex justify-center">
                                        <img
                                            src={drink.img}
                                            alt={drink.title}
                                            className="w-full h-40 object-contain rounded-lg"
                                        />
                                        <div className="absolute bottom-0 right-11 w-[50px] h-[50px] bg-gray-400 rounded flex items-center justify-center">
                                            <img
                                                src={drink.icon}
                                                alt={drink.title}
                                                className="w-[30px] h-[30px]"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            <section className="max-w-[1700px] shadow mx-auto p-6">
                <div className="grid md:grid-cols-3 bg-white shadow-lg rounded-xl overflow-hidden">

                    <div className="p-6 border-r">
                        <div className="flex items-center gap-2 mb-4">
                            <Truck className="text-blue-600" />
                            <h2 className="text-lg font-bold">Delivery information</h2>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><b>Monday:</b> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
                            <li><b>Tuesday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Wednesday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Thursday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Friday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Saturday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Sunday:</b> 8:00 AM–12:00 AM</li>
                        </ul>
                        <p className="mt-3 text-sm font-medium">
                            <b>Estimated time until delivery:</b> 20 min
                        </p>
                    </div>

                    <div className="p-6 border-r">
                        <div className="flex items-center gap-2 mb-4">
                            <Phone className="text-blue-600" />
                            <h2 className="text-lg font-bold">Contact information</h2>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                            If you have allergies or other dietary restrictions, please contact the restaurant.
                            The restaurant will provide food-specific information upon request.
                        </p>
                        <p className="text-sm font-semibold">Phone number</p>
                        <p className="text-blue-600 font-medium mb-2">+998-90-840-03-85</p>
                        <p className="text-sm font-semibold">Website</p>
                        <a
                            href="http://mcdonalds.uk/"
                            className="text-blue-500 underline text-sm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            http://order
                        </a>
                    </div>

                    <div className="p-6 bg-[#0c1326] text-white">
                        <div className="flex items-center gap-2 mb-4">
                            <Clock className="text-white" />
                            <h2 className="text-lg font-bold">Operational Times</h2>
                        </div>
                        <ul className="text-sm space-y-1">
                            <li><b>Monday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Tuesday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Wednesday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Thursday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Friday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Saturday:</b> 8:00 AM–3:00 AM</li>
                            <li><b>Sunday:</b> 8:00 AM–3:00 AM</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="max-w-[1700px] mx-auto p-6">
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="McDonald's Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0203793221794!2d-0.08988928428743823!3d51.50493797963483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603534b244f49%3A0xe61d6ff566f2b89e!2sMcDonald%27s!5e0!3m2!1sen!2suk!4v1695472000000"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    <div className="absolute top-6 left-6 bg-[#0c1326] text-white p-6 rounded-xl w-[280px]">
                        <h2 className="text-lg font-bold">
                            McDonald’s <br />
                            <span className="text-orange-400 font-semibold">South London</span>
                        </h2>
                        <p className="text-sm text-gray-300 mt-2">
                            Tooley St, London Bridge, London SE1 2TF,
                            <br /> United Kingdom
                        </p>
                        <p className="mt-4 text-sm font-semibold">Phone number</p>
                        <p className="text-orange-400 font-medium">+998-90-840-03-85</p>
                        <p className="mt-3 text-sm font-semibold">Website</p>
                        <a
                            href="http://mcdonalds.uk/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 underline"
                        >
                            http://order
                        </a>
                    </div>

                    <div className="absolute top-1/2 right-16 transform -translate-y-1/2">
                        <div className="bg-white shadow-md px-3 py-2 rounded-lg flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-orange-500" />
                            <span className="text-sm font-medium">McDonald’s South London</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-400 mt-[20px]">
                <div className="max-w-[1700px] mx-auto py-10">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-xl shadow p-6 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={review.img}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold">{review.name}</h3>
                                        <p className="text-sm text-orange-500">{review.location}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        {review.date}
                                    </div>
                                    <div className="flex text-orange-500">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <Star key={i} size={16} fill="orange" stroke="orange" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {review.review}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center mt-10">
                        <h3 className="text-4xl font-bold">3.4</h3>
                        <div className="flex text-orange-500">
                            {[...Array(3)].map((_, i) => (
                                <Star key={i} size={20} fill="orange" stroke="orange" />
                            ))}
                            <Star size={20} />
                            <Star size={20} />
                        </div>
                        <p className="text-gray-500 text-sm">1,360 reviews</p>
                    </div></div>
            </section>



            <section className="max-w-[1700px] m-auto">
                <div className="bg-white p-6 font-sans">
                    <h2 className="text-2xl font-bold mb-4">Similar Restaurants</h2>
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





            <footer className="bg-gray-100 mt-[50px]">
                <div className="max-w-[1700px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold">
                            <img src="assets/LOGO 1.png" alt="Order.UK Logo" />
                        </div>
                        <div className="mt-[20px]">
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
                        </div>
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

export default Restaurants;
