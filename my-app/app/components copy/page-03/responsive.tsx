import Image from "next/image"
import pic1 from "@/app/assets/Frame 32.png"
import star1 from "@/app/assets/Frame 35.png"
import pic2 from "@/app/assets/Frame 33.png"
import star2 from "@/app/assets/Frame 39.png"
import half from "@/app/assets/Frame 58.png"
import price1 from "@/app/assets/Frame 59.png"
import line from "@/app/assets/Line 4 (1).png"
import s_pic1 from "@/app/assets/Frame 32 (1).png"
import orange from "@/app/assets/orange.png"
import dress1 from "@/app/assets/Frame 105.png"
import dress2 from "@/app/assets/Frame 106.png"
import dress3 from "@/app/assets/Frame 107.png"
import dress4 from "@/app/assets/Frame 108.png"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import star from "@/app/assets/Frame 10.png"
import name1 from "@/app/assets/Frame 31.png"





export default function Responsive(){
    return(
        <main className="w-screen h-full">
            <div className="lg:hidden my-[60%] w-screen">
                <div className="w-[269px] h-[38px] my-[17%] m-[50px] ">
                    <p className="text-nowrap text-black font-extrabold text-[32px] leading-[38.4px] text-center  ">
                    NEW ARRIVALS
                    </p>
                </div>
                <div className="flex p-4 my-[-16%]">
                    <div className="grid gap-1 ">
                        <Image
                            className="w-[198px] h-[200.01px] "
                            src={pic1}
                            alt="pic1"
                        />
                        <div className="w-[225px] h-[27px] ">
                            <p className="font-bold text-[16px] leading-[21.6px] text-nowrap">
                            T-shirt with Tape Details
                            </p>
                        </div>
                        <Image
                            className="w-[127px] h-[16px] "
                            src={star1}
                            alt="star"
                        />
                        <div className="w-[55px] h-[32px] ">
                            <p className="font-bold text-[20px] leading-[27px]">$120</p>
                        </div>
                        </div>
            
                        <div className="grid gap-1">
                        <Image
                            className="w-[198px] h-[200.01px] "
                            src={half}
                            alt="pic2"
                        />
                        <div className="w-[150px] h-[27px] ">
                            <p className="font-bold text-[16px] leading-[21.6px]">Skinny Fit Jeans</p>
                        </div>
                        <Image
                            className="w-[127px] h-[16px] "
                            src={star2}
                            alt="star2"
                        
                        />
                        <div className="w-[150px] h-[27px] ">
                            <Image src={price1} alt="price" />
                        </div>
                    </div>
                
                </div>
                <div className="w-[358px] h-[46px] m-5 my-[18%] rounded-[62px] border-[1px] border-[#0000001A]">
                    <p className=" w-[51px] h-[19px] mx-[25%] font-medium text-[14px] text-center px-[54px] py-[16px] leading-[18.9px] text-nowrap">View All</p>
                </div>
                <Image className="m-4 my-[-20px]" src={line} alt="line"></Image>
                <div className="w-[231px] h-[38px] m-8 my-[20%] ">
                    <p className="font-extrabold text-nowrap text-[32px] leading-[38.4px] text-center mx-[30%]">TOP SELLING</p>
                    </div>

                <div className="mt-[-10%] flex p-2">
                    

                     
                    <div className=" grid gap-1">
                        <Image
                            className="w-[198px] h-[200.01px] "
                            src={s_pic1}
                            alt="pic1"
                        />
                        <div className="w-[225px] h-[27px] ">
                            <p className="font-bold text-[16px] leading-[21.6px] text-nowrap">
                            T-shirt with Tape Details
                            </p>
                        </div>
                        <Image
                            className="w-[127px] h-[16px] "
                            src={star1}
                            alt="star"
                        />
                        <div className="w-[55px] h-[32px] ">
                            <p className="font-bold text-[20px] leading-[27px]">$120</p>
                        </div>
                        </div>
            
                        <div className="grid gap-1">
                            <Image
                                className="w-[198px] h-[200.01px] "
                                src={orange}
                                alt="pic2"
                            />
                            <div className="w-[150px] h-[27px] ">
                                <p className="font-bold text-[16px] leading-[21.6px]">Skinny Fit Jeans</p>
                            </div>
                            <Image
                                className="w-[127px] h-[16px] "
                                src={star2}
                                alt="star2"
                            
                            />
                            <div className="w-[150px] h-[27px] ">
                                <Image src={price1} alt="price" />
                            </div>
                    </div>

                    

                </div>
                <div className="w-[358px] h-[46px] m-5 my-[4%] rounded-[62px] border-[1px] border-[#0000001A]">
                    <p className=" w-[51px] h-[19px] mx-[25%] font-medium text-[14px] text-center px-[54px] py-[16px] leading-[18.9px] text-nowrap">View All</p>
                </div>
                <div className="w-[358px] h-[975px] bg-[#F0F0F0] m-4 rounded-[20px] my-[15%]">
                    <div className="w-[246px] h-[72px] m-12 ">
                        <p className="text-center text-[32px] leading-[36px] font-extrabold p-5 py-[15%]">BROWSE BY DRESS STYLE</p>
                    </div>
                    <div className="p-6 grid gap-4">
                        <div className="w-[310px] h-[190px]"><Image src={dress1} alt="dress"></Image></div>
                        <div className="w-[310px] h-[190px] "><Image src={dress2} alt="dress"></Image></div>
                        <div className="w-[310px] h-[190px] "><Image src={dress3} alt="dress"></Image></div>
                        <div className="w-[310px] h-[190px] "><Image src={dress4} alt="dress"></Image></div>

                    </div>
                   

                </div>
                    <div className="flex">
                        <div className="w-[286px] h-[72px] m-4 ">
                        <p className="font-extrabold text-[32px] leading-[37px] text-black">OUR HAPPY CUSTOMERS</p>
                    </div>
                    <div className="flex my-[17%] gap-3">
                        <GoArrowLeft className="w-[24px] h-[24px] " />
                        <GoArrowRight className="w-[24px] h-[24px] " />
                    </div>

                </div>
                <div className=" w-[358px] h-[186.19px] border-[1px] border-[#0000001A] rounded-[20px] p-2 mx-4  ">
                      <Image className="w-[118px] h-[19.19px] my-[6.49px] m-6 " src={star} alt="star"></Image>
                      <div className="w-[310px] h-[107px] m-6">
                          <Image className="w-[89px] h-[19px] my-[15px]" src={name1} alt="name"></Image>
                          <div className="my-[15px] font-normal text-[#00000099] text-[14px] text-wrap leading-[20px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</div>

                      </div>


                </div>
                
              
                

            </div>
            
        </main>
    )
}



