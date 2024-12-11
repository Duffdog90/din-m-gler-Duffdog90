"use client";

import { useState } from "react";
import { z } from "zod";

export default function Registre(){

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
        <main className="flex flex-col items-center mb-16 bg-white pb-20">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-12">
                <h2 className="text-white text-[4rem] font-bold">
                    Account Register
                </h2>
            </div>
            <div className="border w-[45rem] h-[35rem] flex flex-col items-center justify-center mt-20">
                <form className="flex flex-col w-[30rem]" onSubmit={handleSubmit} noValidate>
                    <h3 className="font-semibold text-[1.5rem] mb-4 w-full text-center">
                        Opret bruger hos Din Mægler
                    </h3>
                    <label className="flex flex-col">
                        Fulde navn
                        <span className={`ml-6 ${status.color}`}>{status.text?.name?._errors[0]}</span>
                        <input
                            name="name"
                            className=" border-[#F3F1F1] border-2 h-12 pl-2 mt-2 w-full mb-4"
                            placeholder="Fulde navn"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Email adresse
                        <span className={`ml-6 ${status.color}`}>{status.text?.email?._errors[0]}</span>
                        <input
                            name="email"
                            className="border-[#F3F1F1] border-2 h-12 pl-2 mt-2 mb-4"
                            placeholder="Email adresse"
                            type="email"
                        />
                    </label>
                    <label className="flex flex-col">
                        Password
                        <span className={`ml-6 ${status.color}`}>{status.text?.emne?._errors[0]}</span>
                        <input
                            name="emne"
                            className="border-[#F3F1F1] border-2 h-12 pl-2 mt-2 mb-4"
                            placeholder="Password"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Bekræft password
                        <span className={`ml-6 ${status.color}`}>{status.text?.besked?._errors[0]}</span>
                        <input
                            name="besked"
                            className="border-[#F3F1F1] border-2 h-12 pl-2 mt-2 mb-4"
                            placeholder="Bekræft password"
                            type="password"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-[#162A41] text-white h-[2.9rem] rounded-sm hover:text-orange-400"
                    >
                        Opret bruger
                    </button>
                </form>
            </div>
        </main>
    );
}
