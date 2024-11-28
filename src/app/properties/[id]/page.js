import Image from "next/image";


export default async function Properties({params}) {

    const {id} = await params
    

    
            const getProperties = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
            const homes = await getProperties.json();

            console.log("property details",homes);
            
        

    return (
        <main className="flex flex-col justify-center items-center">
            <img className="h-[49rem] object-fit w-full" src={homes.images[0].url} />
            <div className="border-b-2 border-[#D3DEE8] w-[75rem] flex justify-between">
                <div className="flex flex-col">
                    <span>{homes.adress1}</span>
                    <span>{homes.postalcode} {homes.city}</span>
                </div>
                <div>pictures</div>
                <span>Kr. {homes.price}</span>
            </div>
            <div className="w-full">
                <div className="w-[33%]">
                    
                </div>
                <div className="w-[33%]"></div>
                <div className="w-[33%]"></div>
            </div>
        </main>
    );
}
