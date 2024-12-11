"use client"

import "./PropertyCard.css";
import heartWhite from "../../../public/images/heart-white.png"
import heartBlack from "../../../public/images/heart-black.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import put from "@/actions/put";

export default function PropertyCard({ items, fav, token }) {

    const [wishList, setWishList] = useState(false)
    function handleWishList (){
        setWishList(prevState => !prevState)
        put(items.id)
    }
    
useEffect(()=>{
    setWishList(fav?.includes(items.id))
},[fav])

    const pathName = usePathname()

    return (
        <>
            {pathName === "/properties" ? <section className="w-[35rem] shadow-lg flex flex-col mt-6 bg-white relative">
                <div className="bg-white/85 h-10 w-10 rounded-full absolute right-4 top-4 flex justify-center items-center">
                {token ? <button onClick={handleWishList}>
                    <Image alt="wishList"  src={wishList ? heartBlack : heartWhite} />
                </button> : <Link href="/Login"><Image alt="wishlist icon" src={heartWhite}/></Link>}
                </div>
                <Link href={`/properties/${items.id}`} className="w-full">
                    <img className="h-[17rem] mb-4 w-full" src={items.images[0].url} />
                    <div className="px-6">
                        <address className="flex flex-col gap-4">
                            <span className="font-semibold text-xl">
                                {items.adress1}
                                {items.adress2 ? " • " : ""}
                                {items.adress2 ? items.adress2 : null}
                            </span>
                            <span className="text-lg">
                                {items.postalcode} {items.city}
                            </span>
                            <span className="text-lg">
                                <span className="font-semibold text-xl">
                                    {items.type}
                                </span>{" "}
                                • Ejerudgift: {items.cost.toLocaleString()}kr
                            </span>
                        </address>
                        <div className="border-t-2 mt-4 flex justify-between py-4">
                            <div className="flex">
                                <span
                                    className={`mr-6 ${items.energylabel} font-semibold text-[1.4rem] text-white h-[1.8rem] w-[1.8rem] flex items-center justify-center block`}
                                >
                                    {items.energylabel}
                                </span>
                                <span className="text-lg">
                                    {items.rooms} værelser • {items.livingspace}m<sup>2</sup>
                                </span>
                            </div>
                            <span className="font-semibold text-2xl">
                                Kr. {items.price}
                            </span>
                        </div>
                    </div>
                </Link>
            </section> : <section className="w-[35rem] shadow-lg flex flex-col mt-6 bg-white relative">
                    <Link href={`/properties/${items.id}`} className="w-full">
                        <img className="h-[17rem] mb-4 w-full" src={items.images[0].url} />
                        <div className="px-6">
                                <address className="flex flex-col gap-4">
                                    <span className="font-semibold text-xl">
                                        {items.adress1}
                                        {items.adress2 ? " • " : ""}
                                        {items.adress2 ? items.adress2 : null}
                                    </span>
                                    <span className="text-lg">
                                        {items.postalcode} {items.city}
                                    </span>
                                    <span className="text-lg">
                                        <span className="font-semibold text-xl">
                                            {items.type}
                                        </span>{" "}
                                        • Ejerudgift: {items.cost.toLocaleString()}kr
                                    </span>
                                </address>
                                <div className="border-t-2 mt-4 flex justify-between py-4">
                                    <div className="flex">
                                        <span
                                            className={`mr-6 ${items.energylabel} font-semibold text-[1.4rem] text-white h-[1.8rem] w-[1.8rem] flex items-center justify-center block`}
                                        >
                                            {items.energylabel}
                                        </span>
                                        <span className="text-lg">
                                            {items.rooms} værelser • {items.livingspace}m<sub>2</sub>
                                        </span>
                                    </div>
                                    <span className="font-semibold text-2xl">
                                        Kr. {items.price.toLocaleString()}
                                    </span>
                                </div>
                        </div>
                    </Link>
            </section>}
        </>
    );
}
