'use client';
import { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Script from "next/script";
import './Navbar.css'
import logo from '@/public/logo.png'
import Image from "next/image";
export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav id="nav" className="bg-transparent text-white">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-4 md:w-auto w-full flex justify-between align-items-center bg-transparent">
                    <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" />
                    <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" noModule />
                    <Link href='/'><Image className="md:cursor-pointer " src={logo} width={250} height={30} alt="Dhole Patil Ganpati Logo"  /></Link>

                    <div className="text-3xl md:hidden mt-3 " onClick={() => setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center m-0 z-50 tracking-[.6px] fw-bold " style={{ fontSize: '14px' }}>


                    
                    <li>
                        <Link href="/about" className="py-7 px-3 d-block">
                            <p className="text-xs">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="py-7 px-3 d-block">
                            <p className="text-xs">Events</p>
                        </Link>
                    </li>
                    <NavLinks />
                    <li>
                        <Link href="/eseva" className="py-7 px-3 d-block">
                            <p className="text-xs">E-seva</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/edonation" className="py-7 px-3 d-block">
                            <p className="text-xs">E-Donation</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="py-7 px-3 d-block">
                            <p className="text-xs">Contact</p>
                        </Link>
                    </li>
                </ul>
                {/* Mobile nav */}
                <ul
                    className={`
          md:hidden  h-100 bg-gray-900 text-white fixed w-full top-0 overflow-y-auto bottom-0 py-32 pl-4
          duration-500 ${open ? "right-0" : "right-[-100%]"} z-40
          `}
                >

                    
                    <li>
                        <Link href="/about" className="py-7 px-2 d-block">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="py-7 px-2 d-block">
                            Events
                        </Link>
                    </li>
                    <NavLinks />
                    <li>
                        <Link href="/eseva" className="py-7 px-2 d-block">
                            E-Seva
                        </Link>
                    </li>
                    <li>
                        <Link href="/edonation" className="py-7 px-2 d-block">
                            E-Donation
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="py-7 px-2 d-block">
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};