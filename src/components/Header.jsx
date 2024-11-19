import paperPlane from "../../public/images/paper-plane.svg";
import phone from "../../public/images/call.svg";
import user from "../../public/images/user.svg";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="">
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
                    <button className="hover:text-orange-400">Log in</button>
                </div>
            </div>
            <div className="h-[5.6rem] flex items-center justify-around px-[10rem] bg-white">
                <Link href="/">
                    <Image width={320} alt="logo" src={logo} />
                </Link>
                <nav className="text-[1.2rem]">
                    <a className="mr-8 hover:text-orange-400" href="">
                        Boliger til salg
                    </a>
                    <a className="mr-8 hover:text-orange-400" href="">
                        Mæglere
                    </a>
                    <a className="mr-8 hover:text-orange-400" href="">
                        Mine favoritter
                    </a>
                    <a className="hover:text-orange-400" href="">
                        Kontakt os
                    </a>
                </nav>
            </div>
        </header>
    );
}
