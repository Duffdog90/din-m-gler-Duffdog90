"use client";

export default function Login() {
    return (
        <main className="flex flex-col items-center mb-16 bg-white pb-20">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-12">
                <h2 className="text-white text-[4rem] font-bold">
                    Account Register
                </h2>
            </div>
            <div className="border w-[45rem] h-[35rem] flex flex-col items-center justify-center mt-20">
                <form className="flex flex-col w-[30rem]">
                    <h3 className="font-semibold text-[1.5rem] mb-4 w-full text-center">
                        Opret bruger hos Din Mægler
                    </h3>
                    <label className="flex flex-col">
                        Fulde navn
                        <input
                            className=" border-[#F3F1F1] border-2 h-12 pl-2 mt-2 w-full mb-4"
                            placeholder="Fulde navn"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Email adresse
                        <input
                            className="border-[#F3F1F1] border-2 h-12 pl-2 mt-2 mb-4"
                            placeholder="Email adresse"
                            type="email"
                        />
                    </label>
                    <label className="flex flex-col">
                        Password
                        <input
                            name="passwordData"
                            className="border-[#F3F1F1] border-2 h-12 pl-2 mt-2 mb-4"
                            placeholder="Password"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        Bekræft password
                        <input
                            name="passwordData"
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
