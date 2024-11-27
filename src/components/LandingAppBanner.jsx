import Image from "next/image";
import appleStore from "../../public/images/apple.png";
import playStore from "../../public/images/play-store.png";
import phone1 from "../../public/images/AppPhone1.png";
import phone2 from "../../public/images/AppPhone2.png";

export default function LandingAppBanner() {
    return (
        <section className="bg-[#162A41] flex justify-center items-center pt-20">
            <div>
                <h2 className="text-white text-[2rem] font-bold mb-4">
                    Hold dig opdateret <br /> på salgsprocessen
                </h2>
                <p className="text-white mb-6">
                    Når du sælger din bolig hos Din Mægler, kommunikerer du nemt
                    med den <br /> ansvarlige mægler eller butik med vores app.
                    Her kan du også se statistik på <br /> interessen for din
                    bolig i alle vores salgskanaler.
                </p>
                <div className="flex mb-20">
                    <a
                        href=""
                        className="flex bg-white mr-3 py-4 px-7 hover:scale-105 transition"
                    >
                        <Image
                            className="object-contain mr-1"
                            alt="google store icon"
                            src={playStore}
                        />
                        Google Play
                    </a>
                    <a
                        href=""
                        className="flex bg-[#162A41] border border-white text-white py-3 px-7 hover:scale-105 transition"
                    >
                        <Image
                            className="object-contain mr-1"
                            alt="apple store icon"
                            src={appleStore}
                        />
                        Apple Store
                    </a>
                </div>
            </div>
            <div className="flex ml-16 relative">
                <Image
                    height={350}
                    className="z-[2]"
                    alt="phone image"
                    src={phone1}
                />
                <Image
                    className="absolute left-[136] bottom-0 z-[1]"
                    alt="phone image"
                    src={phone2}
                />
            </div>
        </section>
    );
}
