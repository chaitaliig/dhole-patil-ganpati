import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="bg-[#42032c] text-white py-7">
                <div className="container mx-auto md:px-20">
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="text-xl tracking-wider mb-3 font-bold">ABOUT US</p>
                            <p className="tracking-wider">Dhole Patil Ganpati in Pune stands as a beacon of pride, inspiration, and idealism for Maharashtra's public Ganpati festival. It embodies the spirit of devotion and community celebration that defines this auspicious occasion."</p>
                        </div>
                        <div className="col-lg-3 mt-6 md:mt-0">
                            <p className="text-xl tracking-wider mb-3 font-bold ">GET IN TOUCH</p>
                            <Link className='' href="https://goo.gl/maps/RKDdDzNDqDtY8drp8" target="_blank">
                                <div className="flex mb-3">
                                    <div>
                                        <FontAwesomeIcon className='me-2' icon={faLocationDot} width={20} />
                                    </div>
                                    <p className="font-medium tracking-wide">Dhole Patil College Road, near Panchshil Towers Road, Vitthal Nagar, Kharadi, Pune,
                                        Maharashtra 412207</p>
                                </div>
                            </Link>
                            <Link className='' href="tel:9096879687">
                                <div className="flex mb-3">
                                    <FontAwesomeIcon className='me-2' icon={faPhone} width={20} />
                                    <p className="font-medium tracking-wide">+91 9096879687</p>
                                </div>
                            </Link>
                            <Link className="" href="mailto:dholepatilganpati@gmail.com">
                                <div className="flex mb-3">
                                    <FontAwesomeIcon className='me-2' icon={faEnvelope} width={20} />
                                    <p className="font-medium tracking-wide">dholepatilganpati@gmail.com</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 mt-6 md:mt-0">
                            <p className="text-xl text-center tracking-wider mb-3 font-bold">LINKS</p>

                            <p className="text-center tracking-wide mb-1"><Link className="" href="/about">About</Link></p>
                            <p className="text-center tracking-wide mb-1"><Link className="" href="/events">Events</Link></p>
                            {/* <p className="text-center tracking-wide mb-1"><Link className="" href="/social">Social</Link></p> */}
                            <p className="text-center tracking-wide mb-1"><Link className="" href="/photos">Photos</Link></p>
                            <p className="text-center tracking-wide mb-1"><Link className="" href="/videos">Videos</Link></p>
                            <p className="text-center tracking-wide mb-1"><Link className="" href="/eseva">E-Seva</Link></p>
                            <p className="text-center tracking-wide mb-1"><Link className="" href="/edonation">E-Donations</Link></p>
                            <p className="text-center tracking-wide mb-1"><Link className="" href="/contact">Contact</Link></p>
                        </div>
                        <div className="col-lg-3 mt-6 md:mt-0">
                            <p className="text-xl text-center tracking-wider mb-3 font-bold">CONNECT WITH US</p>
                            <div className="d-flex justify-content-evenly mt-4">
                                <Link className="text-white" target="_blank" href='https://www.facebook.com/profile.php?id=61550938731488&mibextid=ZbWKwL'><FontAwesomeIcon className="h-8" icon={faFacebook} /></Link>
                                <Link className="text-white" target="_blank" href='https://www.instagram.com/dholepatilganpati/'><FontAwesomeIcon className="h-8" icon={faInstagram} width={30} /></Link>
                                <Link className="text-white" target="_blank" href='https://youtube.com/@DholePatilGanpati'><FontAwesomeIcon className="h-8" icon={faYoutube} width={30} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-center">© Copyright 2024 Dhole Patil Charitable Trust. All Rights Reserved.</p>
        </>
    )
}