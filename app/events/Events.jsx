'use client'
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import eventSlideShowImage1 from '@/public/events/EventSlideShow-1.jpg'
import eventSlideShowImage2 from '@/public/events/EventSlideShow-2.jpg'
import eventSlideShowImage3 from '@/public/events/EventSlideShow-3.jpg'
import eventSlideShowImage4 from '@/public/events/EventSlideShow-4.jpg'
import eventSlideShowImage5 from '@/public/events/EventSlideShow-5.jpg'
import eventSlideShowImage6 from '@/public/events/EventSlideShow-6.jpg'
import eventSlideShowImage7 from '@/public/events/EventSlideShow-7.jpg'
import eventSlideShowImage8 from '@/public/events/EventSlideShow-8.jpg'
import eventSlideShowImage9 from '@/public/events/EventSlideShow-9.jpg'
import eventSlideShowImage10 from '@/public/events/EventSlideShow-10.jpg'
import eventSlideShowImage11 from '@/public/events/EventSlideShow-11.jpg'
import eventSlideShowImage12 from '@/public/events/EventSlideShow-12.jpg'
import eventSlideShowImage13 from '@/public/events/EventSlideShow-13.jpg'
import eventSlideShowImage14 from '@/public/events/EventSlideShow-14.jpg'
import eventSlideShowImage15 from '@/public/events/EventSlideShow-15.jpg'
import Script from "next/script";
import Calender from "@/Components/Calender/page";
import EsevaHandle from "@/Components/EsevaHandle/page";
import Wallpapers from "@/Components/Wallpapers/page";
import Footer from "@/Components/Footer/Footer";
import { PulseLoader } from "react-spinners";

export default function Events() {

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
                            <div className="parallax-container img-loaded parallax-container-top" style={{ background: 'url(/ganpati-images/ganpati-image10.jpg)', filter: 'brightness(0.80)' }} ></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <div className='my-5'>
                            <h1 className='text-center tracking-wider font-bold'>EVENTS</h1>
                            <div className="md:flex justify-center">
                                <div className='md:px-14 mt-4 md:w-8/12 '>
                                    <swiper-container className="md:w-8/12 h-100" slides-per-view="1" mousewheel-force-to-axis="true" navigation="true" space-between="30"
                                        centered-slides="true" autoplay-delay="2500" speed="1500" autoplay-disable-on-interaction="false" loop="true">
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage1} alt="SlideShow1" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage2} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage3} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage4} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage5} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage6} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage7} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage8} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage9} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage10} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage11} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage12} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage13} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage14} alt="SlideShow2" /></swiper-slide>
                                        <swiper-slide><Image className="w-100" src={eventSlideShowImage15} alt="SlideShow2" /></swiper-slide>
                                    </swiper-container>

                                    <Script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js'></Script>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 container mx-auto mt-5">
                            <div className="row">
                                <div className="col-lg-8 col-sm-6">
                                    <h5 className="fw-bold">GANESH UTSAV 2024: DHARMIK PROGRAM SCHEDULE </h5>
                                    <h6 className="fw-semibold text-secondary mt-4">Ganesh Yag :- 3rd to 5th January 2024</h6>
                                    <p>Morning Time :- 09:00 AM to 01:00 PM</p>
                                    <p>Afternoon Time :- 02:00 PM to 07:00 PM</p>
                                    <div className="text-success">
                                        <hr />
                                    </div>
                                    <h6 className="fw-semibold text-secondary mt-4">Sankashti Chaturthi :- Every Month</h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Lambodara Sankashti Chaturthi,
                                            January 29, 2024, Monday, Moonrise:-
                                            08:39 PM</li>
                                        <li className="list-group-item">Dwijapriya Sankashti Chaturthi,
                                            February 28, 2024, Wednesday, Moonrise:-
                                            08:58 PM</li>
                                        <li className="list-group-item">Bhalachandra Sankashti Chaturthi
                                            March 28, 2024, Thursday, Moonrise:-
                                            08:37 PM</li>
                                        <li className="list-group-item">Vikata Sankashti Chaturthi
                                            April 27, 2024, Saturday, Moonrise:-
                                            09:23 PM</li>
                                        <li className="list-group-item">Ekadanta Sankashti Chaturthi
                                            May 26, 2024, Sunday, Moonrise:-
                                            09:13 PM</li>
                                        <li className="list-group-item">Krishnapingala Sankashti Chaturthi
                                            June 25, 2024, Tuesday, Moonrise:-
                                            09:38 PM</li>
                                        <li className="list-group-item"> Gajanana Sankashti Chaturthi
                                            July 24, 2024, Wednesday, Moonrise:-
                                            08:57 PM</li>
                                        <li className="list-group-item">Heramba Sankashti Chaturthi
                                            August 22, 2024, Thursday, Moonrise:-
                                            08:11 PM</li>
                                        <li className="list-group-item">Vighnaraja Sankashti Chaturthi
                                            September 21, 2024, Saturday, Moonrise:-
                                            08:10 PM</li>
                                        <li className="list-group-item">Vakratunda Sankashti Chaturthi
                                            October 20, 2024, Sunday, Moonrise:-
                                            07:41 PM</li>
                                        <li className="list-group-item">Ganadhipa Sankashti Chaturthi
                                            November 18, 2024, Monday, Moonrise:-
                                            07:23 PM</li>
                                        <li className="list-group-item">Akhuratha Sankashti Chaturthi
                                            December 18, 2024, Wednesday, Moonrise:-
                                            08:10 PM</li>
                                    </ul>

                                    <h5 className="fw-bold mt-5">GANESH UTSAV 2024: PROGRAM SCHEDULE</h5>
                                    <h6 className="fw-semibold text-secondary mt-4">Ganesh Aagman Miravnuk - Saturday, 7th September 2024
                                    </h6>
                                    <p>Time :- 8 AM Onwards</p>
                                    <div className="text-success">
                                        <hr />
                                    </div>
                                    <h6 className="fw-semibold text-secondary mt-4">Cultural Performance By DPES (7th - 14th September
                                        2024)</h6>
                                    <p>Time:- 6 PM Onwards</p>
                                    <div className="text-success">
                                        <hr />
                                    </div>
                                    <h6 className="fw-semibold text-secondary mt-4">'Shivgarjana Dhol Tasha Pathak Pune' Performance -
                                        Wednesday, 11th September 2024</h6>
                                    <p>Time:- 5 PM Onwards</p>
                                    <div className="text-success">
                                        <hr />
                                    </div>
                                    <h6 className="fw-semibold text-secondary mt-4">Ganesh Visarjan Miravnuk Performed by 'Gajnath Vadya
                                        Pathak Pune' - Sunday, 15th September 2024
                                    </h6>
                                    <p>Time :- 10 AM Onwards </p>
                                </div>
                                <div className="col-lg-4 col-sm-6 ">
                                    <Calender />
                                    <EsevaHandle />
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