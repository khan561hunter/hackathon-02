import Image from "next/image";

export default function Two (){
    return(
        <main>
            <div className="md:max-w-[1440px] md:min-h-[122px]  md:m-auto bg-black ">
                <div className="md:flex md:justify-around md:p-10 xs:hidden md:block">
                    <Image src={"/Homepage/Two/Group.png"} alt="Versace" width={166.48} height={33.16} className="p-3"></Image>
                    <Image src={"/Homepage/Two/zara-logo-1 1.png"} alt="zara" width={91} height={38} className="p-2"></Image>
                    <Image src={"/Homepage/Two/gucci-logo-1 1.png"} alt="gucci" width={156} height={36} className="p-3"></Image>
                    <Image src={"/Homepage/Two/prada-logo-1 1.png"} alt="prada" width={194} height={34} className="p-3"></Image>
                    <Image src={"/Homepage/Two/Group (1).png"} alt="calvin klein" width={206.75} height={33.35} className="p-3"></Image>
                </div>
                <div className="xs:flex xs:justify-around xs:gap-2 xs:m-auto xs:p-10 xs:grid xs:grid-cols-3 xs:block md:hidden xs:w-[390px]">
                    <Image src={"/Homepage/Two/Group.png"} alt="Versace" width={116.74} height={23.35} className="p-2"></Image>
                    <Image src={"/Homepage/Two/zara-logo-1 1.png"} alt="zara" width={63.81} height={26.65} className="p-2 mx-5"></Image>
                    <Image src={"/Homepage/Two/gucci-logo-1 1.png"} alt="gucci" width={109.35} height={25.24} className="p-2"></Image>
                    <Image src={"/Homepage/Two/prada-logo-1 1.png"} alt="prada" width={127} height={21} className="p-2 mx-10"></Image>
                    <Image src={"/Homepage/Two/Group (1).png"} alt="calvin klein" width={134.85} height={21.75} className="p-2 mx-12"></Image>

                    
                    
                </div>

            </div>
        </main>
    )
}



