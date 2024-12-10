"use client"

import { redirect, usePathname } from "next/navigation";
import { useState } from "react";
import { z } from "zod";


export default function AgentContactForm() {

    const pathname = usePathname()
    const [status, setStatus ] = useState({})
    
    const pattern = z.object(
        {
            email: z.string().min(1, {message: "Feltet skal udfyldes"}).email({message: "Ugyldig email"}),
            name: z.string().min(1, {message: "Feltet skal udfyldes"}),
            emne: z.string().min(1, {message: "Feltet skal udfyldes"}),
            besked: z.string().min(1, {message: "Feltet skal udfyldes"})

        }
    )

    function handleSubmit(event){
        event.preventDefault()

        const email = event.target.email.value
        const name = event.target.name.value
        const emne = event.target.emne.value
        const besked = event.target.besked.value
    
        const validate = pattern.safeParse({email, name, emne, besked})
        console.log("HER ER VALIDATE",validate.error.format());
    
        if(!validate.success) return setStatus({color: "text-red-500", text: validate.error.format()})
        
        
    }




    return (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col text-[#333333] text-xl">
            <div className="flex w-full mb-4">
                <label className="mr-[1em] w-full">
                Navn
                <span className={`ml-6 ${status.color}`}>{status.text?.name?._errors[0]}</span>
                <input
                    type="text"
                    placeholder="Indtast navn"
                    className={` ${status.text?.name?._errors[0] === "Feltet skal udfyldes" ? "border-red-500 border-dashed border-2" : ""} placeholder:text-slate-400 block bg-white border w-full border-slate-300 rounded-[.2em]
                    py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]`}
                    name="name"
                />
                </label>
                <label className="w-full">
                Email
                <span className={`ml-6 ${status.color}`}>{status.text?.email?._errors[0]}</span>
                <input
                    name="email"
                    type="email"
                    placeholder="Indtast email"
                    className={`${status.text?.email?._errors[0] === "Feltet skal udfyldes" ? "border-red-500 border-dashed border-2" : ""} placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em]
                    py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]`}
                />
                </label>
            </div>
            <label className="mb-4">
                Emne
                <span className={`ml-6 ${status.color}`}>{status.text?.emne?._errors[0]}</span>
                <input
                type="text"
                name="emne"
                placeholder="Hvad drejer din henvendelse sig om?"
                className={` ${status.text?.emne?._errors[0] === "Feltet skal udfyldes" ? "border-red-500 border-dashed border-2" : ""} placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]`}
                />
            </label>
            <label htmlFor="">
                Besked
                <span className={`ml-6 ${status.color}`}>{status.text?.besked?._errors[0]}</span>
                <textarea
                name="besked"
                placeholder="Skriv din besked her..."
                className={` ${status.text?.besked?._errors[0] === "Feltet skal udfyldes" ? "border-red-500 border-dashed border-2" : ""} resize-none placeholder:text-slate-400 block bg-white w-full h-[14rem] border border-slate-300 rounded-[.2em] py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]`}
                ></textarea>
            </label>
            {pathname === "/contact" ? <label className="mb-4">
                <input className="mr-2 " type="checkbox" />
                Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
            </label> : null}
            <button
                type="submit"
                className="bg-[#162A41] text-white h-[4rem] rounded-sm hover:text-orange-400 p-4 px-8 mt-2 w-[12rem]"
            >
                Send besked
            </button>
        </form>
    );
}