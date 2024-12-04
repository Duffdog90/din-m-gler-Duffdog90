"use client"

import { usePathname } from "next/navigation";


export default function AgentContactForm() {

    const pathname = usePathname()

    return (
        <form className="flex flex-col text-[#333333] text-xl">
            <div className="flex w-full mb-4">
                <label className="mr-[1em] w-full">
                Navn
                <input
                    type="text"
                    placeholder="Indtast navn"
                    className="placeholder:text-slate-400 block bg-white border w-full border-slate-300 rounded-[.2em]
                    py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]"
                    name="search"
                />
                </label>
                <label className="w-full">
                Email
                <input
                    type="text"
                    placeholder="Indtast email"
                    className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em]
                    py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]"
                />
                </label>
            </div>
            <label className="mb-4">
                Emne
                <input
                type="text"
                name=""
                id=""
                placeholder="Hvad drejer din henvendelse sig om?"
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[.2em] py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]"
                />
            </label>
            <label htmlFor="">
                Besked
                <textarea
                name=""
                id=""
                placeholder="Skriv din besked her..."
                className=" resize-none placeholder:text-slate-400 block bg-white w-full h-[14rem] border border-slate-300 rounded-[.2em] py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mb-[.5em] mt-[1rem]"
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