"use client";
import Image from "next/image"
import cross from "@/app/assets/cross.png"
import logo from "@/app/assets/logo.png"

import search from "@/app/assets/search.png"
import search2 from "@/app/assets/Search for products....png"
import frame from "@/app/assets/Frame 5.png"
import frame2 from "@/app/assets/Frame 5 (1).png"
import frame3 from "@/app/assets/Frame (3).png"

import Link from "next/link";
import Men from "@/app/Product/page"

export default function Navbar(){
    return(
        <main>
            <div className=" sm:w-[390px] sm:h-[34px] lg:w-[1440px] xl:w-full   lg:h-[38px]  bg-[black] flex items-center">
                <div className=" w-[351px] sm:w-[301px] sm:h-[16px]  h-[19px]    lg:absolute  lg:top-[9px] lg:left-[544px]">
                    <p className="font-normal text-[14px] sm:text-[12px] sm:text-left sm:absolute sm:left-[20px] leading-[18.9px] text-nowrap text-white">Sign up and get 20% off to your first order. <span className=" text-[14px] leading-[18.9px] text-white underline decoration-solid">Sign Up Now</span></p>
                    <Image className=" sm:hidden lg:block xl:block md:block w-[20px] h-[20px] xl:absolute xl:top-[9px] xl:left-[776px] my-[-8px]" src={cross} alt="cross"></Image>
                </div>
            </div>
            <div className=" lg:w-[1240px] sm:w-[390px]   lg:h-[48px] sm:h-[46px]  lg:absolute  lg:top-[62px]  lg:left-[50px] lg:flex sm:flex sm:items-center sm:justify-between lg:items-center lg:justify-between gap-[40px]  ">
                <Image className="sm:block lg:hidden sm:absolute sm:top-[54px] sm:left-[16px]" src={frame3} alt="frame"></Image>
                <Link href="/"><Image className="sm:w-[126px] sm:h-[18px] sm:absolute lg:absolute sm:top-[57px] sm:left-[56px] lg:w-[160px] lg:top-[13px]  lg:h-[22px]  lg:mx-[30px]" src={logo} alt="logo"></Image></Link>
                <Image className="sm:block lg:hidden lg:w-[96px] lg:h-[24px] sm:absolute sm:top-[56px] sm:left-[278px]"  src={frame2} alt="frame"></Image>
                <div className=" sm:hidden lg:block  w-[321px] h-[22px] absolute left-[265px] ">
                    <ul className="flex justify-between">
                    <li>
                        <Link href="/Product">
                            Shop
                        </Link>
                    </li>

                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </div>


                <div className=" sm:hidden lg:block  w-[577px]  h-[48px] bg-[#f0f0f0]  absolute  left-[620px] rounded-[62px] flex items-center">
                    <Image className=" sm:hidden lg:block w-[24px]  h-[24px]  mx-[16px]  my-[12px]  absolute  left-[2px] " src={search} alt="search"></Image>
                    <Image className=" w-[151px]  absolute  left-[60px]  top-[18px]" src={search2} alt="search"></Image>
                    
                </div>
                <Image className="sm:hidden lg:block mx-[14px]  w-[62px]  h-[24px]  absolute  left-[1220px]" src={frame} alt="frame"></Image>
            </div>

        </main>
    )
}