"use client"

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import phone from "../../public/images/footer-phone.png";
import email from "../../public/images/footer-email.png";
import location from "../../public/images/footer-location.png";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";

export default function Footer() {

    const isLoggedIn = getCookie("dm_userid")
    
    function handleLogOut(){
        if (isLoggedIn) {
            deleteCookie("dm_token")
            deleteCookie("dm_userid")
        }
    }

    return (
        //gav op på at overlap med grid... xD videre i teksten!

        <footer className="bg-[#F8F8FB] flex flex-col pt-[5rem] relative h-[45rem] mb-16">
            <div className="col-span-2 w-[50%] mb-16 ml-[25rem] ">
                <Image alt="logo" src={logo} className=" mb-4" />
                <p className="text-[#6f6f6f] text-lg">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have <br /> suffered alteration
                    in some form, by injected humour, or randomised words.
                </p>
            </div>
            <div className="flex w-full pl-[25rem] ">
                <address className="bg-white pl-12 shadow-xl shadow-slate-400/10 rounded-sm col-span-1 flex flex-col justify-center w-[28rem] z-[2] h-[28rem]">
                    <ul className="space-y-4 ">
                        <li className="flex">
                            <Image
                                alt="telefon nummer"
                                src={phone}
                                className="mr-4 mb-6"
                            />
                            <div>
                                <span className="text-[#6f6f6f] text-sm block">
                                    Ring til os
                                </span>
                                <a
                                    className="hover:text-orange-400 font-bold text-lg"
                                    href="tel:+4570704000"
                                >
                                    +45 7070 4000
                                </a>
                            </div>
                        </li>
                        <li className="flex ">
                            <Image
                                alt="email"
                                src={email}
                                className="mr-4 mb-6"
                            />
                            <div>
                                <span className="text-[#6f6f6f] text-sm block">
                                    Send en mail
                                </span>
                                <a
                                    className="hover:text-orange-400 font-bold text-lg"
                                    href="mailto:4000@dinmaegler.com"
                                >
                                    4000@dinmaegler.com
                                </a>
                            </div>
                        </li>
                        <li className="flex">
                            <Image
                                alt="lokation"
                                src={location}
                                className="mr-4"
                            />
                            <div>
                                <span className="text-[#6f6f6f] text-sm block">
                                    Butik
                                </span>
                                <a
                                    className="hover:text-orange-400 font-bold text-lg"
                                    href="https://www.google.com/maps?q=Strændertorvet+78,+4000+Roskilde"
                                >
                                    Strændertorvet 78, 4000 Roskilde
                                </a>
                            </div>
                        </li>
                    </ul>
                    <p className="text-[#6f6f6f] text-lg mt-4">
                        Din Mægler Roskilde, er din <br /> boligbutik i
                        lokalområdet.
                    </p>
                </address>
                <nav className="col-span-1 ml-[8rem]">
                    <h2 className="font-semibold text-2xl mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-lg">
                        <li>
                            <Link
                                href="/properties"
                                className="hover:text-orange-400"
                            >
                                Boliger til salg
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/agents"
                                className="hover:text-orange-400"
                            >
                                Mæglere
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-orange-400">
                                Kontakt os
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/Login"
                                className="hover:text-orange-400"
                                >
                                <button onClick={handleLogOut}>
                                    {isLoggedIn ? "Log ud" : "Log ind / bliv bruger"}
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-span-2 bg-white py-4 w-full pl-[18rem] h-[12rem] flex items-center justify-center absolute bottom-0 z-[1] DMS">
                <div className="flex flex-col ">
                    <span className="text-[#7B7B7B] text-sm">Medlem af</span>
                    <span className="font-bold text-[2.5rem] text-[#7B7B7B]">
                        DMS
                    </span>
                    <span className="text-[#7B7B7B] text-md">
                        Dansk Mægler Sammenslutning
                    </span>
                </div>
            </div>
        </footer>
    );
}
