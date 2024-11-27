

import PropertyCard from "@/components/PropertyCard/PropertyCard";

export default async function Properties({params}) {

    const {id} = await params
    

    
            const getProperties = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
            const homes = await getProperties.json();

            console.log(homes);
            
        

    return (
        <main className="flex flex-col items-center mb-16 bg-white pb-20">
            <div className="tilsalgFilter bg-[#F8F8FB] flex items-center justify-center w-full mb-12">
                <h2 className="text-white text-[4rem] font-bold">
                    Bolig detaljer
                </h2>
            </div>
            
            <div className="grid grid-cols-2 justify-items-center w-[74rem]">
                {/* {homes.map((items) => (
                    <PropertyCard items={items} key={items.id} />
                ))} */}
                
            </div>
        </main>
    );
}
