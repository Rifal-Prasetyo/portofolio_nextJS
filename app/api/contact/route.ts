import { NextResponse } from "next/server";

export async function POST(request : Request) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('note');

    let text = {
        api_key : "f49d0f2eeae0f3d372c06f79ba3dc554a0dccb00",
        receiver: "6283109895990",
        data : {
            message: `*HUBUNGI SAYA* \n hai Rifal, berikut pesan yang diinputkan dari Portofoliomu \n
            Nama: ${name} \n
            Email: ${email} \n
            Pesan: ${message}`
        }
    }

    await fetch("https://wasap.onlymewa.my.id/api/send-message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(text),
    }).then().then((data) => console.log(data));
    return NextResponse.redirect(new URL('/', request.url));
}