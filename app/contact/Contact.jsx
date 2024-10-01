'use client'
import { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { PulseLoader} from "react-spinners";
import Footer from "@/Components/Footer/Footer";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [message, setMessage] = useState('')

    const sendMail = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phonenumber,
                message
            })
        })
        setName('')
        setEmail('')
        setPhonenumber('')
        setMessage('')
        console.log(await response.json())
    }


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
                            <div className="parallax-container img-loaded parallax-container-top" style={{ background: 'url(/ganpati-images/ganpati-image6.png)', filter: 'brightness(0.85)' }}></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <div className="px-6 md:px-32 my-5">
                            <h1 className="text-center tracking-wider font-bold">CONTACT US</h1>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <h5 className="d-flex mt-4 tracking-wider font-bold"><FontAwesomeIcon className='me-2' icon={faLocationDot} width={20} />  ADDRESS</h5>
                                    <Link className='' href="https://goo.gl/maps/RKDdDzNDqDtY8drp8" target="_blank">
                                        <p className="font-medium tracking-wide">Dhole Patil College Road, near Panchshil Towers Road, Vitthal Nagar, Kharadi, Pune,
                                            Maharashtra 412207</p>
                                    </Link>
                                    <h5 className="d-flex mt-4 tracking-wider font-bold"><FontAwesomeIcon className='me-2' icon={faPhone} width={20} />  PHONE NUMBER</h5>
                                    <Link className='' href="tel:9096879687">
                                        <p className="font-medium tracking-wide">+91 9096879687</p>
                                    </Link>
                                    <h5 className="d-flex mt-4 tracking-wider font-bold"> <FontAwesomeIcon className='me-2' icon={faEnvelope} width={20} />  EMAIL</h5>
                                    <Link className="" href="mailto:dholepatilganpati@gmail.com">
                                        <p className="font-medium tracking-wide">dholepatilganpati@gmail.com</p>
                                    </Link>
                                    <div className="text-center my-5">
                                        <h3 className="tracking-wider font-bold">Social Contact</h3>
                                        <div className="d-flex justify-content-evenly mt-4">
                                            <Link target="_blank" href='https://www.facebook.com/profile.php?id=61550938731488&mibextid=ZbWKwL'><FontAwesomeIcon className="h-8" icon={faFacebook} color="blue" /></Link>
                                            <Link target="_blank" href='https://www.instagram.com/dholepatilganpati/'><FontAwesomeIcon className="h-8" icon={faInstagram} width={30} color="red" /></Link>
                                            <Link target="_blank" href='https://youtube.com/@DholePatilGanpati'><FontAwesomeIcon className="h-8" icon={faYoutube} width={30} color="red" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6"></div>
                                <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                                    <form onSubmit={sendMail}>
                                        <div className="mt-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                name="name"
                                                placeholder=""
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput2"
                                                name="email"
                                                placeholder=""
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput3" className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput3"
                                                name="phonenumber"
                                                placeholder=""
                                                value={phonenumber}
                                                onChange={(e) => {
                                                    setPhonenumber(e.target.value)
                                                }}
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlTextarea4" className="form-label">Your Message</label>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea4"
                                                rows="3"
                                                name="message"
                                                value={message}
                                                onChange={(e) => {
                                                    setMessage(e.target.value)
                                                }}
                                                required></textarea>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-danger bg-danger"
                                            >Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1891.1965120668945!2d73.9618438!3d18.5563116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3173c3038e9%3A0xb05dea5ee6e5b305!2sDhole%20Patil%20Ganpati%20Mandir%2C%20Dhole%20Patil%20College!5e0!3m2!1sen!2sin!4v1681924623312!5m2!1sen!2sin"
                                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <Footer />
                    </div>
            }

        </main>
    )
}