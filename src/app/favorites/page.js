import Image from "next/image";
import searchIcon from "../../../public/images/search-icon.png"
// import { cookies } from "next/headers";


export default async function contact(){

    // await cookies().getAll("favorites")

    return(
        <main className="text-[#2A2C30]">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-20">
                <h2 className="text-white text-[4rem] font-bold">
                    Mine favoritboliger
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="py-[1em] relative border-b-2 mb-10 w-[65%]">
                    <Image alt="Søg i favoritter" className="absolute bottom-[1.8rem] left-2" src={searchIcon} />
                    <input type="text"
                        placeholder="Søg i favoritter"
                        name="search"
                        className="placeholder:text-slate-400 block bg-white w-[17rem] border border-slate-300 rounded-[.2em] py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 " />
                </div>
                {/* {favoriteHome.map((items) => (
                    <section className="w-[35rem] shadow-lg flex mt-6 bg-white relative">
                        <img className="h-[17rem] mb-4 w-full" src={items.images[0].url} />
                        <div className="px-6">
                            <address className="flex flex-col gap-4">
                                <span className="font-semibold text-xl">
                                    {items.adress1}
                                    {items.adress2 ? " • " : ""}S
                                    {items.adress2 ? items.adress2 : null}
                                </span>
                                <span className="text-lg">
                                    {items.postalcode} {items.city}
                                </span>
                                <span className="text-lg">
                                    <span className="font-semibold text-xl">
                                        {items.type}
                                    </span>{" "}
                                    • Ejerudgift: {items.cost}kr
                                </span>
                            </address>
                            <div className="border-t-2 mt-4 flex justify-between py-4">
                                <div className="flex">
                                    <span
                                        className={`mr-6 ${items.energylabel} font-semibold text-[1.4rem] text-white h-[1.8rem] w-[1.8rem] flex items-center justify-center block`}
                                    >
                                        {items.energylabel}
                                    </span>
                                    <span className="text-lg">
                                        {items.rooms} værelser • {items.livingspace}m²
                                    </span>
                                </div>
                                <span className="font-semibold text-2xl">
                                    Kr. {items.price}
                                </span>
                            </div>
                        </div>
                    </section>
                ))} */}
            </div>
        </main>
    )
}