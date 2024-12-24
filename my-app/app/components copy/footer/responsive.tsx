import Image from "next/image";
import frame from "@/app/assets/Frame (2).png"
import logo from "@/app/assets/logo.png"
import socials from "@/app/assets/Social.png"
import line from "@/app/assets/Line 4 (1).png"
import cards from "@/app/assets/Frame 53.png"




export default function Responsive2 (){
    return(
        <main className="w-screen relative ">
            <div className="w-[390px] h-[846px] bg-[#F0F0F0] absolute top-[3615px] lg:hidden ">
                <div className="w-[358px] h-[293px] bg-black  rounded-[20px] m-4 my-[-50%]  ">
                    <div className="w-[297px] h-[109px] m-12 ">
                        <p className="font-extrabold text-[32px] leading-[35px]  text-wrap text-white py-[20px] ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                    </div>
                    <div className="w-[311px] h-[42px]  bg-[#FFFFFF] rounded-full flex items-center p-4 gap-4 m-6">
                        <div className="w-[24px] h-[24px] "><Image src={frame} alt="envelope"></Image></div>
                        <p className="font-normal text-nowrap  text-[16px] leading-[21.6px] text-[#00000066] ">Enter your email address</p>
                    </div>
                    <div className="w-[311px] h-[42px]  bg-[#FFFFFF] rounded-full flex items-center p-6 m-6">
                        
                        <p className="font-normal text-nowrap  text-[16px] leading-[21.6px] text-center m-9 ">Subscribe to Newsletter</p>
                    </div>


                </div>
                <div className="my-[60%] m-4">
                    <div className="w-[144px] h-[20px] ">
                        <Image className="w-[167px] h-[23px]" src={logo} alt="logo"></Image>
                        
                    </div>
                    <div className="w-[357px] h-[40px] my-[25px] "><p className="font-normal text-[#00000099] text-[14px] leading-[22px] ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p></div>
                    <div className="w-[148px] h-[28px] my-[35px]">
                            <Image src={socials} alt="socials"></Image>

                    </div>

                </div>
                <div className="my-[-55%]">
                    <div className="flex justify-between">
                        <div className="w-[91px] h-[146px] m-4 ">
                            <p className="text-[14px] font-medium leading-[18px] ">COMPANY</p>
                            <ul className="text-[14px] leading-[16px] text-[#00000099] grid gap-4 my-3 ">
                                
                                <li>About</li>
                                <li>Works</li>
                                <li>Features</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="w-[121px] h-[146px] m-4 ">
                            <p className="text-[14px] font-medium leading-[18px] ">HELP</p>
                                <ul className="text-[14px] leading-[16px] text-[#00000099] grid gap-4 my-3 text-nowrap ">
                                    
                                    <li>Customer Support</li>
                                    <li>Delivery Details</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                        </div>
                        
                    </div>
                    <div className="flex justify-between ">
                        <div className="w-[121px] h-[146px] m-4 ">
                            <p className="text-[14px] font-medium leading-[18px] ">F A Q</p>
                            <ul className="text-[14px] leading-[16px] text-[#00000099] grid gap-4 my-3 ">
                                
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payment</li>
                            </ul>
                        </div>
                        <div className="w-[121px] h-[146px] m-4 ">
                            <p className="text-[14px] font-medium leading-[18px] ">RESOURCES</p>
                                <ul className="text-[14px] leading-[16px] text-[#00000099] grid gap-4 my-3 text-nowrap ">
                                    
                                    <li>Free eBook</li>
                                    <li>Development Tutorial</li>
                                    <li>How to -Blog</li>
                                    <li>Youtube Playlist</li>
                                </ul>
                        </div>
                        
                    </div>
                    
                </div>
                <Image className="m-4 my-[60%]" src={line} alt="line"></Image>
                <div className="w-[269px] h-[19px] my-[-55%] mx-[15%] text-center">
                    <p className="text-nowrap font-normal text-[#00000099] text-[14px] ">Shop.co © 2000-2023, All Rights Reserved</p>
                </div>
                <Image className="w-[240.93px] h-[25.74px] mx-[18%] my-[60%]" src={cards} alt="cards"></Image>
                
                
                

            </div>
            
            

        </main>
    )
}