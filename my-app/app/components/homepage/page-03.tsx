"use client";
import Image from "next/image";
import { useState } from "react";

export default function Three(){

    const [DropDown , SetDropDown] = useState(false);

    const handletoggle = () => {
        SetDropDown(!DropDown);
    }


    return(
        <main>
            <div className="md:max-w-[1440px] md:m-auto">
                <div className="md:m-auto  xs:text-center xs:text-3xl xs:font-extrabold xs:my-9 md:text-5xl md:font-extrabold md:my-[70px]">
                    <p>NEW ARRIVALS</p>
                </div>
                <div className="md:max-w-[1240px] md:m-auto  md:flex md:justify-between xs:hidden md:block">
                    <div className="md:flex md:flex-col md:gap-2">
                        <Image src={"/Homepage/Three/Frame 32.png"} alt="black t-shirt" width={295} height={298}></Image>
                        <p className="text-xl font-bold ">T-Shirt with Tape Details</p>
                        <Image src={"/Homepage/Three/Frame 35.png"} alt="4.5 stars" width={150} height={19}></Image>
                        <p className="text-2xl font-bold">$120</p>
                    </div>
                    <div className="md:flex md:flex-col md:gap-2">
                        <Image src={"/Homepage/Three/Frame 33.png"} alt="black t-shirt" width={295} height={298}></Image>
                        <p className="text-xl font-bold ">Skinny Fit Jeans</p>
                        <Image src={"/Homepage/Three/Frame 39.png"} alt="3.5 stars" width={150} height={19}></Image>
                        <Image src={"/Homepage/Three/Frame 59.png"} alt="240 price" width={200} height={32}></Image>
                    </div>
                    <div className="md:flex md:flex-col md:gap-2">
                        <Image src={"/Homepage/Three/Frame 34.png"} alt="black t-shirt" width={295} height={298}></Image>
                        <p className="text-xl font-bold ">Checkered Shirt</p>
                        <Image src={"/Homepage/Three/Frame 35.png"} alt="4.5 stars" width={150} height={19}></Image>
                        <p className="text-2xl font-bold">$180</p>
                    </div>
                    <div className="md:flex md:flex-col md:gap-2">
                        <Image src={"/Homepage/Three/Frame 38.png"} alt="black t-shirt" width={295} height={298}></Image>
                        <p className="text-xl font-bold ">Sleeve Stripped T-shirt</p>
                        <Image src={"/Homepage/Three/Frame 35.png"} alt="4.5 stars" width={150} height={19}></Image>
                        <Image src={"/Homepage/Three/Frame 44.png"} alt="130 price" width={200} height={32}></Image>
                    </div>
                </div>
                <div className="xs:block md:hidden xs:flex xs:gap-2  xs:w-[390px]">
                    <div className="xs:flex xs:flex-col xs:gap-2">
                        <Image src={"/Homepage/Three/Frame 32.png"} alt="black t-shirt" width={198} height={200.01}></Image>
                        <p className="text-base font-bold text-nowrap">T-Shirt with Tape Details</p>
                        <Image src={"/Homepage/Three/Frame 35.png"} alt="4.5 stars" width={127} height={16}></Image>
                        <p className="text-xl font-bold">$120</p>
                    </div>
                    <div className="xs:flex xs:flex-col xs:gap-2">
                        <Image src={"/Homepage/Three/Frame 33.png"} alt="black t-shirt" width={198} height={200.01}></Image>
                        <p className="text-base font-bold ">Skinny Fit Jeans</p>
                        <Image src={"/Homepage/Three/Frame 39.png"} alt="3.5 stars" width={127} height={16}></Image>
                        <Image src={"/Homepage/Three/Frame 59.png"} alt="240 price" width={150} height={24}></Image>
                    </div>

                </div>
                <div className="xs:hidden md:block md:w-[218px]  md:m-auto border-[1px] border-[#0000001A] rounded-full text-center md:my-10 ">
                    <p className=" px-[54px] py-[16px] text-base font-bold ">View All</p>

                </div>
                <div className="xs:block md:hidden xs:w-[358px] xs:m-auto border-[1px] border-[#0000001A] rounded-full  xs:my-10 relative">
                    <p
                        className="px-[54px] py-[12px] text-base font-bold cursor-pointer text-center"
                        onClick={handletoggle}
                    >
                        View All
                    </p>

                    {DropDown && (
                        <div className="xs:flex xs:gap-2 xs:w-[390px] bg-white  shadow-lg absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-10">
                            <div className="xs:flex xs:flex-col xs:gap-2 ">
                                <Image
                                src={"/Homepage/Three/Frame 34.png"}
                                alt="black t-shirt"
                                width={198}
                                height={200.01}
                                />
                                <p className="text-base font-bold text-nowrap">
                                Checkered Shirt
                                </p>
                                <Image
                                src={"/Homepage/Three/Frame 35.png"}
                                alt="4.5 stars"
                                width={127}
                                height={16}
                                />
                                <p className="text-xl font-bold">$180</p>
                            </div>
                            <div className="xs:flex xs:flex-col xs:gap-2 ">
                                <Image
                                src={"/Homepage/Three/Frame 38.png"}
                                alt="black t-shirt"
                                width={198}
                                height={200.01}
                                />
                                <p className="text-base font-bold">Sleeve Stripped T-shirt</p>
                                <Image
                                src={"/Homepage/Three/Frame 39.png"}
                                alt="3.5 stars"
                                width={127}
                                height={16}
                                />
                                
                                <Image src={"/Homepage/Three/Frame 44.png"} alt="130 price" width={150} height={24}></Image>
                            </div>
                        </div>
                    )}
                </div>
                <div className="md:max-w-[1240px] md:m-auto border-[1px] bg-[#0000001A] hidden md:block"></div>
                <div className="xs:max-w-[390px] xs:h-[2px] md:m-auto border-[1px] bg-[yellow] xs:block md:hidden"></div>
                <div>hello</div>


            </div>
        </main>
    )
}



