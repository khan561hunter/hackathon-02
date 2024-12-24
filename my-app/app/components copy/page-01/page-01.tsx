"use client";
import Image from "next/image"

import rec from "@/app/assets/Rectangle 2 (1).png"
import find from "@/app/assets/FIND CLOTHES THAT MATCHES YOUR STYLE.png"
import vector from "@/app/assets/Vector.png"
import boygirl from "@/app/assets/Rectangle 2.png"
import vector2 from "@/app/assets/Vector (1).png"
import num from "@/app/assets/Frame 56.png"
import num1 from "@/app/assets/Frame 57.png"
import rec2 from "@/app/assets/Rectangle 2 (2).png"
import Responsive1 from "./responsive";



export default function One(){
    return(
        <div className=" flex items-center relative  ">
            <Image className=" w-full hidden md:block w-[1440px]  h-[663px]   absolute top-[15px]" src={rec} alt="rect"></Image>
            <Image className=" hidden md:block absolute  top-[431px]  left-[750px]" src={vector} alt="vector"></Image>
            <Image className=" hidden md:block absolute  top-[160px]  left-[1200px]" src={vector2} alt="vector"></Image>
            
            
            
            
            <Image className=" hidden lg:block w-[577px]  h-[173px]   absolute  top-[230px]  left-[100px] " src={find} alt="find"></Image>
            <div className=" w-[545px] hidden lg:block  h-[33px]  absolute top-[442px] left-[100px]"><p className="font-normal  text-[16px] leading-[22px] text-[#00000099]  ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p></div>
            <div className="w-[210px] h-[52px]  bg-[black] rounded-[62px] hidden lg:block   absolute top-[507px] left-[100px] my-[12px] ">
                <p className="w-[75px] h-[22px] text-white font-medium text-[16px] leading-[21.6px] text-nowrap px-[65px] py-[16px] ">Shop Now</p>
            </div>
            
            <div>
                
            </div>
            <div className=" w-[596px] h-[74px] absolute top-[607px] left-[100px] flex items-center justify-between hidden md:block ">
                <div className="w-[141px] h-[74px] ">
                    <p className="w-[107px] h-[54px] text-[40px] leading-[54px] text-black font-bold ">200+</p>
                    <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">International Brands</p>
                </div>
                
                <div className="w-[171px] h-[74px] ">
                <p className="w-[146px] h-[54px] font-bold leading-[54px] text-black text-[40px] ">30,000+</p>
                <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">Happy Customers</p>
                </div>
                <div className="w-[156px] h-[74px]  mx-[5px] my-[-70px]">
                    <p className="w-[146px] h-[54px] font-bold leading-[54px] text-black text-[40px] ">2,000+</p>
                    <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">High-Quality Products</p>
                </div>

            </div>
            <Responsive1 />


          
            




        </div>
    )
}