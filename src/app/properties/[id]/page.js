"use client"

import Image from "next/image";
import Link from "next/link";
import paperPlane from "../../../../public/images/paper-plane black.png";
import phone from "../../../../public/images/call black.png";
import gallery from "../../../../public/images/gallery.png";
import layer from "../../../../public/images/layer.png";
import location from "../../../../public/images/location details.png";
import wishlistWhite from "../../../../public/images/wishlist details.svg";
import wishlistBlack from "../../../../public/images/wishlist details black.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";
import put from "@/actions/put";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"

export default function Property() {


    const pathID = usePathname().replace("/properties/" , "")

    console.log("pathID",pathID);
    
    const token = getCookie("dm_token")
    const [homes, setHomes] = useState()
    const [image, setImage] = useState(homes && homes.images[0].url)
    const [imageFit, setImageFit] = useState(false)
    const [locationShow, setLocationShow] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [open, setOpen] = useState(false)
    const [openFloorplan, setOpenFloorplan] = useState(false)

    useEffect(()=>{
        async function fetchFavorites(){

            const getFavorites = await fetch("https://dinmaegler.onrender.com/users/me", {
                "method": "GET",
                "headers": {
                    "Authorization": `Bearer ${token}`
                }
            })
            const floofenbergVonLichtenstein = await getFavorites.json();
            setFavorites(floofenbergVonLichtenstein.homes)
            console.log("favorites",floofenbergVonLichtenstein.homes);
        }
        fetchFavorites()
    },[])

    const [wishList, setWishList] = useState(false)
        function handleWishList (){
            setWishList(prevState => !prevState)
            put(homes.id)
        }
    useEffect(()=>{
        console.log("homes", homes)
        if (!token) {
            return
        }else setWishList(favorites.includes(homes?.id))
        
    },[favorites])
    
    const images = {
        propertyImg: homes && homes.floorplan.url,
        mainImg: homes && homes.images[0].url
    }


    function handleSwitchImage(image, fit){
        setImage(images[image])
        setImageFit(fit)
        setLocationShow(false)
    }
    function handleShowLocation(){
        setLocationShow(true)
    }


            useEffect(()=>{
                async function fetchHome(){
                    const getProperties = await fetch(`https://dinmaegler.onrender.com/homes/${pathID}`);
                    
                    const homes = await getProperties.json();
                    setHomes(homes)
                    console.log("property details",homes);

                }
                fetchHome()
            },[])

    return (
        <main className="flex flex-col justify-center items-center">
            {locationShow ? <iframe className="h-[49rem] w-full" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1895.49721901066!2d${homes && homes.long}!3d${homes && homes.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdk!4v1733212333709!5m2!1sen!2sdk`} allowFullScreen="" loading="lazy"></iframe> :
            <img className={`h-[49rem] ${imageFit ? "object-contain" : "object-cover"} w-[100%]`} src={image ? image : homes && homes.images[0].url} />}
            <div className="border-b-[0.01rem] border-[#D3DEE8] w-[75rem] flex justify-between items-center pb-5 mt-8 text-[#162A41]">
                <address className="flex flex-col ">
                    <span className="text-xl font-semibold mb-2">{homes && homes.adress1}</span>
                    <span className="text-xl font-semibold">{homes && homes.postalcode} {homes && homes.city}</span>
                </address>
                <div className="flex gap-10">


                    <button onClick={() =>setOpen(true)} className="focus:border-b-4 focus:scale-105 border-orange-300 pb-1" >
                        <Image  alt="logo" className="hover:scale-105 transition cursor-pointer " src={gallery}/>
                    </button>


                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={homes?.images.map(image => ({src: image.url}))}
                        />

                    <Lightbox
                        open={openFloorplan}
                        close={() => setOpenFloorplan(false)}
                        slides={[{src: homes?.floorplan.url}]}
                        />


                    
                    <button onClick={() =>setOpenFloorplan(true)} className="focus:border-b-4 focus:scale-105 border-orange-300 pb-1" >
                        <Image  alt="logo" className="hover:scale-105 transition cursor-pointer" src={layer}/>
                    </button>
                    <button  onClick={handleShowLocation} className="focus:border-b-4 focus:scale-105 border-orange-300 pb-1" >
                        <Image alt="logo" className="hover:scale-105 transition cursor-pointer" src={location}/>
                    </button>
                    {token ? <button onClick={handleWishList} className="hover:scale-105 transition cursor-pointer">
                        <Image alt="wishList"  src={wishList ? wishlistBlack : wishlistWhite} />
                    </button> : <Link className="hover:scale-105 transition cursor-pointer" href="/Login"><Image alt="wishlist icon" src={wishlistWhite}/> </Link>}
                </div>
                <span className="text-[2rem] font-semibold">Kr. {homes && homes.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-8 gap-5 w-[75rem] text-lg">
                <div className="flex flex-col w-1/4">
                    <div className="flex justify-between ">
                        <span>Sagsnummer:</span>
                        <span className="w-[35%]">123456789.</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Boligareal:</span>
                        <span className="w-[35%]">{homes && homes.livingspace} m²</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Grundareal:</span>
                        <span className="w-[35%]">{homes && homes.lotsize} m²</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Rum/værelser:</span>
                        <span className="w-[35%]">{homes && homes.rooms}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Antal Plan:</span>
                        <span className="w-[35%]">-</span>
                    </div>
                </div>
                <div className="flex flex-col w-1/4">
                    <div className="flex justify-between">
                        <span>Kælder:</span>
                        <span className="w-[35%]">{homes && homes.basementsize}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Byggeår:</span>
                        <span className="w-[35%]">{homes && homes.built}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Ombygget:</span>
                        <span className="w-[35%]">{homes && homes.remodel ? homes && homes.remodel : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Energimærke:</span>
                        <span className="w-[35%]">{homes && homes.energylabel}</span>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 ">
                    <div className="flex justify-between ">
                        <span>Udbetaling:</span>
                        <span className="w-[35%]">Kr. {homes && homes.payment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Brutto ex ejerudgift:</span>
                        <span className="w-[35%]">Kr. {homes && homes.gross.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Netto ex ejerudgift:</span>
                        <span className="w-[35%]">Kr. {homes && homes.netto.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Ejerudgifter:</span>
                        <span className="w-[35%]">Kr. {homes && homes.cost.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-12 text-[#2A2C30] mb-20 justify-center w-[103rem]">
                <article className="w-1/3 pr-[5rem]">
                    <h2 className="text-2xl font-semibold mb-8">Beskrivelse</h2>
                    <p className="text-lg">{homes && homes.description}</p>
                </article>
                <section className="w-[40%]">
                    <h3 className="text-2xl font-semibold mb-8">Ansvarlig mægler</h3>
                    <div className="flex border p-8" >
                        <Link href={`/agents/${homes && homes.agent.id}`}>
                            <img className="w-[16rem] h-[18rem] object-cover mr-2" src={homes && homes.agent.image.url}/>
                        </Link>
                        <div className="flex flex-col p-4 gap-4">
                            <Link href={`/agent/${homes && homes.agent.id}`}>
                                <span className = "text-2xl font-semibold">{homes && homes.agent.name}</span>
                            </Link>
                            <span className="text-[#7B7B7B]">{homes && homes.agent.title}</span>
                            <div className="border-b-[0.18rem] border-[#D3DEE8] w-16"></div>
                            <div className="flex">
                                <Image className="mr-2" alt="phone number" src={phone}/> 
                                <a className="hover:text-orange-400 text-lg"
                                    href={`tel:${homes && homes.agent.phone}`}>
                                    {homes && homes.agent.phone}
                                </a>
                            </div>
                            <div className="flex">
                                <Image className="mr-2" alt="email logo" src={paperPlane}/>
                                <a className="hover:text-orange-400 text-lg"
                                    href={`mailto:${homes && homes.agent.email}`}>
                                    {homes && homes.agent.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
