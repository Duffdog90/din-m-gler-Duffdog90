import MaeglerCard from "@/components/MeaglerCard/MaeglerCard";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import Link from "next/link";

export default async function Agents() {
    const getAgents = await fetch(`https://dinmaegler.onrender.com/agents`);
    const agents = await getAgents.json();

    console.log(agents);

    return (
        <main className="flex flex-col items-center mb-16 bg-white pb-20">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-12">
                <h2 className="text-white text-[4rem] font-bold">
                    Medarbejdere i Roskilde
                </h2>
            </div>
            <div className="grid grid-cols-3 justify-items-center w-[74rem]">
                {agents.map((items) => (
                    <MaeglerCard items={items} key={items.id} />
                ))}
            </div>
        </main>
    );
}
