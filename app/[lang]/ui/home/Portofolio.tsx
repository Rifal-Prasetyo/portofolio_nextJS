import { PrismaClient } from "@prisma/client";
import Card from "../../components/home/Card";
import { cardDummy } from "@/app/[lang]/dummyData/placeholder_data";
export default async function Portofolio({ locale }: any) {
    // let data = cardDummy;
    const prisma = new PrismaClient();
    const dataPopular = await prisma.project.findMany({
        take: 3,
        orderBy: [
            {
                views: 'desc'
            }
        ],
        include: {
            author: {
                select: { name: true }
            }
        },
    });
    const dataNew = await prisma.project.findMany({
        take: 3,
        orderBy: [
            {
                id: 'desc'
            }
        ],
        include: {
            author: {
                select: { name: true }
            }
        }
    });
    return (
        <section id="portofolio" className="pt-20 pb-16 bg-slate-100 sembunyi">
            <div className="container mx-auto">
                <div className="w-full px-4 flex justify-between">
                    <div className=" mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2 uppercase">{locale.portofolio}</h4>
                        <h2 className="font-bold text-dark text-3xl mb-2 sm:text-4xl lg:text-5xl">{locale.myProject}</h2>
                    </div>
                    <div className=" mb-16 self-center ">
                        <a href="http://" className="text-uppercase px-3 py-2 bg-transparent border border-primary text-primary hover:bg-primary  hover:text-white hover:shadow-md rounded-md">{locale.seeAll}</a>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap mb-4 ">
                    <h4 className="text-primary uppercase font-semibold text-lg ">{locale.popular}</h4>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12
            xl:mx-auto">
                    <Card dataFetch={dataPopular} locale={locale} />
                </div>
                <div className="w-full px-4 flex flex-wrap mb-4 ">
                    <h4 className="text-primary uppercase font-semibold text-lg ">{locale.newest}</h4>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12
            xl:mx-auto">
                    <Card dataFetch={dataNew} locale={locale} />


                </div>


            </div>
        </section>
    )
}