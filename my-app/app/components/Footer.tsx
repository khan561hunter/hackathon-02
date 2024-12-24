
import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";

export default function Footer() {
    return (
        <main className="w-full mx-auto   md:h-[589px] md:flex md:flex-col xs:justify-end xs:hidden md:block">
            {/* Gray Background Div */}
            
                    
            <div className=" bg-[#F0F0F0] h-[499px] flex flex-col ">
                
                <div className="z-10 transform -translate-y-1/2  ">
                    <div className="bg-black h-[180px] w-full sm:w-full md:max-w-[1240px] mx-auto rounded-[20px] flex items-center  xs:max-w-[358px] xs:m-auto ">
                        <div className="text-white text-4xl  w-[551px] font-bold mx-[64px] my-[36px]">
                            <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                        </div>
                        <div className="w-[349px] h-[108px] flex flex-col justify-between mx-[100px] my-[36px]">
                            <div className="w-[349px] px-[16px] py-[12px] bg-[#FFFFFF]  text-[#00000066] text-base flex items-center gap-3 rounded-[20px] font-normal">
                                <BsEnvelope className="fill-[#00000066]" />
                                <p>Enter your email address</p>

                            </div>
                            <div className="w-[349px] p-2 bg-[#FFFFFF] px-[16px] py-[12px]  rounded-[20px] text-base font-medium text-center" >
                            <p>Subscribe to Newsletter</p>

                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className="mx-auto max-w-[1240px] w-full flex justify-between mx-[160px]  ">
                    <div className="w-[248px] text-sm text-[#00000099] flex flex-col gap-[35px] ">
                        <Image src="/navbar/logo.png" alt="logo" width={167} height={23}></Image>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="flex gap-2">
                            <Image src="/icons/1.png"  alt="twitter" width={28} height={28}></Image>
                            <Image src="/icons/2.png" alt="facebook" width={28} height={28}></Image>
                            <Image src="/icons/3.png" alt="instagram" width={28} height={28}></Image>
                            <Image src="/icons/4.png" alt="github" width={28} height={28}></Image>
                        </div>

                    </div>
                    <div className="w-[104px] ">
                        <ul className="text-base text-[#00000099] font-normal flex flex-col gap-[26px]">
                            <li className="text-base font-medium text-black">COMPANY</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>

                        </ul>

                    </div>
                    <div className="w-[136px]">
                        <ul className="text-base text-[#00000099] font-normal flex flex-col gap-[26px] text-nowrap">
                            <li className="text-base font-medium text-black">HELP</li>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>

                        </ul>
                    </div>
                    <div className="w-[149px]">
                        <ul className="text-base text-[#00000099] font-normal flex flex-col gap-[26px] text-nowrap">
                            <li className="text-base font-medium text-black">F A Q</li>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>

                        </ul>
                    </div>
                    <div className="w-[149px]">
                        <ul className="text-base text-[#00000099] font-normal flex flex-col gap-[26px] text-nowrap">
                            <li className="text-base font-medium text-black">RESOURCES</li>
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to -Blog</li>
                            <li>Youtube Playlist</li>

                        </ul>
                    </div>
                        

                </div>
            
                
        
            
        
            
            </div>
            
            
            
        </main>
    );
  }
  
