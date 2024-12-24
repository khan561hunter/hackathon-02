"use client";
import Image from "next/image";
import frame from "@/app/assets/Frame (2).png"
import logo from "@/app/assets/logo.png"
import socials from "@/app/assets/Social.png"
import about from "@/app/assets/About Features Works.png"
import help from "@/app/assets/About Features Works (1).png"
import faq from "@/app/assets/About Features Works (2).png"
import resource from "@/app/assets/About Features Works (3).png"
import cards from "@/app/assets/Frame 53.png"
import Responsive2 from "./responsive";


export default function Four (){
    return(
        <main className="md:max-w-[1440px] w-full m-auto relative">
            
            <div className=" w-full absolute top-[3781px] hidden md:block  ">
            <div className="w-full absolute left-[100px]  bg-black rounded-[20px] flex justify-between">
                <div className="w-full h-full mx-[64px] my-[36px] flex items-center ">
                    <p className="font-bold text-[40px] leading-[45px] text-wrap text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                </div>
                <div className="w-[349px] h-[108px] mx-[64px] my-[36px]  ">
                    <div className="w-[349px] h-[48px] rounded-[62px] bg-white py-[12px] px-[16px] flex ">
                        <div className="w-[24px] h-[24px] "><Image src={frame} alt="envelope"></Image></div>
                        <div className="w-[173px] h-[22px] mx-[16px]">
                            <p className="font-normal text-nowrap  text-[16px] leading-[21.6px] text-[#00000066]">Enter your email address</p>
                        </div>
                        

                    </div>
                    <div className="w-[349px] h-[46px]  px-[86px] py-[12px] rounded-[62px] bg-white my-[12px] ">
                        <div className="w-[172px] h-[22px] flex items-center">
                            <p className="font-medium text-[16px] text-black leading-[21.6px] text-nowrap">Subscribe to Newsletter</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-[1440px] h-[499px] bg-[#F0F0F0] my-[93px]">
                <div className="w-[1240px] h-[177px]  absolute left-[100px] top-[230px] flex justify-between ">
                    <div className="w-[248px] h-[177px] ">
                        <div className="w-[248px] h-[114px] ">
                            <Image className="w-[167px] h-[23px]" src={logo} alt="logo"></Image>
                            <div className="w-[248px] h-[66px] my-[25px]"><p className="font-normal text-[#00000099] text-[14px] leading-[22px] ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p></div>
                        </div>
                        <div className="w-[148px] h-[28px] my-[35px]">
                            <Image src={socials} alt="socials"></Image>

                        </div>
                    </div>
                    <div className="w-[104px] h-[177px] ">
                        <div className="w-[98px] h-[18px]"><p className="font-medium text-black text-[16px] leading-[18px] tracking-[3px] ">COMPANY</p></div>
                        <div className="w-[104px] h-[133px] my-[26px]"><Image src={about} alt="about"></Image></div>
                    </div>
                    <div className="w-[136px] h-[177px]">
                        <div className="w-[49px] h-[18px]"><p className="font-medium text-black text-[16px] leading-[18px] tracking-[3px] ">HELP</p></div>
                        <div className="w-[136px] h-[133px] my-[26px] "><Image src={help} alt="help"></Image></div>
                    </div>
                    <div className="w-[149px] h-[177px] ">
                        <div className="w-[37px] h-[18px]"><p className="font-medium text-black text-[16px] leading-[18px] tracking-[3px] ">FAQ</p></div>
                        <div className="w-[149px] h-[133px] my-[26px]"><Image src={faq} alt="faq"></Image></div>
                    </div>
                    <div className="w-[149px] h-[177px] ">
                        <div className="w-[118px] h-[18px]"><p className="font-medium text-black text-[16px] leading-[18px] tracking-[3px] ">RESOURCES</p></div>
                        <div className="w-[149px] h-[133px] my-[26px]"><Image src={resource} alt="faq"></Image></div>
                    </div>
                </div>

            </div>

        </div>
        <div className="w-[1240px] absolute top-[4238px] left-[100px] border-[1px] bg-[#0000001A] hidden lg:block"></div>
        <div className="w-[269px] h-[19px] absolute top-[4263px] left-[100px] hidden lg:block">
            <p className="text-nowrap font-normal text-[#00000099] text-[14px] ">Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
        <div className="w-[281.07px] h-[30.03px] absolute top-[4258px] left-[1059px] hidden lg:block "><Image src={cards} alt="cards"></Image></div>
        <Responsive2 />
        
        </main>
        
    )
}

