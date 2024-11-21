import PropertyCard from "./PropertyCard";

export default function LandingProperties(){
    return(
        <section className="flex flex-col items-center mb-16 bg-[#F8F8FB] py-20">
            <h2 className="font-bold text-[2.5rem] mb-6">Udvalgte Boliger</h2>
            <p className="text-lg w-[39rem] text-center mb-[3rem]">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            <div className="grid grid-cols-2 justify-items-center w-[74rem]">
                <PropertyCard />
            </div>
            <button className= "bg-[#162A41] text-white h-[4rem] w-[11rem] mt-14 text-xl hover:text-orange-400">Se alle Boliger</button>
        </section>
    )
}