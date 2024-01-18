import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request : Request) {
    const formData = await request.formData();
    const username : any  = formData.get('username');
    const password : any = formData.get('password');
    const rememberButton : any  = formData.get('remember');
    const prisma = new PrismaClient();

    async function coba() {
        const user = await prisma.user.findFirst({
            where: {email: username, password: password},
            select: {name: true, email: true, password: true}
        });
        return user;
    }
    const result : any =  await coba();
    if(result) {
        NextResponse.next().cookies.set('key', 'coy' + result.email);
        return NextResponse.redirect(new URL('/dashboard', request.url));
    } else {
        return NextResponse.json({message : "username atau Password salah"}, {status : 500});
    }
    console.log('coy');
    // if({user}) {
    //     if(rememberButton > 0) {
    //         NextResponse.next().cookies.set('key', 'COY' + username )
    //     }
    //     return  NextResponse.redirect(new URL('/dashboard', request.url)).cookies.set('welcome', 'true');
    // } else {
    //     return NextResponse.json({message : "username atau password salah"}, {status: 500})
    // }
}