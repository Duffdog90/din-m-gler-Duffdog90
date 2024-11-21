

export default async function PropertyCard(){

    const getProperties = await fetch("https://dinmaegler.onrender.com/homes?_limit=4")
    const homes = await getProperties.json()

    console.log(homes);
    

    return(
        homes.map(items =>
        <section className="w-[35rem] shadow-lg flex flex-col mt-6 bg-white">
            <img className="h-[17rem] mb-4" src={items.images[0].url} />
            <div className="px-6">
                <address className="flex flex-col gap-4">
                    <span className="font-semibold text-xl">{items.adress1}</span>
                    <span className="text-lg">{items.postalcode} {items.city}</span>
                    <span className="text-lg"><span className="font-bold text-xl">{items.type}</span> - Ejerudgift: {items.cost}kr</span>
                </address>
                <div className="border-t-2 mt-4 flex justify-between py-4">
                    <div className="flex">
                        <span className=" mr-6 bg-[#10AC84] font-semibold text-[1.4rem] text-white h-[1.8rem] w-[1.8rem] flex items-center justify-center block">{items.energylabel}</span>
                        <span className="text-lg">{items.rooms} værelser - {items.livingspace}m²</span>
                    </div>
                    <span className="font-semibold text-2xl">Kr. {items.price}</span>
                </div>
            </div>
        </section> )
        
    )
}