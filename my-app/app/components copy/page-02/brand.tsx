"use client";
import Image from "next/image";
import grp1 from "@/app/assets/Group.png"
import grp2 from "@/app/assets/zara-logo-1 1.png"
import grp3 from "@/app/assets/gucci-logo-1 1.png"
import grp4 from "@/app/assets/prada-logo-1 1.png"
import grp5 from "@/app/assets/Group (1).png"


export default function Two() {
    return (
      <main>
        {/* Desktop View */}
        <div className="hidden lg:flex lg:w-[1440px] lg:h-[122px] absolute top-[797px] bg-black items-center">
          <div>
            <Image
              className="w-[166.48px] h-[33.16px] absolute top-[44px] left-[100px]"
              src={grp1}
              alt="brand1"
            />
            <Image
              className="w-[91px] h-[38px] absolute top-[42px] left-[372.48px]"
              src={grp2}
              alt="brand2"
            />
            <Image
              className="w-[156px] h-[36px] absolute top-[43px] left-[569.48px]"
              src={grp3}
              alt="brand3"
            />
            <Image
              className="w-[194px] h-[32px] absolute top-[45px] left-[831.48px] "
              src={grp4}
              alt="brand4"
            />
            <Image
              className="w-[206.79px] h-[33.35px] absolute top-[44px] left-[1131.48px]"
              src={grp5}
              alt="brand5"
            />
          </div>
        </div>
  
        {/* Mobile View */}
        <div className=" lg:hidden w-[390px] h-[146px] bg-black  " >
          <div className=" flex flex-col grid grid-cols-3 h-full px-[4px] p-8 mx-3 center w-screen gap-[20px]">
          <Image
            className="w-auto h-auto "
            src={grp1}
            alt="brand1"
          />
          <Image
            className="w-auto h-auto"
            src={grp2}
            alt="brand2"
          />
          <Image
            className="w-auto h-auto"
            src={grp3}
            alt="brand3"
          />
          <Image
            className="w-auto h-auto mx-[45px] "
            src={grp4}
            alt="brand4"
          />
          <Image
            className="w-auto h-auto mx-[45px]  "
            src={grp5}
            alt="brand5"
          />

          </div>
          
        </div>
      </main>
    );
  }



