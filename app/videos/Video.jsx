'use client'
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { PulseLoader } from "react-spinners";


export default function Video() {

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
                            <div className="parallax-container img-loaded parallax-container-top" style={{ background: 'url(/ganpati-images/ganpati-image5.png)', filter: 'brightness(0.80)' }} ></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <div className='container mx-auto my-5'>
                            <h1 className='text-center tracking-wide font-bold'>VIDEOS</h1>
                            <div className="row mt-3">
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/YnJ38VjHy8M?si=9UYXQOv9EOsr65qE" title="YouTube video player"

                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/Tzf5-96imCQ?si=MyPskE1fmMDr6yO3" title="YouTube video player"

                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/c9UsDKaQcZo?si=IRio0shCCgTHuTDI" title="YouTube video player"

                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>

                                </div>

                            </div>
                            <div className="row">
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/GZkUjhovDHc?si=RqUgeSFt-QllX6b9"
                                        title="Dhole Ganpati Mandir Drone View 3"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>

                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/rBPKB1w1zf0?si=dHqYfyYTa6wQ1LbQ"
                                        title="Dhole Ganpati Mandir Drone View 2"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/zARS_HyppIU?si=mV5oNWgtCBLdICFo"
                                        title="Ganesh Yag 2023 Part 2 | Dhole Patil Ganpati"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>

                            </div>
                            <div className="row">
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/BJhiqeXpQBA?si=fcQ7a1pt7p3LgDCx"
                                        title="Ganesh Yag 2023 Part 4 | Dhole Patil Ganpati"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/4CEyWQ2BIFE?si=P2kK9-lWu6let-fz"
                                        title="Ganesh Yag 2023 Part 5 | Dhole Patil Ganpati"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/jtb1lqn8PRg?si=vEqYBwWqtNy01SN8"
                                        title="Ganesh Yag 2023 Part 1 | Dhole Patil Ganpati"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center'>
                                    <iframe className='rounded-4' width="400" height="300"
                                        src="https://www.youtube.com/embed/X2YBru0Na2o?si=OA20Lh1wBvfB2vqp"
                                        title="Ganesh Yag 2023 Part 3 | Dhole Patil Ganpati"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                                <div className='col-lg-4 col-md-4 col-sm-6 p-2 flex justify-center '>
                                    <iframe className='rounded-4' width="400" height="300" src="https://www.youtube.com/embed/KF19cS-UVkQ?si=OgKm1YRI8baQlDy6"
                                        title="Dhole Ganpati Mandir Drone View"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
            }
        </main>
    )
}