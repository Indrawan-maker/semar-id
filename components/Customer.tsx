import Image from "next/image"
import  fanle  from "@/public/images/customer/fanle.png"
import  gifradja  from "@/public/images/customer/gifradja.gif"

export const Customer = () => {
    return (
        <>
        <h4>Customer Kami</h4>
        <p>Setiap Layanan yang kami kembangkan menghasilkan value bisnis yang membuat mereka mempercayakan jasa pembuatan websitenya kepada kami</p>
        <div className="flex flex-wrap">
        <Image src={gifradja} alt="logo" height={42} width={42}/>
        <Image src={fanle} alt="logo" height={42} width={42}/>
        </div>
        </>
    )
}