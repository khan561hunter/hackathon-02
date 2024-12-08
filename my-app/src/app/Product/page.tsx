"use client";
import React from "react";
import Image from "next/image";
import tshirt1 from "@/app/assets/image 2.png"
import tsh2 from "@/app/assets/image 1.png"
import tsh3 from "@/app/assets/image 5.png"
import tsh4 from "@/app/assets/image 6.png"
import stars from "@/app/assets/Frame 11.png"
import cost from "@/app/assets/Frame 12.png"
import discount from "@/app/assets/Frame 3.png"
import line from "@/app/assets/Line 1.png"
import colours from "@/app/assets/Frame 77.png"
import size from '@/app/assets/Frame 17.png'
import line2 from "@/app/assets/Line 5.png"
import change from "@/app/assets/Frame 19.png"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Review from "./review";


export default function Men(){
    return(
        <main className="">
            <div >
                <div className="absolute top-[216px] left-[100px]">
                    <Image src={tshirt1} alt="tshirt1"></Image>
                </div>
                <div className="absolute top-[397px] left-[100px]">
                    <Image src={tsh3} alt="tshirt1"></Image>
                </div>
                <div className="absolute top-[579px] left-[100px]">
                    <Image src={tsh4} alt="tshirt1"></Image>
                </div>
                <div className="absolute top-[216px] left-[266px]">
                    <Image src={tsh2} alt="tshirt1"></Image>
                </div>

                <div className="w-[600px] h-[48px] absolute top-[216px] left-[750px]">
                    <p className="text-[40px] leading-[48px] font-extrabold">ONE LIFE GRAPHIC T-SHIRT</p>
                </div>

                <div className="absolute top-[278px] left-[750px]">
                    <Image src={stars} alt="stars"></Image>
                </div>

                <div className="absolute top-[317px] left-[750px]">
                    <Image src={cost} alt="stars"></Image>
                </div>

                <div className="absolute top-[321px] left-[938px]">
                    <Image src={discount} alt="stars"></Image>
                </div>

                    

                <div className="w-[590px] h-[33px] absolute top-[380px] left-[750px] ">
                    <p className="font-normal text-[16px] text-[#00000099]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                </div>

                <Image className="absolute top-[440px] left-[750px]" src={line} alt="line"></Image>

                <p className="absolute top-[461px] left-[750px] text-[#00000099]">Select Colors</p>

                <Image className="absolute top-[488px] left-[750px] my-[10px] " src={colours} alt="colours"></Image>

                <Image className="absolute top-[549px] left-[750px]" src={line} alt="line"></Image>

                <p className="absolute top-[573px] left-[750px] text-[#00000099]">Choose Size</p>

                <div className="w-[420px] h-[46px] absolute top-[600px] left-[750px] flex justify-between ">
                    <div className="w-[86px] h-[46px] rounded-[62px] bg-[#F0F0F0] ">
                        <p className="text-[#00000099] px-[24px] py-[11px] hover:bg-black hover:rounded-[62px] hover:text-white">Small</p>
                    </div>
                    <div className="w-[105px] h-[46px] rounded-[62px] bg-[#F0F0F0]">
                        <p className="text-[#00000099] px-[24px] py-[11px] hover:bg-black hover:rounded-[62px] hover:text-white">Medium</p>
                    </div>
                    <div className="w-[89px] h-[46px] rounded-[62px] bg-[#F0F0F0]">
                        <p className="text-[#00000099] px-[24px] py-[11px] hover:bg-black hover:rounded-[62px] hover:text-white">Large</p>
                    </div>
                    <div className="w-[104px] h-[46px] rounded-[62px] bg-[#F0F0F0]">
                        <p className="text-[#00000099] px-[24px] py-[11px] hover:bg-black hover:rounded-[62px] hover:text-white">X-Large</p>
                    </div>


                </div>

                
                <Image className="absolute top-[670px] left-[750px]" src={line} alt="line"></Image>

                <Image className="absolute top-[694px] left-[750px]" src={size} alt="size"></Image>

                <div className="w-[400px] h-[52px] absolute top-[694px] left-[940px] rounded-[62px] bg-black px-[7%] py-[16px]">
                    <p className=" text-white text-[16px] leading-[21.6px] font-medium">Add to Cart</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-[20px] text-[#00000099] font-normal  absolute top-[826px] left-[240px]">Product Details</p>
                    <p className="text-[20px] text-[#00000099] font-normal  absolute top-[826px] left-[642px]">Rating & Reviews</p>
                    <p className="text-[20px] text-[#00000099] font-normal  absolute top-[826px] left-[1110px]">FAQs</p>
                </div>

                <Image className="absolute top-[864px] left-[100px]" src={line2} alt="line"></Image>

                <div className="w-[125px] h-[32px] absolute top-[896px] left-[100px]">
                    <p className="font-bold text-[24px] leading-[32.4px] text-nowrap">All Reviews</p>
                </div>
                <div className="w-[33px] h-[11px] absolute top-[898px] left-[233px]">
                    <p className="font-normal text-[#00000099] text-[16px] leading-[32.4px] text-nowrap">(451)</p>
                </div>

                <div className="w-[354px] h-[48px] absolute top-[888px] left-[986px] flex justify-between">
                    <div><Image src={change} alt="change"></Image></div>
                    <div className="w-[120px] h-[48px] rounded-[62px] bg-[#F0F0F0] ">
                        <p className="font-medium text-[16px] leading-[21.6px] px-[24px] py-[12px] flex justify-between items-center">Latest<MdOutlineKeyboardArrowDown /></p>
                    </div>
                    <div className="w-[166px] h-[48px] rounded-[62px] bg-black">
                        <p className="text-white text-[16px] font-normal px-[24px] py-[12px]">Write a Review</p>
                    </div>

                </div>
                

            </div>
            <Review />
        </main>
    )
}