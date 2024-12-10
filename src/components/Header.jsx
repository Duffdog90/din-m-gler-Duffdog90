"use client";

import paperPlane from "../../public/images/paper-plane.svg";
import phone from "../../public/images/call.svg";
import user from "../../public/images/user.svg";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";


export default function Header() {
    const path = usePathname();
    
    const [isLoggedIn, setIsLoggedIn] = useState()
    useEffect(()=>{
        const loggedIn = getCookie("dm_userid")
        setIsLoggedIn(loggedIn)
    },[path])

    
    function handleLogOut(){
        if (isLoggedIn) {
            deleteCookie("dm_token")
            deleteCookie("dm_userid")
            redirect("/Login")
        }
    }

    return (
        <header className="sticky top-0 z-[9999]">
            <div className="text-white h-[3.8rem] text-[1.2rem] font-semibold flex justify-around items-center bg-[#162A41]">
                <address className="flex ">
                    <div className="flex">
                        <Image
                            height={24}
                            width={24}
                            alt="email"
                            className="mr-2"
                            src={paperPlane}
                        />
                        <a
                            className="hover:text-orange-400"
                            href="mailto:4000@dinmaegler.com"
                        >
                            4000@dinmaegler.com
                        </a>
                    </div>
                    <div className="flex">
                        <Image
                            height={24}
                            width={24}
                            alt="phone number"
                            className="mr-2 ml-6"
                            src={phone}
                        />
                        <a
                            className="hover:text-orange-400"
                            href="tel:+4570704000"
                        >
                            +45 7070 4000
                        </a>
                    </div>
                </address>
                <div className="flex">
                    <Image
                        height={24}
                        width={24}
                        alt="log in"
                        className="mr-2"
                        src={user}
                    />
                    {isLoggedIn ? <button onClick={handleLogOut}>Log ud</button> 
                    : <Link
                        href="/Login"
                        className={`${
                            path === "/Login" ? "text-orange-400" : "black"
                        }  hover:text-orange-400`}
                    >
                        Log ind
                    </Link>}
                        
                        
                        
                </div>
            </div>
            <div className="h-[5.6rem] flex items-center justify-around px-[10rem] bg-white">
                <Link href="/">
                    <Image width={320} alt="logo" src={logo} />
                </Link>
                <nav className="text-[1.2rem]">
                    <Link
                        className={`${
                            path === "/properties" ? "text-orange-400" : "black"
                        }  hover:text-orange-400 mr-8`}
                        href="/properties"
                    >
                        Boliger til salg
                    </Link>
                    <Link
                        className={`${
                            path === "/agents" ? "text-orange-400" : "black"
                        }  hover:text-orange-400 mr-8`}
                        href="/agents"
                    >
                        Mæglere
                    </Link>
                    <Link
                        className={`${
                            path === "/favorites" ? "text-orange-400" : "black"
                        }  hover:text-orange-400 mr-8`}
                        href={isLoggedIn ? "/favorites" : "/Login"}
                    >
                        Mine favoritter
                    </Link>
                    <Link
                        className={`${
                            path === "/contact" ? "text-orange-400" : "black"
                        }  hover:text-orange-400 mr-8`}
                        href="/contact"
                    >
                        Kontakt os
                    </Link>
                </nav>
            </div>
        </header>
    );
}
