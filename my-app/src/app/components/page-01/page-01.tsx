"use client";
import Image from "next/image"
import find from "@/app/assets/FIND CLOTHES THAT MATCHES YOUR STYLE.png"

import rec from "@/app/assets/Rectangle 2 (1).png"
import vector from "@/app/assets/Vector.png"
import vector2 from "@/app/assets/Vector (1).png"
import num from "@/app/assets/Frame 56.png"
import num1 from "@/app/assets/Frame 57.png"
import rec2 from "@/app/assets/Rectangle 2 (2).png"



export default function One(){
    return(
        <div className="   flex items-center">
            <Image className="lg:w-[1440px]  lg:h-[663px] sm:w-[390px] sm:h-[448px] sm:absolute sm:top-[503px] lg:absolute lg:top-[134px]" src={rec} alt="rect"></Image>
            <Image className=" lg:absolute lg:top-[431px] lg:left-[750px]" src={vector} alt="vector"></Image>
            <Image className="lg:absolute lg:top-[220px] lg:left-[1200px]" src={vector2} alt="vector"></Image>
            <div className="lg:hidden sm:absolute sm:top-[98px] sm:w-[390px] sm:bg-[#F2F0F1] sm:h-[853px] ">
            <Image className="sm:block lg-hidden sm:w-[278px] sm:h-[52px] sm:absolute sm:top-[301px] sm:left-[56px]" src={num1} alt="num"></Image>
            <Image className="sm:block lg-hidden sm:w-[103px] sm:h-[48px] sm:absolute sm:top-[363px] sm:left-[144px]" src={num} alt="num"></Image>
            <Image className="lg:w-[1440px]  lg:h-[663px] sm:w-[390px] sm:h-[448px] sm:absolute sm:top-[405px] lg:absolute lg:top-[134px]" src={rec2} alt="rect"></Image>
            <Image className=" sm:absolute sm:top-[542px] sm:left-[27px] sm:w-[44px] sm:h-[44px]" src={vector} alt="vector"></Image>
            <Image className="sm:absolute sm:top-[445px] sm:left-[293px] sm:w-[76px] sm:h-[76px]" src={vector2} alt="vector"></Image>
            </div>
            
            
            <Image className="sm:w-[315px] sm:h-[93px] sm:absolute sm:top-[134px] sm:left-[16px]  lg:w-[577px] lg:h-[173px]  lg:absolute lg:top-[237px] lg:left-[100px] " src={find} alt="find"></Image>
            <div className="lg:w-[545px] sm:w-[358px] sm:h-[50px]  lg:h-[33px] sm:absolute sm:top-[251px] sm:left-[16px] lg:absolute lg:top-[442px] lg:left-[100px]"><p className="lg:font-normal sm:font-normal sm:text-[14px] sm:leading-[20px] text-[16px] leading-[22px] text-[#00000099]  ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p></div>
            <div className="lg:w-[210px] lg:h-[52px] sm:w-[358px] sm:h-[52px] bg-[black] rounded-[62px] sm:absolute sm:top-[325px] sm:left-[16px]   lg:absolute lg:top-[507px] lg:left-[100px] my-[12px] ">
                <p className="w-[75px] h-[22px] text-white font-medium text-[16px] leading-[21.6px] text-nowrap lg:px-[65px] lg:py-[16px] sm:px-[135px] sm:py-[16px]">Shop Now</p>
            </div>
            <div>
                
            </div>
            <div className="md:hidden sm:hidden lg:block lg:w-[596px] lg:h-[74px] absolute top-[607px] left-[100px] flex items-center justify-between">
                <div className="w-[141px] h-[74px] ">
                    <p className="w-[107px] h-[54px] text-[40px] leading-[54px] text-black font-bold ">200+</p>
                    <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">International Brands</p>
                </div>
                <div className="w-[156px] h-[74px]  mx-[200px] my-[-70px]">
                    <p className="w-[146px] h-[54px] font-bold leading-[54px] text-black text-[40px] ">2,000+</p>
                    <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">High-Quality Products</p>
                </div>

                <div className="w-[171px] h-[74px] mx-[410px] my-[-50px]">
                <p className="w-[146px] h-[54px] font-bold leading-[54px] text-black text-[40px] ">30,000+</p>
                <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">Happy Customers</p>
                </div>
            </div>
        </div>
    )
}