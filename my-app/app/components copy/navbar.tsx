"use client";
import Image from "next/image"
import cross from "@/app/assets/cross.png"
import logo from "@/app/assets/logo.png"

import search from "@/app/assets/search.png"

import { FiShoppingCart } from "react-icons/fi";

import Link from "next/link";

import { useState } from "react";




import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu toggle

export default function Navbar() {
  const [DropDown, SetDropDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropDown = () => SetDropDown(!DropDown);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <main className="w-full m-auto relative">
      {/* Top Black Bar */}
      <div className="w-full bg-black flex items-center justify-center h-[38px]">
        <p className="text-white text-[12px] md:text-[14px] text-center">
          Sign up and get 20% off your first order.{" "}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </p>
      </div>

      {/* Navbar Section */}
      <div className="flex justify-between items-center px-4 lg:px-20 py-6 relative bg-white">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-[120px] md:w-[160px] h-auto"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-2xl text-black px-6"
        >
          {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Nav Links */}
        <div
          className={`${
            mobileMenuOpen
              ? "flex flex-col items-center absolute top-16 left-0 w-full bg-white  z-10"
              : "hidden"
          } lg:flex lg:items-center lg:static lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-4 lg:mt-0 text-black">
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => SetDropDown(true)}
              onMouseLeave={() => SetDropDown(false)}
              onClick={toggleDropDown}
            >
              Shop
              {DropDown && (
                <ul className="absolute top-full left-0 bg-white border rounded-md shadow-lg w-[200px] z-10">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/Product">Men's</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/casual">Casual</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/Product/kids">Kids</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/Product/accessories">Accessories</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/sale">On Sale</Link>
            </li>
            <li>
              <Link href="/arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </div>

        {/* Search and Cart */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative bg-gray-200 rounded-full px-4 py-2">
            <Image
              className="absolute left-2 top-2 w-[20px] h-[20px]"
              src={search}
              alt="search"
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 bg-transparent focus:outline-none "
            />
          </div>
          <Link href="/cart">
            <FiShoppingCart className="text-2xl text-black cursor-pointer" />
          </Link>
        </div>
      </div>
    </main>
  );
}
