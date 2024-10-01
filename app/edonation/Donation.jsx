"use client"
import Navbar from "@/Components/Navbar/Navbar";
import axios from "axios";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import QRCode from "@/public/donation/barcode.png"
import CosmosBank from "@/public/donation/cosmos-bank.jpg"
import Footer from "@/Components/Footer/Footer";
import { PulseLoader } from "react-spinners";

export default function Donation() {

    const [token, setToken] = useState('');
    const [form, setForm] = useState({ amount: '', name: '', email: '', phone: '', purpose: '' });

    const handleChangeEDonation = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, purpose: 'E-Donation' });
    };

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
                        <section className="fullscreen">
                            <Navbar />
                            <div className="parallax-container img-loaded parallax-container-top" style={{ background: 'url(/ganpati-images/ganpati-image8.png)', filter: 'brightness(0.75)' }} ></div>

                            <div className="shape-divider" data-style="1" data-height="300" style={{ zIndex: '0', opacity: '1' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 125.72" preserveAspectRatio="none" style={{ height: '150px' }}><title>Asset 174</title>
                                <path d="M398,107.84c-56.15,10.07-119.59-11.26-166.62-20.2-2.71-.52-5.35-1-7.94-1.41A159.54,159.54,0,0,0,202,84q-3.09-.09-6,0c-.71,0-1.39.08-2.09.12-52.8,2.93-80.34,28.78-112.91,36.62a72.63,72.63,0,0,1-9.66,1.62A31.49,31.49,0,0,1,62,123l-1.18-.13C31.37,122.85,0,77.82,0,111.82v13.9H630V110.36C523,60.39,470,94.94,398,107.84Z" style={{ fill: '#fff' }}></path>
                            </svg>
                            </div>
                        </section>
                        <h1 className="text-center tracking-wider font-bold mt-5">E-DONATION</h1>
                        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>
                        <div className="bg-[#42032c] py-3 my-3 text-white">
                            <div className="px-6 container mx-auto">
                                <div className="row">
                                    <div className="col-lg-9 col-sm-6 flex align-items-center justify-center">
                                        <h3 className="text-center tracking-wider font-bold">E-Donation using Secure Payment Gateway</h3>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 flex md:block justify-center mt-6 md:mt-0">
                                        <button type="button" className="btn  bg-light text-black tracking-wider font-bold" data-bs-toggle="modal"
                                            data-bs-target="#edonation-book-modal">E-DONATION
                                        </button>
                                        <div className="modal fade" id="edonation-book-modal" tabIndex="-1"
                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content text-black">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">E-DONATION</h1>
                                                        <button className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <form onSubmit={getToken}>
                                                        <div className="modal-body ">
                                                            <p className="mb-3"><strong>Name: </strong><input type="text" className="form-control form-control-sm" name='name' id="name" required onChange={handleChangeEDonation} /></p>
                                                            <p className="mb-3"><strong>Email:</strong> <input type="email" className="form-control form-control-sm" name='email' onChange={handleChangeEDonation} required/></p>
                                                            <p className="mb-3"><strong>Phone No. :</strong><input required className="form-control form-control-sm" type="text" name='phone' onChange={handleChangeEDonation} /></p>
                                                            <p className="mb-3"><strong>Amount:</strong><input required className="form-control form-control-sm" type="number" name="amount" onChange={handleChangeEDonation} /></p>
                                                        </div>
                                                        <div className="d-grid gap-2 col-6 mx-auto my-2">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-danger bg-danger"
                                                            >Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 container mx-auto ">
                            <p className="text-2xl font-medium tracking-wide text-center">"We make a living by what we get, but we make a life by what we give."</p>
                            <div className="row my-3">
                                <div className="col-lg-6 flex align-items-center">
                                    <p className="text-center tracking-wide">Making a donation is now easy! If you are willing to make a donation, you can scan the QR code with any BHIM UPI App. Any amount you donate, big or small will be contributed to the wellbeing of people.</p>

                                </div>
                                <div className="col-lg-6 flex justify-center mt-6 md:mt-0">
                                    <Image src={QRCode} width={250} />
                                </div>
                            </div>
                        </div>
                        <div className="px-6 container mx-auto font-medium tracking-wide text-center mb-5">
                            <div className="row">
                                <div className="col-lg-6 flex align-items-center justify-center">
                                    <div>
                                        <p className="mb-2 font-bold text-lg">Donations by Cheque</p>
                                        <p className="mb-2">Dhole Patil Charitable Trust, Pune</p>
                                        <p className="mb-2">Dhole Patil College Near Panchshil Towers, Kharadi, Pune, Maharashtra, India</p>
                                        <p className="mb-2">Ph.No. +91 9096879687</p>
                                        <p className="mb-2">Contact : dholepatilganpati@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-6 md:my-0">
                                    <div className="flex justify-center">
                                        <Image className="text-center" src={CosmosBank} />
                                    </div>
                                    <p className="mb-2 font-bold">Cosmos Bank</p>
                                    <p className="mb-2">Savings Account No:</p>
                                    <p className="mb-2">02805010101448</p>
                                    <p className="mb-2">IFSC Code : COSB0000028</p>
                                    <p className="mb-2">Branch :- Koregaon Park Pune</p>
                                </div>

                            </div>
                        </div>
                        <Footer />
                    </div>
            }
        </main>
    )
}