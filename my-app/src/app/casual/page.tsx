import Link from "next/link";
import Image from "next/image";
import line5 from "@/app/assets/Line 4.png"
import mixer from "@/app/assets/Frame.png"
import line from "@/app/assets/Line 9.png"
import { IoIosArrowUp } from "react-icons/io";
import rate from "@/app/assets/Group 7.png"
import palette from "@/app/assets/Frame 89.png"
import tsh2 from "@/app/assets/tsh (2).png"
import tsh3 from "@/app/assets/tsh (3).png"
import tsh5 from "@/app/assets/tsh (5).png"
import three from "@/app/assets/Frame 39.png"
import four from "@/app/assets/Frame 40.png"
import five from "@/app/assets/Frame 35 (1).png"
import price from "@/app/assets/price.png"
import one from "@/app/assets/$145.png"
import two from "@/app/assets/$180.png"
import pic2 from "@/app/assets/Frame 33.png"
import pic3 from "@/app/assets/Frame 34.png"
import pic4 from "@/app/assets/Frame 38.png"
import star2 from "@/app/assets/Frame 39.png"
import star3 from "@/app/assets/Frame 40.png"
import star4 from "@/app/assets/Frame 41.png"
import price1 from "@/app/assets/Frame 59.png"
import price2 from "@/app/assets/Frame 44.png"
import s_pic1 from "@/app/assets/Frame 32 (1).png"
import s_pic2 from "@/app/assets/Frame 33 (1).png"
import s_pic3 from "@/app/assets/Frame 34 (1).png"
import line1 from "@/app/assets/Line 9 (1).png"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
 
export default function Casual(){
    return(
        <main className="md:max-w-[1440px] w-full m-auto relative ">
            <div className="">
                <div className="absolute top-[134px] left-[100px]">
                    <Image src={line5} alt="line5"></Image>
                </div>
                <div className="flex gap-x-2 text-[#00000099] absolute top-[158px] mx-[100px]">
                    <Link className="hover:text-black" href="/">Home </Link>
                    <div>{`>`}</div>
                    <Link className="hover:text-black"  href="/casual">Casual</Link>
                </div>
                <div className="w-[295px] h-[1220px] border-[1px] rounded-[20px] border-[#0000001A] mx-[100px] absolute top-[204px] ">
                    <div className="w-[247px] h-[27px] flex justify-between m-6 ">
                        <div className="w-[57px] h-[27px] ">
                            <p className="text1">Filters</p>
                        </div>
                        <div className="">
                            <Image src={mixer} alt="mixer"></Image>
                        </div>
                    </div>
                    <Image className="m-6" src={line} alt="line"></Image>
                    <div className="w-[247px] h-[160px] m-6 my-[6px] ">
                        <ul className="grid grid-cols-1 gap-[10px] text-[#00000099] ">
                        <li className="flex justify-between">T-shirts<div>{`>`}</div></li>
                        <li className="flex justify-between">Shorts<div>{`>`}</div></li>
                        <li className="flex justify-between">Shirts<div>{`>`}</div></li>
                        <li className="flex justify-between">Hoodie<div>{`>`}</div></li>
                        <li className="flex justify-between">Jeans<div>{`>`}</div></li>

                        </ul>
                        

                    </div>
                    <Image className="m-6" src={line} alt="line"></Image>
                    <div className="w-[247px] h-[90px] m-6">
                        <div className="w-[247px] h-[27px] flex items-center justify-between ">
                            <div className="text1">Price</div>
                            <div className="w-[16px] h-[16px]"><IoIosArrowUp /></div>

                        </div>
                        <div className="">
                            <Image className="my-5" src={rate} alt="rate"></Image>
                        </div>


                    </div>
                    <Image className="m-6" src={line} alt="line"></Image>
                    <div className="w-[247px] h-[137px] m-6 grid gap-[20px]">
                        <div className="w-[247px] h-[27px] flex items-center justify-between ">
                            <div className="text1">Colors</div>
                            <div className="w-[16px] h-[16px]"><IoIosArrowUp /></div>
                        
                        </div>
                        <Image className="w-[247px] h-[90px]" src={palette} alt="color"></Image>



                    </div>
                    <Image className="m-6" src={line} alt="line"></Image>
                    <div className="w-[247px] h-[274px] m-6 grid gap-[20px]">
                        <div className="w-[247px] h-[27px] flex items-center justify-between ">
                            <div className="text1">Size</div>
                            <div className="w-[16px] h-[16px]"><IoIosArrowUp /></div>
                        
                        </div>
                        <div className="w-[247px] h-[227px]">
                            <ul className="grid grid-cols-2 gap-y-[8px] ">
                                <li className="w-[96px] h-[36px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center hover:bg-[black] hover:text-[white]">XX-Small</li>
                                <li className="w-[88px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center mx-[-18px] hover:bg-[black] hover:text-[white]">X-Small</li>
                                <li className="w-[74px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center hover:bg-[black] hover:text-[white]">Small</li>
                                <li className="w-[90px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center mx-[-42px] hover:bg-[black] hover:text-[white]">Medium</li>
                                <li className="w-[76px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center hover:bg-[black] hover:text-[white]">Large</li>
                                <li className="w-[89px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center mx-[-40px] hover:bg-[black] hover:text-[white]">X-large</li>
                                <li className="w-[98px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center hover:bg-[black] hover:text-[white]">XX-Large</li>
                                <li className="w-[97px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center mx-[-18px] hover:bg-[black] hover:text-[white]">3X-Large</li>
                                <li className="w-[98px] h-[39px] rounded-[62px] bg-[#F0F0F0] px-[20px] py-[10px] text-nowrap text2 text-[#00000099] text-center hover:bg-[black] hover:text-[white]">4X-Large</li>
                            </ul>

                        </div>

                    </div>
                    <Image className="m-6" src={line} alt="line"></Image>
                    <div className="w-[247px] h-[171px] m-6 grid gap-[20px]">
                        <div className="w-[247px] h-[27px] flex items-center justify-between ">
                            <div className="text1">Dress Style</div>
                            <div className="w-[16px] h-[16px]"><IoIosArrowUp /></div>

                        </div>
                        <ul className="grid grid-cols-1 gap-[10px] text-[#00000099]">
                        <li className="flex justify-between">Casual<div>{`>`}</div></li>
                        <li className="flex justify-between">Formal<div>{`>`}</div></li>
                        <li className="flex justify-between">Party<div>{`>`}</div></li>
                        <li className="flex justify-between">Gym<div>{`>`}</div></li>
                        

                        </ul>
                        


                    </div>
                    <div className="w-[247px] h-[48px] bg-[black] rounded-[62px] m-6 my-[-5px]">
                        <p className="text-white px-[54px] py-[14px] text-center text3">Apply Filter</p>

                    </div>


                </div>

                <div className="w-[101px] h-[43px] absolute top-[204px] left-[415px] ">
                    <p className="text4">Casual</p>

                </div>
                <div className="w-[396px] h-[16px] absolute top-[222px] left-[944px] flex justify-around gap-1">
                    <p className="text-[#00000099] text5 ">Showing 1-10 of 100 Products</p>
                    <p className=" text-[#00000099] text5">Sort by:<span className="text-black text6">Most Popular</span> </p>

                </div>
                <div>
                <Image className="absolute top-[263px] left-[415px] " src={tsh2} alt="tsh2"></Image>
                <p className="text1 absolute top-[577px] left-[415px]">Gradient Graphic T-shirt</p>
                <Image className="absolute top-[612px] left-[415px] " src={three} alt="three"></Image>
                <Image className="absolute top-[639px] left-[415px]" src={one} alt="one"></Image>
                
                </div>
                <div>
                <Image className="absolute top-[263px] left-[730px] rounded-[20px]" src={tsh3} alt="tsh2"></Image>
                <p className="text1 absolute top-[577px] left-[730px]">Polo with Tipping Details</p>
                <Image className="absolute top-[612px] left-[730px] " src={four} alt="three"></Image>
                <Image className="absolute top-[639px] left-[730px]" src={two} alt="two"></Image>

                </div>
                <div>
                <Image className="absolute top-[263px] left-[1045px] rounded-[20px]" src={tsh5} alt="tsh2"></Image>
                <p className="text1 absolute top-[577px] left-[1045px]">Black Striped T-shirt</p>
                <Image className="absolute top-[612px] left-[1045px] " src={five} alt="three"></Image>
                <Image className="absolute top-[639px] left-[1045px]" src={price} alt="price"></Image>
                
                </div>

                <div className="w-[925px] h-[408px] absolute top-[707px] left-[416px] flex justify-between">
                    <div className="grid gap-3">
                        <Image
                        className="w-[295px] h-[298px] "
                        src={pic2}
                        alt="pic2"
                        />
                        <div className="w-[150px] h-[27px] ">
                            <p className="font-bold text-[20px] leading-[27px]">Skinny Fit Jeans</p>
                        </div>
                        <Image
                            className="w-[126.2px] h-[19px] "
                            src={star2}
                            alt="star2"
        
                        />
                        <div className="w-[200px] h-[32px] ">
                            <Image src={price1} alt="price" />
                        </div>
                    </div>
    
                    <div className="grid gap-3">
                        <Image
                            className="w-[295px] h-[298px] "
                            src={pic3}
                            alt="pic3"
                        />
                        <div className="w-[151px] h-[27px] ">
                            <p className="font-bold text-[20px] leading-[27px]">Checkered Shirt</p>
                        </div>
                        <Image
                            className="w-[126.2px] h-[19px] "
                            src={star3}
                            alt="star"
                        />
                        <div className="w-[55px] h-[32px] ">
                            <p className="font-bold text-[24px] leading-[32.4px]">$180</p>
                        </div>
                    </div>
    
                    <div className="grid gap-3">
                        <Image
                            className="w-[295px] h-[298px] "
                            src={pic4}
                            alt="pic4"
                        />
                        <div className="w-[199px] h-[27px] ">
                            <p className="font-bold text-[20px] leading-[27px] text-nowrap">
                                Sleeve Stripped T-shirt
                            </p>
                        </div>
                        <Image
                            className="w-[126.2px] h-[19px]"
                            src={star4}
                            alt="star"
                        />
                        <div className="w-[200px] h-[32px] ">
                            <Image src={price2} alt="price" />
                        </div>
                    </div>
                    

                </div>
                <div className="w-[925px] h-[408px] absolute top-[1151px] left-[415px] flex justify-between">
                    <div className="grid gap-3">
                        <Image
                        className="w-[295px] h-[298px] "
                        src={s_pic1}
                        alt="pic2"
                        />
                        <div className="w-[150px] h-[27px] ">
                            <p className="font-bold text-[20px] leading-[27px] text-nowrap">Vertical Stripped Shirt</p>
                        </div>
                        <Image
                            className="w-[126.2px] h-[19px] "
                            src={star2}
                            alt="star2"
        
                        />
                        <div className="w-[200px] h-[32px] ">
                            <Image src={price1} alt="price" />
                        </div>
                    </div>
    
                    <div className="grid gap-3">
                        <Image
                            className="w-[295px] h-[298px] "
                            src={s_pic2}
                            alt="pic3"
                        />
                        <div className="w-[151px] h-[27px] ">
                            <p className="font-bold text-[20px] leading-[27px] text-nowrap">Courage Graphic T-shirt</p>
                        </div>
                        <Image
                            className="w-[126.2px] h-[19px] "
                            src={star3}
                            alt="star"
                        />
                        <div className="w-[55px] h-[32px] ">
                            <p className="font-bold text-[24px] leading-[32.4px]">$180</p>
                        </div>
                    </div>
    
                    <div className="grid gap-3">
                        <Image
                            className="w-[295px] h-[298px] "
                            src={s_pic3}
                            alt="pic4"
                        />
                        <div className="w-[199px] h-[27px] ">
                            <p className="font-bold text-[20px] leading-[27px] text-nowrap">
                                Loose Fit Bermuda Shorts
                            </p>
                        </div>
                        <Image
                            className="w-[126.2px] h-[19px]"
                            src={star4}
                            alt="star"
                        />
                        <div className="w-[200px] h-[32px] ">
                            <Image src={price2} alt="price" />
                        </div>
                    </div>
                    

                </div>
                <Image className="absolute top-[1591px] left-[415px] " src={line1} alt="line5"></Image>
                <div className="w-[920px] h-[40px] absolute top-[1611px] left-[415px] flex justify-between">
                    
                    <div className="w-[110px] h-[36px] rounded-[8px] border-[1px] border-[#f5f5f]  ">
                        <div className="text7 text-right px-[14px] py-[7px]">Previous</div>
                    <GoArrowLeft className="absolute top-[12px] left-[12px]" />
                    </div>
                    <div className="w-[292px] h-[40px] flex ">
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px] ">1</div>
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px]">2</div>
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px]">3</div>
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px]">...</div>
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px]">8</div>
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px]">9</div>
                        <div className="w-[40px] h-[40px] hover:bg-[#f5f5f5] py-[10px] px-[12px]">10</div>
                        

                    </div>
                    <div className="w-[86px] h-[36px] rounded-[8px] border-[1px] border-[#f5f5f]  ">
                        <div className="text7 text-left px-[9px] py-[6px]">Next</div>
                    <GoArrowRight className="my-[-24px] mx-[60px]" />
                    </div>



                </div>
                
                
               

            </div>
            

        </main>
    )
}