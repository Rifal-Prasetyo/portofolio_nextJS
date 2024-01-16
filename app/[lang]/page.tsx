import Hero from "@/app/[lang]/ui/home/Hero";
import Skills from "./ui/home/Skills";
import About from "./ui/home/About";
import Portofolio from "./ui/home/Portofolio";
import Client from "./ui/home/Client";
import Blog from "./ui/home/Blog";
import Contact from "./ui/home/Contact";
import Header from "./ui/home/Header";
import Footer from "./ui/home/Footer";
import { getDictionary } from './dictionaries.js'
import { PrismaClient } from "@prisma/client";



export default async function Page({ params: { lang } }: any) {
    const dict = await getDictionary(lang);
    const prisma = new PrismaClient();
    async function main() {
        const projects = await prisma.project.findMany({
            select: { title: true, image: true }
        });
        console.log(projects);

    }

    main().then(async () => {
        await prisma.$disconnect()
    }).catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

    return (
        <>
            {/* {dataQuery?.map((data: any, index: any) => (
                <h1 key={index}>{data.title}</h1>
            ))} */}

            <Header locale={dict.home.header} />
            <Hero locale={dict.home.hero} />
            <Skills locale={dict.home.skills} />
            <About locale={dict.home.about} />
            <Portofolio locale={dict.home.portofolio} />
            <Client locale={dict.home.client} />
            <Blog locale={dict.home.blog} />
            <Contact locale={dict.home.contact} />

            <Footer locale={dict.home.footer} />
        </>
    )
}