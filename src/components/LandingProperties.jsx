import Link from "next/link";
import PropertyCard from "./PropertyCard/PropertyCard";

export default async function LandingProperties() {
    const getProperties = await fetch(
        `https://dinmaegler.onrender.com/homes?_limit=4`
    );
    const homes = await getProperties.json();

    console.log(homes);

    return (
        <section className="flex flex-col items-center bg-[#F8F8FB] py-[8rem]">
            <h2 className="font-bold text-[2.5rem] mb-6">Udvalgte Boliger</h2>
            <p className="text-lg w-[39rem] text-center mb-[3rem]">
                There are many variations of passages of Lorem Ipsum available
                but the this in majority have suffered alteration in some
            </p>
            <div className="grid grid-cols-2 justify-items-center w-[74rem]">
                {homes.map((items) => (
                    <PropertyCard items={items} key={items.id} />
                ))}
            </div>
            <Link
                href="properties"
                className="bg-[#162A41] text-white h-[3.5rem] w-[10rem] mt-14 text-lg hover:text-orange-400 flex justify-center items-center"
            >
                Se alle boliger
            </Link>
        </section>
    );
}
