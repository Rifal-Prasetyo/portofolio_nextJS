import { PrismaClient } from "@prisma/client";
import CardBlog from "../../components/home/Card_blog";
import { blogDummy } from "../../dummyData/placeholder_data";


export default async function Blog({ locale }: any) {
    const prisma = new PrismaClient();
    const blogs = await prisma.blog.findMany({

        orderBy: [
            {
                id: 'desc'
            }
        ],
        select: {
            title: true,
            image: true,
            excerpt: true,
            slug: true,
            views: true,
            author: true,
            category: {
                select: { name: true }
            }
        },
    });
    console.log(blogs);
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100 sembunyi">
            <div className="container mx-auto">
                <div className="w-full px-4 flex justify-between">
                    <div className="mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2 uppercase"> {locale.title}</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">{locale.header}</h2>

                    </div>
                    <div className=" mb-16 self-center ">
                        <a href="http://" className="text-uppercase px-3 py-2 bg-transparent border border-primary text-primary hover:bg-primary  hover:text-white hover:shadow-md rounded-md">{locale.seeAll}</a>
                    </div>
                </div>

                {/* <!-- bagian card tulisan  --> */}
                <div className="w-full mt-2 px-4 flex flex-wrap md:flex-nowrap gap-4">
                    <CardBlog dataFetch={blogs} />

                </div>

            </div>
        </section>
    )
}