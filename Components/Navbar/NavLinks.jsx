'use client';
import { useState } from "react";
import { links } from "./Mylinks";
import Link from "next/link";

export default function Navbar(){
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
      <>
        {links.map((link,index) => (
          <div key={index}>
            <div className="px-2 text-left md:cursor-pointer group">
              <span
                className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                }}
              >
                <p className="md:text-xs">{link.name}</p>
                <h6>
                <span className="text-lg md:hidden inline">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-lg md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
                </h6>
              </span>
              {link.submenu && (
                <div>
                  <div className="absolute top-16 hidden group-hover:md:block hover:md:block z-3">
                    {/* <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                      mt-1 bg-white rotate-45"
                      ></div>
                    </div> */}
                    {/* <div className="bg-white p-5 grid grid-cols-3 gap-10"> */}
                    <div className="bg-white grid  mt-3 p-2 px-4 gap-10 border rounded">
                      {link.sublinks.map((mysublinks, index) => (
                        <div key={index}>
                          <p className="text-lg font-semibold">
                            {mysublinks.Head}
                          </p>
                          {mysublinks.sublink.map((slink,index) => (
                            <li key={index} className="text-sm text-gray-600 my-3">
                              <Link
                                href={slink.link}
                                className="hover:text-primary d-block"
                              >
                                <p className="text-xs">{slink.name}</p>
                                
                              </Link>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Mobile menus */}
            <div
              className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
            >
              {/* sublinks */}
              {link.sublinks.map((slinks,index) => (
                <div key={index}>
                  <div>
                    {/* <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                    >
                      {slinks.Head}
  
                      <span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon
                          name={`${
                            subHeading === slinks.Head
                              ? "chevron-up"
                              : "chevron-down"
                          }`}
                        ></ion-icon>
                      </span>
                    </h1> */}
                    {/* <div
                      className={`${
                        subHeading !== slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    > */}
                    <div
                      className={`${
                        subHeading !== slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink,index) => (
                        <li className="py-3 pl-14" key={index}>
                          <Link href={slink.link} className="d-block">{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };