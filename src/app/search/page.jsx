import Image from "next/image";
import "../../components/PropertyCard/PropertyCard.css";
import searchIcon from "../../../public/images/search-icon.png"
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";




export default async function Search({searchParams}){

    const {results} = searchParams

    const getProperties = await fetch(`https://dinmaegler.onrender.com/homes?description_contains=${results}`);

    const homes = await getProperties.json();

    const cookieStore = await cookies()
    const token = cookieStore.get("dm_token")

    console.log("her har vi favorite fetches",homes);
        




    return(
        <main className="flex flex-col items-center mb-16 bg-white pb-20">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-20">
                <h2 className="text-white text-[4rem] font-bold">
                    Søge resultater
                </h2>
            </div>
            <div  className="grid grid-cols-2 justify-items-center w-[74rem]">
                {homes.map((items) => (
                        <PropertyCard key={items.id} items={items} token={token} />
                    ))}
            </div>
        </main>
    )
}