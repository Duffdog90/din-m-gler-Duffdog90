"use client"

import Image from "next/image";
import subArrow from "../../public/images/subArrow.png";
import { useState } from "react";
import { z } from "zod";

export default function Subscribe() {


    const [status, setStatus ] = useState({})
    
    const pattern = z.string().min(1, {message: "feltet skal udfyldes"}).email({message: "Ugyldig email"})
    
    function handleSubscribe(event){

        event.preventDefault()

        const email = event.target.email.value

        const validate = pattern.safeParse(email)

        if(!validate.success) return setStatus({color: "text-red-500", text: validate.error.format()._errors[0]})


        fetch("https://dinmaegler.onrender.com/subscribers", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "email": event.target.email.value
        })
        })
        .then(response => {
            if(!response.ok) return setStatus({color: "text-red-500", text: "Der er sket en fejl, Prøv igen!"})
            setStatus({color: "text-green-500", text: "Du er nu tilmeldt vores nyhedsbrev."})
        })
        .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handleSubscribe} className="subscribeFilter bg-[#F8F8FB] flex items-center justify-center" noValidate>
            <p className="text-2xl font-semibold text-white mr-[10rem]">
                Tilmeld dig vores nyhedsbrev og <br /> hold dig opdateret på
                boligmarkedet
            </p>
            <div className="flex relative">
                <div className="flex flex-col">
                    <span className={`ml-6 ${status.color}`}>{status.text}</span>
                    <input
                        className={`w-[34rem] h-14 pl-4  ml-6 rounded ${status === "Du er nu tilmeldt vores nyhedsbrev." ? "border-2 border-green-500" : "" }`}
                        type="email"
                        placeholder="Indtast din email adresse"
                        name="email"

                    />
                </div>
                <button className="h-14 w-[3rem] absolute right-0 bottom-0 ">
                    <Image
                        alt="submit subscribe letter"
                        className=""
                        src={subArrow}
                    />
                </button>
            </div>
        </form>
    );
}
