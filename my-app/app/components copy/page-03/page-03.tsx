"use client";
import Image from "next/image";
import pic1 from "@/app/assets/Frame 32.png"
import star1 from "@/app/assets/Frame 35.png"
import pic2 from "@/app/assets/Frame 33.png"
import star2 from "@/app/assets/Frame 39.png"
import pic3 from "@/app/assets/Frame 34.png"
import pic4 from "@/app/assets/Frame 38.png"
import star3 from "@/app/assets/Frame 40.png"
import star4 from "@/app/assets/Frame 41.png"
import price1 from "@/app/assets/Frame 59.png"
import price2 from "@/app/assets/Frame 44.png"
import s_pic3 from "@/app/assets/Frame 34 (1).png"
import s_pic4 from "@/app/assets/Frame 38 (1).png"
import s_star3 from "@/app/assets/Frame 40 (1).png"
import s_star4 from "@/app/assets/Frame 41 (1).png"
import s_pic1 from "@/app/assets/Frame 32 (1).png"
import s_pic2 from "@/app/assets/Frame 33 (1).png"
import s_star1 from "@/app/assets/Frame 35 (1).png"
import s_star2 from "@/app/assets/Frame 39 (1).png"
import price from "@/app/assets/$212.png"
import price_2 from "@/app/assets/$232.png"
import price3 from "@/app/assets/Frame 42.png" 
import dress from "@/app/assets/BROWSE BY dress STYLE.png"
import dress1 from "@/app/assets/Frame 61.png"
import dress2 from "@/app/assets/Frame 62.png"
import dress3 from "@/app/assets/Frame 64.png"
import dress4 from "@/app/assets/Frame 63.png"
import star from "@/app/assets/Frame 10.png"
import name1 from "@/app/assets/Frame 31.png"
import name2 from "@/app/assets/Frame 31 (1).png"
import name3 from "@/app/assets/Frame 31 (2).png"
import Responsive from "./responsive";


export default function Three(){
    return(
          <div className="w-[1440px] h-[2900px]  absolute top-[910px] " >
           <div className="hidden md:block">
              <div className="w-[403px] h-[58px] absolute top-[81px] left-[518px]">
                <p className="text-black font-extrabold text-[48px] leading-[57.6px] text-center">
                  NEW ARRIVALS
                </p>
              </div>

  
              <div className="hidden lg:block">
    
                <div>
                  <Image
                    className="w-[295px] h-[298px] absolute top-[194px] left-[100px]"
                    src={pic1}
                    alt="pic1"
                  />
                  <div className="w-[225px] h-[27px] absolute top-[508px] left-[100px]">
                    <p className="font-bold text-[20px] leading-[27px] text-nowrap">
                      T-shirt with Tape Details
                    </p>
                  </div>
                  <Image
                    className="w-[150px] h-[19px] absolute top-[543px] left-[100px]"
                    src={star1}
                    alt="star"
                  />
                  <div className="w-[55px] h-[32px] absolute top-[570px] left-[100px]">
                    <p className="font-bold text-[24px] leading-[32.4px]">$120</p>
                  </div>
                </div>
      
                <div>
                  <Image
                    className="w-[295px] h-[298px] absolute top-[194px] left-[415px]"
                    src={pic2}
                    alt="pic2"
                  />
                  <div className="w-[150px] h-[27px] absolute top-[508px] left-[415px]">
                    <p className="font-bold text-[20px] leading-[27px]">Skinny Fit Jeans</p>
                  </div>
                  <Image
                    className="w-[126.2px] h-[19px] absolute top-[543px] left-[415px]"
                    src={star2}
                    alt="star2"
                  
                  />
                  <div className="w-[200px] h-[32px] absolute top-[570px] left-[415px]">
                    <Image src={price1} alt="price" />
                 </div>
                </div>
      
                <div>
                  <Image
                    className="w-[295px] h-[298px] absolute top-[194px] left-[730px]"
                    src={pic3}
                    alt="pic3"
                  />
                  <div className="w-[151px] h-[27px] absolute top-[508px] left-[730px]">
                    <p className="font-bold text-[20px] leading-[27px]">Checkered Shirt</p>
                  </div>
                  <Image
                    className="w-[126.2px] h-[19px] absolute top-[543px] left-[730px]"
                    src={star3}
                    alt="star"
                  />
                  <div className="w-[55px] h-[32px] absolute top-[570px] left-[730px]">
                    <p className="font-bold text-[24px] leading-[32.4px]">$180</p>
                  </div>
                </div>
      
                <div>
                  <Image
                    className="w-[295px] h-[298px] absolute top-[194px] left-[1045px]"
                    src={pic4}
                    alt="pic4"
                  />
                  <div className="w-[199px] h-[27px] absolute top-[508px] left-[1045px]">
                    <p className="font-bold text-[20px] leading-[27px] text-nowrap">
                      Sleeve Stripped T-shirt
                    </p>
                  </div>
                  <Image
                    className="w-[126.2px] h-[19px] absolute top-[543px] left-[1045px]"
                    src={star4}
                    alt="star"
                  />
                  <div className="w-[200px] h-[32px] absolute top-[570px] left-[1045px]">
                    <Image src={price2} alt="price" />
                  </div>
                </div>
              </div>

  
            </div>

              

            


            <div className="w-[218px] h-[52px] absolute top-[638px] left-[611px] hidden md:block  rounded-[62px] border-[1px] border-[#0000001A]">
                <p className=" w-[58px] h-[22px] font-medium text-[16px]  px-[77px] py-[16px] leading-[21.6px] text-nowrap">View All</p>
            </div>
            <div className="w-[1240px] absolute top-[754px] left-[100px] border-[1px] bg-[#0000001A] hidden md:block"></div>

            {/* second part of page 3  */}
            <div className="hidden md:block">
              <div className="w-[346px] h-[58px] absolute top-[818px] left-[546px] ">
                  <p className="font-extrabold text-nowrap text-[48px]">TOP SELLING</p>
              </div>

              <div>
                  <Image className="w-[295px] h-[298px] absolute top-[931px] left-[100px]" src={s_pic1} alt="pic"></Image>
                  <div className="w-[194px] h-[27px] absolute top-[1245px] left-[100px] "><p className="text-nowrap font-bold text-[20px] leading-[27px] text-black">Vertical Stripped Shirt</p></div>
                  <div className="w-[160.7px] h-[19px] absolute top-[1280px] left-[100px]"><Image src={s_star1} alt="star"></Image></div>
                  <Image className="w-[53px] h-[25px] absolute top-[1307px] left-[100px]" src={price} alt="price"></Image>
                  <Image className="w-[56px] h-[25px] absolute top-[1307px] left-[163px]" src={price_2} alt="price"></Image>
                  <Image className="w-[58px] h-[28px] absolute top-[1309px] left-[231px]" src={price3} alt="price"></Image>
              </div>
              <div>
                  <Image className="w-[295px] h-[298px] absolute top-[931px] left-[415px]" src={s_pic2} alt="pic"></Image>
                  <div className="w-[226px] h-[27px] absolute top-[1245px] left-[415px] "><p className="text-nowrap font-bold text-[20px] leading-[27px] text-black">Courage Graphic T-shirt</p></div>
                  <div className="w-[137.7px] h-[19px] absolute top-[1280px] left-[415px]"><Image src={s_star2} alt="star"></Image></div>
                  <div className="w-[54px] h-[32px] absolute top-[1307px] left-[415px]"><p className="font-bold text-[24px] leading-[32.4px] text-black">$145</p></div>
              </div>
              <div>
              <Image className="w-[295px] h-[298px] absolute top-[931px] left-[730px]" src={s_pic3} alt="pic"></Image>
                  <div className="w-[239px] h-[27px] absolute top-[1245px] left-[730px] "><p className="text-nowrap font-bold text-[20px] leading-[27px] text-black">Loose Fit Bermuda Shorts</p></div>
                  <div className="w-[113.09px] h-[19px] absolute top-[1280px] left-[730px]"><Image src={s_star3} alt="star" width={137.9} height={96}></Image></div>
                  <div className="w-[47px] h-[32px] absolute top-[1307px] left-[730px]"><p className="font-bold text-[24px] leading-[32.4px] text-black">$80</p></div>
              </div>
              <div>
              <Image className="w-[295px] h-[298px] absolute top-[931px] left-[1045px]" src={s_pic4} alt="pic"></Image>
                  <div className="w-[185px] h-[27px] absolute top-[1245px] left-[1045px] "><p className="text-nowrap font-bold text-[20px] leading-[27px] text-black">Faded Skinny Jeans</p></div>
                  <div className="w-[150px] h-[19px] absolute top-[1280px] left-[1045px]"><Image src={s_star4} alt="star"></Image></div>
                  <div className="w-[55px] h-[32px] absolute top-[1307px] left-[1045px]"><p className="font-bold text-[24px] leading-[32.4px] text-black">$210</p></div>
              </div>
              <div className="w-[218px] h-[52px] absolute top-[1375px] left-[611px]   rounded-[62px] border-[1px] border-[#0000001A]">
                  <p className=" w-[58px] h-[22px] font-medium text-[16px]  px-[77px] py-[16px] leading-[21.6px] text-nowrap">View All</p>
              </div>
              <div className="w-[1239px] h-[866px] absolute top-[1507px] left-[100px] rounded-[40px] bg-[#F0F0F0]">
                  <div className="w-[687px] h-[58px] absolute top-[70px] left-[276px]"><Image src={dress} alt="dress"></Image></div>
                  <div className="w-[407px] h-[289px] absolute top-[192px] left-[64px]"><Image src={dress1} alt="dress"></Image></div>
                  <div className="w-[684px] h-[289px] absolute top-[192px] left-[491px]"><Image src={dress2} alt="dress"></Image></div>
                  <div className="w-[684px] h-[289px] absolute top-[501px] left-[64px]"><Image src={dress3} alt="dress"></Image></div>
                  <div className="w-[407px] h-[289px] absolute top-[501px] left-[768px]"><Image src={dress4} alt="dress"></Image></div>
              </div>
              <div className="w-[654px] h-[58px] absolute top-[2453px] left-[100px] ">
                  <p className="font-extrabold text-[48px] leading-[57.6px] text-black">OUR HAPPY CUSTOMERS</p>
              </div>
              <div className="w-[400px] h-[240px] absolute top-[2551px] left-[100px] rounded-[20px] border-[1px] border-[#0000001A]">
                  <div className="absolute left-[32px] top-[28px] w-[336px] h-[161.58px] ">
                      <Image className="w-[138.4px] h-[22.58px] my-[6.49px]" src={star} alt="star"></Image>
                      <div className="w-[336px] h-[124px]">
                          <Image className="w-[110px] h-[24px] my-[15px]" src={name1} alt="name"></Image>
                          <div className="my-[15px] font-normal text-[#00000099] text-[16px] text-wrap leading-[22px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</div>

                      </div>


                  </div>

              </div>
              <div className="w-[400px] h-[240px] absolute top-[2551px] left-[520px] rounded-[20px] border-[1px] border-[#0000001A]">
                  <div className="absolute left-[32px] top-[28px] w-[336px] h-[186.58px] ">
                      <Image className="w-[138.4px] h-[22.58px] my-[6.49px]" src={star} alt="star"></Image>
                      <div className="w-[336px] h-[146px]">
                          <Image className="w-[110px] h-[24px] my-[15px]" src={name2} alt="name"></Image>
                          <div className="my-[15px] font-normal text-[#00000099] text-[16px] text-wrap leading-[21px]">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</div>

                      </div>


                  </div>

              </div>
              <div className="w-[400px] h-[240px] absolute top-[2551px] left-[940px] rounded-[20px] border-[1px] border-[#0000001A]">
                  <div className="absolute left-[32px] top-[28px] w-[336px] h-[183.58px] ">
                      <Image className="w-[138.4px] h-[22.58px] my-[6.49px]" src={star} alt="star"></Image>
                      <div className="w-[336px] h-[146px]">
                          <Image className="w-[110px] h-[24px] my-[15px]" src={name3} alt="name"></Image>
                          <div className="my-[15px] font-normal text-[#00000099] text-[16px] text-wrap leading-[21px]">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</div>

                      </div>


                  </div>

              </div>

            </div>
            
            <Responsive />
            

            
            

          </div>

    )
}



