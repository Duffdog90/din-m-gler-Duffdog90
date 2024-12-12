"use client"

import Image from "next/image";
import "../components/PropertyCard/PropertyCard.css";
import put from "@/actions/put";
import { redirect } from "next/dist/server/api-utils";
import { useRef } from "react";


export default function FavoritePageCard({items}){
    const myRef = useRef()


function handleRemoveFavorite (){
    put(items.id)
    myRef.current.remove()
    }


    return(
        <section ref={myRef}  className=" w-[75rem] shadow-lg flex mt-8 bg-white relative rounded border-[0.1rem] border-[#D5E0EA] p-6 items-center">
                <div className="flex w-full justify-between ">
                    <div className="flex">
                        <img className="h-[8rem] w-[15rem] mr-10" src={items.images[0].url} />
                        <address className="flex flex-col gap-4">
                            <span className="font-semibold text-lg">
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
                                • Ejerudgift: {items.cost}kr
                            </span>
                        </address>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                        <div className=" flex justify-between items-start">
                            <div className="flex mr-10">
                                <span
                                    className={`mr-6 ${items.energylabel} font-semibold text-[1.4rem] text-white h-[1.8rem] w-[1.8rem] flex items-center justify-center block`}
                                >
                                    {items.energylabel}
                                </span>
                                <span className="text-lg">
                                    {items.rooms} værelser • {items.livingspace}m²
                                </span>
                            </div>
                            <span className="font-semibold text-2xl">
                                Kr. {items.price.toLocaleString('en-US')}
                            </span>
                        </div>
                        <button onClick={handleRemoveFavorite}  className=" hover:text-orange-400 bg-[#162A41] h-[3.5rem] w-[12rem] text-white">Fjern fra favoritter</button>
                    </div>
                </div>
        </section>
    )
}