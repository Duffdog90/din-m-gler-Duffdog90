import Image from "next/image";
import hov from "../../public/images/HOV.png"
import Link from "next/link";

export default function error() {
    return (
        <main className="flex flex-col gap-8 justify-center items-center bg-[#EEF7FF] text-center py-30 h-[85vh]">
            <Image alt="page dont exist icon" src={hov} />
            <h2 className="text-2xl font-semibold">Du er havnet på en side som ikke findes!</h2>
            <span>det er vi kede af! Vi har sendt en beked af sted til vores <br/> internetbureau, og bedt dem se på fejlen</span>
            <Link
                href="/"
                className="bg-[#162A41] text-white h-[3.5rem] w-[13rem] text-lg hover:text-orange-400 flex justify-center items-center"
            >
                Tilbage til forsiden
            </Link>
        </main>
    )
}
