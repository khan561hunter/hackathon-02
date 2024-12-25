"use client";
import Image from "next/image"
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";




export default function Header(){

    const[DropDown , SetDropDown] = useState(false);
    const[MobileMenuOpen , SetMobileMenuOpen] = useState(false);

    const handletoggle = () => {
        SetDropDown(!DropDown);
    }

    const handleMobileMenu = () => {
        SetMobileMenuOpen(!MobileMenuOpen);
    }


    return(
        <main className="bg-white">
            <div className="w-full bg-black sm:text-sm text-xs text-white flex items-center  ">
                <div className="max-w-[1440px] h-[38px] p-2 flex  items-center justify-around m-auto  ">
                    <p className="flex gap-1">Sign up and get 20% off to your first order.<span className="underline font-medium">
                         Sign Up Now
                        
                    </span></p>
                    
                    
                </div>
                <IoClose className="w-[20px] h-[20px] m-auto md:block xs:hidden" />
            </div>
            <div className="max-w-[1240px] h-[41px] mx-auto my-8 ">
                <div className="md:flex md:justify-between md:items-center xs:flex xs:items-center gap-4 xs:justify-between ">
                    <Link href={"/"}><Image src="/navbar/logo.png" alt="logo" width={160} height={22} className="hidden md:block" ></Image></Link>
                    
                    <button
                        onClick={handleMobileMenu}
                        className="md:hidden text-2xl text-black "
                        >
                        {MobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                    <Link href={"/"}><Image src="/navbar/logo.png" alt="logo" width={128} height={16} className="md:hidden" ></Image></Link>
                    
                    <div className={`${
                            MobileMenuOpen
                            ? "flex flex-col items-center absolute top-16 left-0 w-[200px] rounded-[20px]  bg-white my-9 mx-12  z-10"
                            : "hidden"
                        } md:flex md:items-center  md:w-auto md:justify-between`}
                    >
                        <ul className="md:flex md:justify-between md:text-nowrap md:items-center flex-col md:flex-row gap-6 lg:gap-10 mt-4 lg:mt-0 text-black">
                            <li className="relative group cursor-pointer"
                                onMouseEnter={() => SetDropDown(true)}
                                onMouseLeave={() => SetDropDown(false)}
                                onClick={handletoggle}>
                                Shop
                                {DropDown &&(
                                    <ul className="absolute top-full left-0 bg-white border rounded-md shadow-lg w-[200px] z-10 flex flex-col ">
                                        <li className="hover:bg-[#F0F0F0] px-4 py-2">
                                            <Link href="/men">Men's</Link>
                                        </li>
                                        <li className="hover:bg-[#F0F0F0] py-2 px-4">
                                            <Link href="/casual">Casual</Link>
                                        </li>
                                        <li className="hover:bg-[#F0F0F0] py-2 px-4">
                                            <Link href="/accessories">Accessories</Link>
                                        </li>
                                        <li className="hover:bg-[#F0F0F0] py-2 px-4">
                                            <Link href="/Product">Products</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <div  className="text-base hover:underline" >On Sale</div>
                            </li>
                            <li>
                                <div  className="text-base hover:underline">New Arrivals</div>
                            </li>
                            <li>
                                <div  className="text-base hover:underline">Brands</div>
                            </li>
                            
                        
                        
                        </ul>


                        
                        

                    </div>
                    <div className="w-[577px]  bg-[#F0F0F0] rounded-full md:flex items-center py-[12px] px-[16px] gap-3 xs:hidden md:block">
                        <FiSearch className="w-[24px] h-[24px] " />
                        <div className="text-[#00000066]">
                            <p>Search for products...</p>
                        </div>
                        

                    </div>
                    <div className="md:flex justify-between w-[64px] xs:hidden md:block">
                    <LuShoppingCart className="w-[24px] h-[24px]" />
                    <CgProfile className="w-[24px] h-[24px]" />

                    </div>
                    <div className="md:hidden flex w-[94px] justify-around mx-[50px] ">
                    <FiSearch className="w-[24px] h-[24px] " />
                    <LuShoppingCart className="w-[24px] h-[24px]" />
                    <CgProfile className="w-[24px] h-[24px]" />


                    </div>
                    
                </div>

            </div>
        </main>
    )
}



