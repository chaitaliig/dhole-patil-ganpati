import Image from "next/image";
import DailyAbhishek from '@/public/eseva/daily-abhishek.jpg'
import sankashtiChaturthiAbhishekImage from '@/public/eseva/sankasthi-chaturthi.jpg'
import PoshakhImage from '@/public/eseva/poshakh.jpg'
import Link from "next/link";


export default function EsevaHandle(){
    return(
        <div className="border mt-5">
                            <h5 className="font-bold tracking-wide my-2 text-center">E-SEVA</h5>
                            <div className="flex align-items-center border mt-3">
                                <Image src={DailyAbhishek} width={80} />
                                <p className="font-bold tracking-wide ps-3">DAILY ABHISEKH
                                    <br />₹ 251/-
                                    <br />
                                    <Link href='/eseva/#daily-abhishek'><button className='rounded-3 bg-[#42032c] text-white text-xs px-3 py-1 mt-2'>BOOK NOW</button></Link>
                                </p>
                            </div>
                            <div className="flex align-items-center border">
                                <Image src={sankashtiChaturthiAbhishekImage} width={80} />
                                <p className="font-bold tracking-wide ps-3">SANKASHTI CHATURTHI ABHISHEKH
                                    <br />₹ 1100/-
                                    <br />
                                    <Link href='/eseva/#sankashti-chaturth-abhishekh'><button className='rounded-3 bg-[#42032c] text-white text-xs px-3 py-1 mt-2'>BOOK NOW</button></Link>
                                </p>
                            </div>
                            <div className="flex align-items-center border">
                                <Image src={PoshakhImage} width={80}/>
                                <p className="font-bold tracking-wide ps-3">POSHAKH: SANKASHTI AND VINAYAKI CHATURTHI
                                    <br />₹ 2000/-
                                    <br />
                                    <Link href='/eseva/#poshakh'><button className='rounded-3 bg-[#42032c] text-white text-xs px-3 py-1 my-2'>BOOK NOW</button></Link>
                                </p>
                            </div>
                        </div>
    )
}