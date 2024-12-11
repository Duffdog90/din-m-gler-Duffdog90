"use client"

import "./MaeglerCard.css";
import emailIcon from "../../../public/images/emailMægler.png";
import inIcon from "../../../public/images/inMægler.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MaeglerCard({ items }) {

    const pathname = usePathname()
    return (
        <section className="w-[20rem] shadow-lg flex flex-col mt-6 bg-white text-center pb-2">
            <Link
                    href={`/agents/${items.id}`}
                >
                <img
                    className="h-[17rem] mb-4 object-cover"
                    src={items.image.url}
                />
            </Link>
            <div className="px-6 flex flex-col">
                <h3 className="font-semibold text-xl mb-2">{items.name}</h3>
                <Link
                    className="hover:text-orange-400"
                    href={`/agents/${items.id}`}
                >
                    {items.email}
                </Link>
                <div className="flex gap-4 w-full justify-center mt-4 mb-4">
                    <a href="">
                        <Image alt="email icon" src={emailIcon} />
                    </a>
                    <a href="">
                        <Image alt="in icon" src={inIcon} />
                    </a>
                </div>
            </div>
        </section>
    );
}
