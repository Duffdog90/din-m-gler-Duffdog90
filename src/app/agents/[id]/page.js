import AgentContactForm from "@/components/AgentContactForm";
import paperPlane from "../../../../public/images/paper-plane black.png";
import phone from "../../../../public/images/call black.png";
import Image from "next/image";
import searchIcon from "../../../../public/images/search-icon.png"
import Link from "next/link";


export default async function AgentsDetailsPage({ params }) {

    const {id} = await params

    const response = await fetch(
    `https://dinmaegler.onrender.com/agents/${id}`
    );
    const agentDetails = await response.json();

    console.log("all the agent details",agentDetails);
    

    return (
        <main>
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-20">
                <h2 className="text-white text-[4rem] font-bold">
                    Kontakt en medarbejder
                </h2>
            </div>
            <section className="flex justify-center p-[2em] mt-[2em] px-[23rem]">
                <div className="mr-[2em] border-neutral-200 border-2 p-[2em]">
                    <div className="flex p-2" >
                            <img className="w-[16rem] h-[18rem] object-cover mr-2" src={agentDetails.image.url}/>
                        <div className="flex flex-col p-4 gap-4">
                                <span className = "text-2xl font-semibold">{agentDetails.name}</span>
                            <span className="text-[#7B7B7B]">{agentDetails.title}</span>
                            <div className="border-b-[0.18rem] border-[#D3DEE8] w-16"></div>
                            <div className="flex">
                                <Image className="mr-2" alt="phone number" src={phone}/> 
                                <a className="hover:text-orange-400 text-lg"
                                    href={`tel:${agentDetails.phone}`}>
                                    {agentDetails.phone}
                                </a>
                            </div>
                            <div className="flex">
                                <Image className="mr-2" alt="email logo" src={paperPlane}/>
                                <a className="hover:text-orange-400 text-lg"
                                    href={`mailto:${agentDetails.email}`}>
                                    {agentDetails.email}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mt-4">Om {agentDetails.name}</h3>
                        <div className="h-[.2em] w-[2.5em] bg-black mt-[.4em]"></div>
                        <p className="text-lg my-[1.5em] ">
                        {agentDetails.description}
                        </p>
                    </div>
                    <AgentContactForm agent={agentDetails} />
                </div>
                <div>
                    <div className="bg-[#EEF7FF] p-[2em] relative">
                        <h3 className=" text-2xl border-b-2 mb-[1em] pb-[1em] w-[12em] font-semibold">Search Property</h3>
                        <Image className="absolute bottom-[2.7rem] left-10" src={searchIcon} />
                        <input type="text"
                            placeholder="Search"
                            name="search"
                            className="placeholder:text-slate-400 block bg-white w-[100%] border border-slate-300 rounded-[.2em] py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 " />
                    </div>
                    <div className="text-center bg-[#162A41] text-white flex flex-col justify-center items-center text-[2rem] mt-[1em] h-[26rem]">
                        <h2 className="font-semibold ">Find The Best <br /> Property <br /> For Rent Or Buy</h2>
                        <div className="h-[.12em] w-[2.5em] bg-gray-300 mt-[.4em]"></div>
                        <span className="text-[1.1rem] mt-[1em]">Call Us Now</span>
                        <p>{agentDetails.phone}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
