"use server"

import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export default async function put( homeId ) {

    const cookieStore = await cookies()
    const userid = cookieStore.get("dm_userid")
    const userToken = cookieStore.get("dm_token")

	fetch(`https://dinmaegler.onrender.com/users/${userid.value}`, {
    "method": "PUT",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken.value}`
    },
    "body": JSON.stringify({
        "homes": [
        homeId
        ]
    })
    })


    .then(response => console.log(response))
    .catch(err => console.error(err));

}