import Link from "next/link";
import MaeglerCard from "./MeaglerCard/MaeglerCard";

export default async function LandingMaeler() {
    const getAgents = await fetch(
        `https://dinmaegler.onrender.com/agents?_limit=3`
    );
    const agents = await getAgents.json();

    console.log("Agents array", agents);

    return (
        <section className="flex flex-col items-center bg-[white] py-[8rem]">
            <h2 className="font-bold text-[2.5rem] mb-6">
                Mød vores engagerede medarbejdere
            </h2>
            <p className="text-lg w-[39rem] text-center mb-[3rem]">
                Din Mægler er garant for altid veluddannet assistance i dit
                boligsalg.
                <br /> Kontakt en af vores medarbejdere.
            </p>
            <div className="flex gap-6">
                {agents.map((items) => (
                    <MaeglerCard items={items} key={items.id} />
                ))}
            </div>
            <Link
                href="agents"
                className="bg-[#162A41] text-white h-[3.5rem] w-[10rem] mt-14 text-lg hover:text-orange-400 flex justify-center items-center"
            >
                Se alle mæglere
            </Link>
        </section>
    );
}
