import Image from "next/image"
import find from "@/app/assets/FIND CLOTHES THAT MATCHES YOUR STYLE.png"
import vector from "@/app/assets/Vector.png"
import boygirl from "@/app/assets/Rectangle 2.png"
import vector2 from "@/app/assets/Vector (1).png"


export default function Responsive1 (){
    return(
        <main className="w-screen">
                <div className="lg:hidden ">
                
                <div className=" h-[853px] bg-[#F2F0F1] w-screen flex flex-col  py-8">
                    <Image className="w-[319px] h-[93px]  h-auto px-4  ml-1 relative" src={find} alt="find"></Image>
                    <div className=" w-[358px]   h-[50px] mx-4 p-4 text-left  ">
                        <p className="font-normal  text-[14px]  leading-[20px] text-[#00000099]  ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    </div>
                    <div className="w-[358px] h-[52px]  bg-[black] rounded-[62px] m-4 my-[45px]  ">
                        <p className="text-center  text-white font-medium text-[16px] leading-[21.6px] text-nowrap px-[65px] py-[16px] ">Shop Now</p>
                    </div>
                    <div className=" w-[278px] h-[52px]  flex items-center justify-between m-[75px] mt-[-35px] grid grid-cols-2 ">
                        <div className="w-[106px] h-[48px]  ">
                            <p className="w-[64px] h-[32px] text-[24px] leading-[54px] text-black font-bold  ">200+</p>
                            <p className="w-[106px] h-[22px] py-2 font-normal text-[12px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">International Brands</p>
                        </div>
                    
                        <div className="w-[106px] h-[48px] ">
                            <p className="ww-[64px] h-[32px] text-[24px] font-bold leading-[54px] text-black text-[24px] ">2,000+</p>
                            <p className="w-[106px] h-[22px] py-2 font-normal text-[12px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">Happy Customers</p>
                        </div>
                        <div className="w-[106px] h-[48px] mx-[55px] p-2 ">
                            <p className="w-[64px] h-[32px] text-[24px] font-bold leading-[54px] text-black text-[24px] ">30,000+</p>
                            <p className="w-[106px] py-2  h-[22px] font-normal text-[12px] leading-[22px] text-[#00000099] text-nowrap font-satoshi">High-Quality Products</p>
                        </div>
                        
                        

                    </div>
                    
                    
                    <div>
                        
                    <Image src={boygirl} alt="background"></Image>
                    <div className="z-20 relative my-[-70%] mx-[10%]">

                    <Image className="w-[44px] h-[44px]" src={vector} alt="vector"></Image>
                    <Image className=" w-[76px] h-[76px] mx-[80%] my-[-60%]" src={vector2} alt="vector"></Image>

                    </div>


                    
                    </div>

                    
                    
                </div>
                
                

            </div>
        </main>
    )
}


