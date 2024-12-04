"use client"

import login from "@/actions/login"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function Login() {

    const [formState, formAction] = useActionState(login, null)

	useEffect(function() {
		if (!formState) return

		if (formState?.success !== true ) return

		redirect("/")
	}, [formState])

    return (
        <main className="flex flex-col items-center mb-16 bg-white pb-20">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-12">
                <h2 className="text-white text-[4rem] font-bold">
                    Account Login
                </h2>
            </div>
            <div className="border w-[45rem] h-[35rem] flex flex-col items-center justify-center mt-20">
                <form
                    action={formAction}
                    className="flex flex-col w-[30rem]"
                >
                    <h3 className="font-semibold text-[1.5rem] mb-4 w-full text-center">
                        Log ind på din konto
                    </h3>
                    <label className="flex flex-col">
                        Email
                        <span className="text-red-500 font-bold">{formState?.identifier?._errors.map(error => error)}</span>
                        <input
                            name="identifier"
                            className=" border-[#F3F1F1] border-2 h-12 pl-2 mt-2 w-full mb-4"
                            placeholder="Email"
                            type="email"
                        />
                    </label>
                    <label className="flex flex-col">
                        Password
                        <span className="text-red-500 font-bold">{formState?.password?._errors.map(error => error)}</span>
                        <input
                            name="password"
                            className="border-[#F3F1F1] border-2 h-12 pl-2 mt-2 mb-4"
                            placeholder="Password"
                            type="password"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-[#162A41] text-white h-[2.9rem] rounded-sm hover:text-orange-400"
                    >
                        Log ind
                    </button>
                </form>
                <div className="w-[30rem] mt-8 ">
                    <h4 className="mb-3">Log ind med</h4>
                    <div className="flex justify-between mb-10">
                        <a
                            href=""
                            className="flex bg-[#DD4B39] text-white py-3 px-7 w-[10rem] justify-center hover:scale-105 transition"
                        >
                            Google
                        </a>
                        <a
                            href=""
                            className="flex bg-[#3B5999] text-white py-3 px-7 w-[10rem] justify-center mx-3 hover:scale-105 transition"
                        >
                            Facebook
                        </a>
                        <a
                            href=""
                            className="flex bg-[black] text-white py-3 px-7 w-[10rem] justify-center hover:scale-105 transition"
                        >
                            Twitter
                        </a>
                    </div>
                    <span className="w-full justify-center flex block">
                        Har du ikke en konto?{" "}
                        <a
                            href="Register"
                            className="text-blue-500 ml-1 hover:text-orange-400"
                        >
                            {" "}
                            Opret bruger.
                        </a>
                    </span>
                </div>
            </div>
        </main>
    );
}
