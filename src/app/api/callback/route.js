import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET() {
    const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            identifier: "patrick@mail.dk",
            password: "123456",
        }),
    })
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

    const json = await response.json();

    console.log("------" + JSON.stringify(json));
    const savedCookie = cookies();
    savedCookie.set("maeglerCookie", json.access_token);

    redirect("/");
}
