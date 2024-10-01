'use client'
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import AboutImage from '@/public/home-page/gallery/GalleryImage4.jpg'
import DailyAbhishek from '@/public/home-page/daily-abhishek.jpg'
import Link from "next/link";
import slideShowImage1 from '@/public/home-page/slideshow/slideshow1.jpg'
import slideShowImage2 from '@/public/home-page/slideshow/slideshow2.jpg'
import slideShowImage3 from '@/public/home-page/slideshow/slideshow3.jpg'
import slideShowImage4 from '@/public/home-page/slideshow/slideshow4.jpg'
import slideShowImage5 from '@/public/home-page/slideshow/slideshow5.jpg'
import slideShowImage6 from '@/public/home-page/slideshow/slideshow6.jpg'
import Script from "next/script";
import SocialMedia from "@/Components/SocialMedia/page";
import EsevaHandle from "@/Components/EsevaHandle/page";
import Wallpapers from "@/Components/Wallpapers/page";
import MiniGallery from "@/Components/MiniGallery/page";
import Footer from "@/Components/Footer/Footer";
import { PulseLoader } from "react-spinners";

export default function About() {

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
                        <section className="fullscreen" data-bg-parallax="/home-page/ganpati-banner.png">
                            <Navbar />
                            <div className="parallax-container img-loaded parallax-container-center " style={{ background: 'url(/ganpati-images/ganpati-image3.png)', filter: 'brightness(0.75)' }}></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <div className="px-6 container mx-auto  my-5">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1 className="font-bold text-center mb-4">HISTORY</h1>
                                    <Image className=" rounded-3" src={AboutImage} />
                                    <div>
                                        <p className='mt-3 font-medium tracking-wide'>Dhole Patil Ganpati Mandir is a famous temple located in Pune, Maharashtra, India. It is dedicated to Lord Ganesha, who is worshipped as the primary deity in the temple. The temple is located in the eastern part of Pune city and is a popular destination for locals and tourists alike. Green landscapes and calm surroundings add to the divine ambience of this spiritual place.</p>
                                        <p className='mt-3 font-medium tracking-wide'>The history of the temple dates back to the 21st century when it was built by the Dhole Patil family, who were prominent citizens of Pune. The temple is known for its beautiful architecture and intricate carvings, which attract visitors from all over the world. Founder Chairman of DPES Shri. Sagar Dhole Patil believes in a spiritual connect with everything we do in our lives. This divine temple was born out of this positive thought.</p>
                                        <p className='mt-3 font-medium tracking-wide'>Indianness is rooted in the traditions and culture of India. To keep the legacy of Indian culture alive the temple hosts several festivals throughout the year, with the most important one being Ganesh Chaturthi. During this festival, the temple is decorated with lights and flowers, and thousands of devotees visit the temple to offer their prayers to Lord Ganesha.</p>
                                        <p className='mt-3 font-medium tracking-wide'>Other festivals such as Diwali, Navratri, and Holi are also celebrated to bring people together for traditional celebrations. It is a must-visit destination for anyone visiting Pune, especially for those interested in exploring the city's rich cultural heritage.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-16">
                                    <SocialMedia />
                                    <EsevaHandle />
                                    <MiniGallery />
                                </div>
                            </div>
                        </div>
                        <Wallpapers />
                        <Footer />
                    </div>
            }
        </main>
    )
}