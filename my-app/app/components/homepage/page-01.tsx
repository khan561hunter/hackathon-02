"use client";
import Image from "next/image";

export default function One(){
    return(
        <main>
            <div className="max-w-[1440px] min-h-[663px] bg-[#F2F0F1] m-auto md:flex md:justify-around md:items-center md:overflow-hidden ">
                <div className="xs:flex xs:flex-col md:gap-[32px] xs:gap-[24px] xs:p-4">
                    <div className="md:w-[577px] md:text-[64px] md:font-extrabold md:leading-[64px] xs:w-[315px] xs:text-4xl xs:font-extrabold">
                        <p>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                    </div>
                    <div className="md:w-[545px] md:text-base xs:font-normal xs:text-[#00000099] xs:text-sm xs: ">
                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    </div>
                    <div className="md:w-[210px] xs:w-[358px] bg-black rounded-[62px] text-white text-base font-medium md:px-[54px] xs:px-[44px] xs:py-[16px] xs:text-center md:py-[16px] ">
                        <p >Shop Now</p>

                    </div>
                </div>
                <div className="xs:block md:hidden w-[278px] bg-[#F0F0F0] xs:flex xs:justify-between xs:m-auto ">
                    <div className="w-[106px] flex flex-col ">
                        <p className="text-2xl font-bold ">200+</p>
                        <p className="text-xs text-[#00000099] text-nowrap">International Brands</p>

                    </div>
                    <div className="w-[117px] flex flex-col ">
                    <p className="text-2xl font-bold ">2000+</p>
                    <p className="text-xs text-[#00000099] text-nowrap">High-Quality Products</p>
                    </div>
                    

                </div>
                <div className="w-[103px] flex flex-col xs:m-auto xs:block md:hidden xs:my-4 ">
                    <p className="text-2xl font-bold ">30,000+</p>
                    <p className="text-xs text-[#00000099] text-nowrap">Happy Customers</p>
                </div>
                
                <div>
                    <Image src="/Homepage/One/image.png" alt="main page " width={663} height={690} className="object-cover">
                    
                    </Image>
                    
                </div>
                


            </div>
        </main>
    )
}

