import Image from "next/image";
import subArrow from "../../public/images/subArrow.png";

export default function Subscribe() {
    return (
        <form className="subscribeFilter bg-[#F8F8FB] flex items-center justify-center">
            <p className="text-2xl font-semibold text-white mr-[10rem]">
                Tilmeld dig vores nyhedsbrev og <br /> hold dig opdateret på
                boligmarkedet
            </p>
            <div className="flex relative">
                <input
                    className="w-[34rem] h-14 pl-4  ml-6 rounded"
                    type="text"
                    placeholder="Indtast din email adresse"
                />
                <button className="h-14 w-[3rem] absolute right-0 ">
                    <Image
                        alt="submit subscribe letter"
                        className=""
                        src={subArrow}
                    />
                </button>
            </div>
        </form>
    );
}
