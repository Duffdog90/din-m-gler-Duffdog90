import AgentContactForm from "@/components/AgentContactForm";
import phone from "../../../public/images/footer-phone.png";
import email from "../../../public/images/footer-email.png";
import location from "../../../public/images/footer-location.png";
import Image from "next/image";
import map from "../../../public/images/Map.png"

export default function contact(){
    return(
        <main className="text-[#2A2C30] flex flex-col justify-center items-center">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-20">
                <h2 className="text-white text-[4rem] font-bold">
                    Kontakt os
                </h2>
            </div>
            <section className="flex flex-col justify-center mb-[7rem]">
                
                    <h3 className="font-semibold text-[2rem] mt-4">Vi sidder klar til at besvare dine spørgsmål</h3>
                    <div className="h-[.2em] w-[5.5em] bg-black mt-[.4em] mb-8"></div>
                    <p className="text-lg my-[1.5em] mb-16 ">
                        Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. <br/> Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.
                    </p>
                <div className="flex">
                    <div className="p-[2em] border-solid border-neutral-200 border-2 flex flex-col w-[46rem]">
                        <AgentContactForm  />
                    </div>
                    <section className="p-[2em] border-solid border-neutral-200 border-2 flex flex-col w-[27rem] ml-8 ">
                        <div className="my-4 pb-10 border-b-2 flex flex-col justify-center items-center">
                            <Image alt="ring til os" src={phone} />
                            <h2 className="text-xl font-semibold my-4">Ring til os</h2>
                            <a
                            className="hover:text-orange-400 text-lg"
                            href="tel:+4570704000"
                            >
                            +45 7070 4000
                            </a>
                        </div>
                        <div className="my-4 pb-10 border-b-2 flex flex-col justify-center items-center">
                            <Image alt="email os" src={email} />
                            <h2 className="text-xl font-semibold my-4">Send en mail</h2>
                            <a
                            className="hover:text-orange-400 text-lg"
                            href="mailto:4000@dinmaegler.com"
                            >
                            4000@dinmaegler.com
                            </a>
                        </div>
                        <address className="my-4 pb-10 flex flex-col justify-center items-center">
                            <Image alt="adresse" src={location} />
                            <h2 className="text-xl font-semibold my-4">Besøg butikken</h2>
                            <span className="text-lg">Stændertorvet 78,</span>
                            <span className="text-lg">4000 Roskilde</span>
                        </address>
                    </section>
                </div>
            </section>
            <Image alt="map" src={map} />
        </main>
    )
}