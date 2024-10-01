'use client'
import Navbar from "@/Components/Navbar/Navbar";
import Album1 from "./Album1/Album1";
import Album2 from "./Album2/Album2";
import Album3 from "./Album3/Album3";
import Album4 from "./Album4/Album4";
import { useEffect, useState } from "react";
import Footer from "@/Components/Footer/Footer";
import { PulseLoader } from "react-spinners";

export default function Photos() {

    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 600)
    }, [])

    return (
        <main>
            {
                loading ?
                    <PulseLoader className="absolute top-1/2 left-[45%] md:left-[48%]" color="#9a9797" />
                    :
                    <div>
                        <section className="fullscreen">
                            <Navbar />
                            <div className="parallax-container img-loaded parallax-container-top" style={{ background: 'url(/ganpati-images/ganpati-image9.png)', filter: 'brightness(0.80)', backgroundPosition: 'center center' }}></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <div className='container mx-auto my-5 text-center tracking-wide font-bold'>
                            <h1>PHOTOS</h1>
                            <div className="my-5">
                                <p className="text-2xl my-4">GANESH YAG 2024</p>
                                <Album1 />
                            </div>
                            <div>
                                <p className="text-2xl my-4">GANESH UTSAV 2023</p>
                                <Album2 />
                            </div>
                            <div>
                                <p className="text-2xl my-4">GANESH CHATHURTI 2023</p>
                                <Album3 />
                            </div>
                            <div>
                                <p className="text-2xl my-4">GANESH YAG 2023</p>
                                <Album4 />
                            </div>
                        </div>
                        <Footer />
                    </div>
            }
        </main>
    )
}