import Image from "next/image";
import logo from "../../public/images/logo.svg";
import phone from "../../public/images/footer-phone.png";
import email from "../../public/images/footer-email.png";
import location from "../../public/images/footer-location.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#F8F8FB] grid grid-cols-2 grid-rows-auto gap-4 p-6">
            <div className="col-span-2 ">
                <Image alt="logo" src={logo} className=" mb-4" />
                <p className="text-[#6f6f6f]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have <br /> suffered alteration
                    in some form, by injected humour, or randomised words.
                </p>
            </div>
            <address className="bg-white p-6 shadow-xl rounded-sm col-span-1 flex flex-col ">
                <ul className="space-y-4">
                    <li className="flex">
                        <Image
                            alt="telefon nummer"
                            src={phone}
                            className="mr-4"
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
                    <li className="flex">
                        <Image alt="email" src={email} className="mr-4" />
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
                        <Image alt="lokation" src={location} className="mr-4" />
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
                <p className="text-[#6f6f6f] text-sm mt-4">
                    Din Mægler Roskilde, er din <br /> boligbutik i
                    lokalområdet.
                </p>
            </address>
            <nav className="col-span-1 ml-16">
                <h2 className="font-semibold text-2xl mb-4">Quick Links</h2>
                <ul className="space-y-2">
                    <li>
                        <Link href="" className="hover:text-orange-400">
                            Boliger til salg
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-orange-400">
                            Mæglere
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-orange-400">
                            Kontakt os
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="hover:text-orange-400">
                            Log ind / bliv bruger
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="col-span-2 bg-white py-4 ">
                <div className="flex flex-col ">
                    <span className="text-[#6f6f6f] text-sm">Medlem af</span>
                    <span className="font-bold text-lg">DMS</span>
                    <span className="text-[#6f6f6f] text-sm">
                        Dansk Mægler Sammenslutning
                    </span>
                </div>
            </div>
        </footer>
    );
}
