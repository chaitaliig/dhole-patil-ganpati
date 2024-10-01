"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import DailyAbhishek from '@/public/eseva/daily-abhishek.jpg'
import sankashtiChaturthiAbhishekImage from '@/public/eseva/sankasthi-chaturthi.jpg'
import PoshakhImage from '@/public/eseva/poshakh.jpg'
import chaturthiMahaprasadImage from '@/public/eseva/sankasthi-chaturthi-mahaprasad.jpg'
import flowerDecorationServiceImage from '@/public/eseva/flower-decoration.jpg'
import fruitOfferingServiceImage from '@/public/eseva/fruit-offering.jpg'
import mandirDhwajServiceImage from '@/public/eseva/flag.jpg'
import Script from "next/script";
import Navbar from "@/Components/Navbar/Navbar";
import Link from "next/link";
import SocialMedia from "@/Components/SocialMedia/page";
import MiniGallery from "@/Components/MiniGallery/page";
import Footer from "@/Components/Footer/Footer";
import { PulseLoader } from "react-spinners";

export default function Eseva() {

    const [token, setToken] = useState('');
    const [form, setForm] = useState({ amount: '', name: '', email: '', phone: '', date: '', purpose: '' });

    const handleChangeDailyAbhishek = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Daily Abhishek', amount: '251' });
    };
    const handleChangeSankashtiChaturthiAbhishek = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Sankashti Chaturthi Abhishek', amount: '1100' });
    };
    const handleChangePoshakh = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Poshakh: Sankashti And Vinayaki Chaturthi', amount: '2000' });
    };
    const handleChangeChaturthiMahaprasad = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Chaturthi Mahaprasad', amount: '25000' });
    };
    const handleChangeFlowerDecorationService = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Flower Decoration Service', amount: '20000' });
    };
    const handleChangeFruitOfferingService = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Fruit Offering Service', amount: '500' });
    };
    const handleChangeMandirDhwajService = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'Mandir Dhwaj (Flag) Service', amount: '1000' });
    };
    // const [Email, setEmail] = useState(email)
    // if(email===''){
    //     setEmail='dpesganpatimandir@gmail.com'
    // }
    const getToken = async (e) => {
        e.preventDefault();

        try {
            // Get Token
            const tokenResponse = await axios.post('/api/getToken');
            // console.log(tokenResponse.data);
            setToken(tokenResponse.data);

            // Handle Payment
            const paymentResponse = await axios.post('/api/createOrder', {
                // method: 'POST',
                // headers: {
                //     'content-type': 'application/json'
                // },
                // body: JSON.stringify({
                //     ...form,
                //     token,
                // })
                ...form, token: tokenResponse.data
            });

            // console.log("DDDAAATTAAA" + paymentResponse.json.name);
            window.open(paymentResponse.data.longurl, '_self');
            // await axios.post('/api/check-payment-status', { ...form, token: tokenResponse.data});
        } catch (error) {
            // console.error(error);
        }
    };

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
                            <div className="parallax-container img-loaded parallax-container-top" style={{ background: 'url(/ganpati-images/ganpati-image7.png)', filter: 'brightness(0.70)' }} ></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <div className='px-6 container mx-auto tracking-wider font-bold'>
                            <h1 className='text-center  mt-5'>E-SEVA</h1>
                            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>
                            <div className="row mt-5">
                                <div className="col-lg-8">
                                    <div className="row">

                                        <div id="daily-abhishek" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3" src={DailyAbhishek} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">DAILY MAHA-ABHISHEK</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">251/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#daily-abhishek-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="daily-abhishek-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">DAILY MAHA-ABHISHEK
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangeDailyAbhishek} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangeDailyAbhishek} required/></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangeDailyAbhishek} /></p>
                                                                <p className="mb-3"><strong>Date:</strong> <input className="form-control form-control-sm" required type="date" name="date" onChange={handleChangeDailyAbhishek} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="chaturthi-mahaprasad" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3 object-cover" src={chaturthiMahaprasadImage} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">CHATURTHI MAHAPRASAD</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">25000/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#chaturthi-mahaprasad-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="chaturthi-mahaprasad-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">CHATURTHI MAHAPRASAD
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangeChaturthiMahaprasad} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangeChaturthiMahaprasad} required/></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangeChaturthiMahaprasad} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="sankashti-chaturth-abhishekh" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3" src={sankashtiChaturthiAbhishekImage} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">SANKASHTI CHATURTHI MAHA-ABHISHEK</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">1100/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#sankashti-chaturthi-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="sankashti-chaturthi-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">SANKASHTI CHATURTHI MAHA-ABHISHEK
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangeSankashtiChaturthiAbhishek} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangeSankashtiChaturthiAbhishek} required /></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangeSankashtiChaturthiAbhishek} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="poshakh" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3" src={PoshakhImage} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">POSHAKH: SANKASHTI AND VINAYAKI CHATURTHI</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">2000/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#poshakh-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="poshakh-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">POSHAKH: SANKASHTI AND VINAYAKI CHATURTHI
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangePoshakh} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangePoshakh} required/></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangePoshakh} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="flower-decoration" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3 object-cover" src={flowerDecorationServiceImage} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">FLOWER DECORATION SERVICE</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">20000/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#flower-decoration-service-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="flower-decoration-service-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">FLOWER DECORATION SERVICE
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangeFlowerDecorationService} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangeFlowerDecorationService} required/></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangeFlowerDecorationService} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="fruit-offering" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3 object-cover" src={fruitOfferingServiceImage} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">FRUIT OFFERING SERVICE</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">500/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#fruit-offering-service-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="fruit-offering-service-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">FRUIT OFFERING SERVICE
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangeFruitOfferingService} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangeFruitOfferingService} required/></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangeFruitOfferingService} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="mandir-dhwaj" className="col-6 col-lg-6 my-3 text-center">
                                            <div className="flex justify-center">
                                                <Image className="md:w-4/6 h-60 md:h-80 rounded-3 object-cover" src={mandirDhwajServiceImage} />
                                            </div>
                                            <p className="tracking-wider text-lg font-bold mt-3">MANDIR DHWAJ (FLAG) SERVICE</p>
                                            <p className="tracking-wider text-lg font-bold mt-2">₹ <span className="text-3xl">1000/-</span></p>
                                            <button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2' data-bs-toggle="modal"
                                                data-bs-target="#mandir-dhwaj-service-book-modal">
                                                BOOK
                                            </button>
                                            <div className="modal fade" id="mandir-dhwaj-service-book-modal" tabIndex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">MANDIR DHWAJ (FLAG) SERVICE
                                                            </h1>
                                                            <button className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <form onSubmit={getToken}>
                                                            <div className='modal-body text-left'>
                                                                <p className="mb-3"><strong>Name: </strong> <input className="form-control form-control-sm" type="text" name='name' id="name" required onChange={handleChangeMandirDhwajService} /></p>
                                                                <p className="mb-3"><strong>Email:</strong> <input className="form-control form-control-sm" type="email" name='email' onChange={handleChangeMandirDhwajService} required/></p>
                                                                <p className="mb-3"><strong>Phone No. :</strong> <input className="form-control form-control-sm" required type="text" name='phone' onChange={handleChangeMandirDhwajService} /></p>
                                                            </div>
                                                            <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                                <button type="submit" className='rounded-3 bg-[#42032c] text-white py-1' >
                                                                    BOOK
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 mt-8 md:mt-0">
                                    <SocialMedia />
                                    <MiniGallery />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
            }
        </main>
    )
}