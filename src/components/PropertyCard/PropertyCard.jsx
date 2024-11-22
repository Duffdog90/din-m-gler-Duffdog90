import "./PropertyCard.css";

export default async function PropertyCard({ items }) {
    return (
        <section className="w-[35rem] shadow-lg flex flex-col mt-6 bg-white">
            <img className="h-[17rem] mb-4" src={items.images[0].url} />
            <div className="px-6">
                <address className="flex flex-col gap-4">
                    <span className="font-semibold text-xl">
                        {items.adress1}
                        {items.adress2 ? " • " : ""}
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
    );
}
