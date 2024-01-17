import Image from "next/image"
import Link from "next/link"
export default function CardBlog({ dataFetch }: any) {
    return (
        <>
            {
                dataFetch.map((data: any, index: any) => (
                    <Link href={data.link} key={index}>
                        <div className=" w-full flex gap-5 px-6 py-4 shadow-lg   bg-slate-100 rounded-md hover:shadow-2xl hover:bg-slate-200">
                            <img src={data.image} alt="contoh foto" className="w-20  aspect-square rounded-md object-cover " />
                            <div className="body-blog">
                                <div className="judul-blog inline-block md:flex  justify-between mb-2 ">
                                    <p className="px-4 font-thin py-1 border mb-4 border-black bg-black text-white shadow-md hover:bg-transparent  rounded-full">{data.category}</p>
                                    <h1 className=" text-lg font-bold hover:text-primary">{data.title}</h1>
                                </div>

                                <p className="text-slate-600 text-base ">{data.excerpt}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}