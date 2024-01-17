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
            select: {name: true, email: true, password: true}
        });
        console.log(user);
    }
    coba();
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