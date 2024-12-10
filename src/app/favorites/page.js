import Image from "next/image";
import { cookies } from "next/headers";
import "../../components/PropertyCard/PropertyCard.css";
import FavoritePageCard from "@/components/FavoritePageCard";
import searchIcon from "../../../public/images/search-icon.png"



export default async function favorites(){

    const cookieStore = await cookies()
    const token = cookieStore.get("dm_token")


const getFavorites = await fetch("https://dinmaegler.onrender.com/users/me", {
    "method": "GET",
    "headers": {
        "Authorization": `Bearer ${token.value}`
    }
})

    const favs = await getFavorites.json();

    console.log("property details",favs.homes);



    const getProperties = await fetch(`https://dinmaegler.onrender.com/homes`);

    const homes = await getProperties.json();

    console.log("her har vi favorite fetches",homes);
        

const filteredHomes = homes.filter(function (home) {
    if (favs.homes.includes(home.id)) return home
})
console.log("all homes ids", filteredHomes);



    return(
        <main className="text-[#2A2C30]">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-20">
                <h2 className="text-white text-[4rem] font-bold">
                    Mine favoritboliger
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center mb-20">
                <div className="py-[1em] relative border-b-2 mb-10 w-[65%]">
                    <Image alt="Søg i favoritter" className="absolute bottom-[1.8rem] left-2" src={searchIcon} />
                    <input type="text"
                        placeholder="Søg i favoritter"
                        name="search"
                        className="placeholder:text-slate-400 block bg-white w-[17rem] border border-slate-300 rounded-[.2em] py-2 pl-8 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 " />
                </div>
                {filteredHomes.map((items) => (
                    <FavoritePageCard key={items.id} items={items} />
                ))}
            </div>
        </main>
    )
}