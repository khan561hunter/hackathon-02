import Link from "next/link"
import Image from "next/image"
import line5 from "@/app/assets/Line 4.png"
import tsh2 from "@/app/assets/tsh (2).png"
import one from "@/app/assets/$145.png"
import { BsFillTrash3Fill } from "react-icons/bs";
import size from "@/app/assets/Frame 17.png"
import line from "@/app/assets/Line 5 (1).png"
import five from "@/app/assets/$565.png"
import minus from "@/app/assets/-$113.png"
import fif from "@/app/assets/$15.png"
import four from "@/app/assets/$467.png"
import line1 from "@/app/assets/Line 6.png"
import { GoTag } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import pic2 from "@/app/assets/Frame 33.png"
import pic3 from "@/app/assets/Frame 34.png"





export default function Cart(){
    return(
        <main className="md:max-w-[1440px] w-full m-auto relative ">
            <div className="absolute top-[134px] left-[100px]">
                <Image src={line5} alt="line5"></Image>
            </div>
            <div className="flex gap-x-2 text-[#00000099] absolute top-[158px] mx-[100px]">
                <Link className="hover:text-black" href="/">Home </Link>
                <div>{`>`}</div>
                <Link className="hover:text-black"  href="/casual">Cart</Link>
            </div>
            <div className="w-[259px] h-[48px] absolute top-[204px] left-[100px]  ">
                <p className="text8">YOUR CART</p>

            </div>
            <div className="w-[715px] h-[508px] absolute top-[276px] left-[100px] border-[1px] border-[#f0f0f0] rounded-[20px]">
                <div className="w-[667px] h-[127px] mx-[24px] my-[20px] flex gap-[16px]">
                    <Image className="w-[124px] h-[124px] " src={tsh2} alt="tsh2"></Image>
                    <div className="w-[527px] h-[124px] flex justify-between">
                        <div className="w-[227px] h-[118px] grid gap-[24px] ">
                            <div className="w-[227px] h-[71px] grid gap-[2px]">
                                <p className="text1 text-nowrap">Gradient Graphic T-shirt</p>
                                <p className="text2 text-black">Size : <span className="text-[#00000099]">Large</span></p>
                                <p className="text2 text-black">Colour : <span className="text-[#00000099]">White</span></p>

                            </div>
                            <div>
                                <Image src={one} alt="one"></Image>
                            </div>

                        </div>
                        <div className="w-[225px] h-[124px] ">
                            <BsFillTrash3Fill className="fill-[red] absolute left-[675px]"/>
                            <Image className="absolute left-[520px] top-[95px]" src={size} alt="size"></Image>


                        </div>

                    </div>
                </div>
                <Image className="m-6" src={line} alt="line"></Image>
                <div className="w-[667px] h-[127px] mx-[24px] my-[20px] flex gap-[16px]">
                <Image
                        className="w-[124px] h-[124px] "
                        src={pic2}
                        alt="pic2"
                        />
                    <div className="w-[527px] h-[124px] flex justify-between">
                        <div className="w-[227px] h-[118px] grid gap-[24px] ">
                            <div className="w-[227px] h-[71px] grid gap-[2px]">
                                <p className="text1 text-nowrap">Gradient Graphic T-shirt</p>
                                <p className="text2 text-black">Size : <span className="text-[#00000099]">Large</span></p>
                                <p className="text2 text-black">Colour : <span className="text-[#00000099]">White</span></p>

                            </div>
                            <div>
                                <Image src={one} alt="one"></Image>
                            </div>

                        </div>
                        <div className="w-[225px] h-[124px] ">
                            <BsFillTrash3Fill className="fill-[red] absolute left-[675px]"/>
                            <Image className="absolute left-[520px] top-[270px]" src={size} alt="size"></Image>


                        </div>

                    </div>
                </div>
                <Image className="m-6" src={line} alt="line"></Image>
                <div className="w-[667px] h-[127px] mx-[24px] my-[20px] flex gap-[16px]">
                <Image
                            className="w-[124px] h-[124px] "
                            src={pic3}
                            alt="pic3"
                        />
                    <div className="w-[527px] h-[124px] flex justify-between">
                        <div className="w-[227px] h-[118px] grid gap-[24px] ">
                            <div className="w-[227px] h-[71px] grid gap-[2px]">
                                <p className="text1 text-nowrap">Gradient Graphic T-shirt</p>
                                <p className="text2 text-black">Size : <span className="text-[#00000099]">Large</span></p>
                                <p className="text2 text-black">Colour : <span className="text-[#00000099]">White</span></p>

                            </div>
                            <div>
                                <Image src={one} alt="one"></Image>
                            </div>

                        </div>
                        <div className="w-[225px] h-[124px] ">
                            <BsFillTrash3Fill className="fill-[red] absolute left-[675px]"/>
                            <Image className="absolute left-[520px] top-[440px]" src={size} alt="size"></Image>


                        </div>

                    </div>
                </div>
                


            </div>
            <div className="w-[505px] h-[458px] border-[1px] border-[#f0f0f0] rounded-[20px] absolute top-[276px] left-[853px] ">
                <div className="w-[179px] h-[32px] px-[24px] py-[20px] ">
                    <p className="text9 text-nowrap ">Order Summary</p>
                </div>
                <div className="w-[457px] h-[193px] m-6 ">
                    <ul className="m-4 grid gap-[20px] text-[#00000099] text10 ">
                        <li className="flex justify-between  ">Subtotal<Image src={five} alt="five"></Image></li>
                        <li className="flex justify-between">Discount (-20%)<Image src={minus} alt="four"></Image></li>
                        <li className="flex justify-between">Delivery Fee<Image src={fif} alt="fif"></Image></li>
                        <Image src={line1} alt="line1"></Image>
                        <li className="text-black flex justify-between">Total<Image src={four} alt="four"></Image></li>
                    </ul>

                </div>
                <div className="w-[457px] h-[48px]  m-6 my-[30px] flex justify-between">
                    <div className="w-[326px] h-[48px] rounded-[62px] bg-[#F0F0F0] ">
                        <p className="px-[16px] py-[12px] mx-[40px]">Add Promo Code</p>
                        <GoTag className="fill-[#00000066] w-[24px] h-[24px] absolute top-[370px] left-[40px] " />

                    </div>
                    <div className="w-[119px] h-[48px] rounded-[62px] bg-black">
                        <p className="text6 text-white px-[16px] py-[12px]">Apply Now</p>

                    </div>

                </div>
                <div className="w-[457px] h-[60px] rounded-[62px] bg-black m-6">
                <p className="text6 text-white px-[56px] py-[16px] text6 text-center">Go to CheckOut<GoArrowRight className="w-[24px] h-[24px] mx-[250px] my-[-20px]" /></p>
                

                </div>

            </div>


        </main>
    )
}