
export default function AgentContactForm({ agent }) {
    return (
        <form action="" className="p-[2em] border-solid border-neutral-200 border-2">
        <h1 className="font-semibold text-2xl">Kontakt {agent.name}</h1>
    
        <div className="h-[.2em] w-[3.5em] bg-black mt-[.4em] mb-[3rem]"></div>
        <div className="flex">
            <label className="mr-[1em] ">
            Navn
            <input
                type="text"
                placeholder="Indtast navn"
                className="placeholder:text-slate-400 block bg-white w-[20em] border border-slate-300 rounded-[.2em]
                py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 mt-[1em]"
                name="search"
            />
            </label>
            <label>
            Email
            <input
                type="text"
                placeholder="Indtast email"
                className="placeholder:text-slate-400 block bg-white w-[20em] border border-slate-300 rounded-[.2em]
                py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 my-[1em]"
            />
            </label>
        </div>
            <label>
                Emne
                <input
                type="text"
                name=""
                id=""
                placeholder="Hvad drejer din henvendelse sig om?"
                className="placeholder:text-slate-400 block bg-white w-[41em] border border-slate-300 rounded-[.2em] py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 my-[1em]"
                />
            </label>
            <label htmlFor="">
                Besked
                <textarea
                name=""
                id=""
                placeholder="Skriv din besked her..."
                className=" resize-none placeholder:text-slate-400 block bg-white w-[41em] h-[10rem] border border-slate-300 rounded-[.2em] py-4 pl-2 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 my-[1em]"
                ></textarea>
            </label>
            <button
                type="submit"
                className="bg-[#162A41] text-white h-[3.5rem] rounded-sm hover:text-orange-400 p-4 px-8 mt-2"
            >
                Send besked
            </button>
        </form>
    );
}