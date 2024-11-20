import Image from "next/image";
import landingImg from "../../public/images/landingintro-img.jpg";
import solgt from "../../public/images/landingintro-solgt.png";
import salg from "../../public/images/landingintro-salg.png";
import bestil from "../../public/images/landingintro-bestil.png";
import lokation from "../../public/images/lokation.png";
import tilmeld from "../../public/images/landingintro-tilmeld.png";

export default function LandingIntro() {
    return (
        <div className="flex justify-center items-center mt-[7rem] text-[#162A41]">
            <div className=" media-landing flex justify-center items-center flex-col w-[60%]">
                <section className="flex w-[full] justify-center mb-16">
                    <Image alt="picture of family" src={landingImg} />
                    <div className="px-[4.5rem] text-[1.1rem]">
                        <h2 className="media-h2 font-bold text-[2.5rem] mb-4">
                            Vi har fulgt danskerne hjem i snart 4 årtier
                            <span className=" block font-semibold text-[1.3rem] mt-8">
                                Det synes vi siger noget om os!
                            </span>
                        </h2>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has normal distribution.
                        </p>
                        <p className="my-4">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                        <div className="flex justify-between mt-10 pr-10">
                            <div className="flex">
                                <div className="bg-[#EEF7FF] w-[4rem] h-[4rem] mr-4 flex justify-center items-center">
                                    <Image alt="solgt logo" src={solgt} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[1.5rem]">
                                        4829
                                    </span>
                                    <span>boliger solgt</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="bg-[#EEF7FF] w-[4rem] h-[4rem] mr-4 flex justify-center items-center">
                                    <Image alt="salg logo" src={salg} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-[1.5rem]">
                                        158
                                    </span>
                                    <span>boliger til salg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ul className="flex pt-16 border-[#D3DEE8] border-t-2 mb-48">
                    <li className="flex mr-2">
                        <div className="bg-[#EEF7FF] w-[3rem] h-[3rem] flex justify-center items-center mr-2">
                            <Image alt="logo til sektion" src={bestil} />
                        </div>
                        <section className="w-[75%]">
                            <h3 className="text-[1.5rem] font-semibold mb-4">
                                Bestil et salgstjek
                            </h3>
                            <p className="text-[1.1rem]">
                                Med et Din Mægler Salgstjek bliver du opdateret
                                på værdien af din bolig.
                            </p>
                        </section>
                    </li>
                    <li className="flex">
                        <div className="bg-[#EEF7FF] w-[3rem] h-[3rem] flex justify-center items-center mr-2">
                            <Image alt="logo til section" src={lokation} />
                        </div>
                        <section className="w-[65%]">
                            <h3 className="text-[1.5rem] font-semibold mb-4">
                                74 butikker
                            </h3>
                            <p className="text-[1.1rem]">
                                Hos Din Mægler er din bolig til salg i alle
                                vores 74 butikker, som er fordelt rundt om i
                                Danmark.
                            </p>
                        </section>
                    </li>
                    <li className="flex">
                        <div className="bg-[#EEF7FF] w-[3rem] h-[3rem] flex justify-center items-center mr-2">
                            <Image alt="logo til section" src={tilmeld} />
                        </div>
                        <div className="w-[70%]">
                            <h3 className="text-[1.5rem] font-semibold mb-4">
                                Tilmeld køberkartotek
                            </h3>
                            <p className="text-[1.1rem]">
                                Når du er tilmeldt vores køberkartotek, bliver
                                du kontaktet inden en ny bolig bliver
                                annonceret.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
