import Divider from "@/app/[lang]/components/Divider"
import Link from "next/link"



export default function blogDashboard() {
    return (
        <>
            <h1 className="font-bold text-slate-800 text-2xl md:text-4xl mb-2">Blog</h1>
            <h2 className="font-light text-lg text-slate-600 mb-4">Lihat semua blog yang kamu buat</h2>
            <Divider />
            <div className="flex justify-items-end">
                <Link href={"/id/dashboard/blog/create"} className="bg-green-300 font-light text-lg rounded-md flex items-center w-fit px-4 py-2 mb-4 gap-4"><i className="far fa-sticky-note"></i>Buat</Link>
            </div>
            <div className="flex flex-wrap">
                <div className=" w-1/2 flex gap-5 px-6 py-4 shadow-lg   bg-slate-100 rounded-md hover:shadow-2xl hover:bg-slate-200">
                    <img src="/img/example.png" alt="contoh foto" className="w-20  aspect-square rounded-md object-cover " />
                    <div className="body-blog">
                        <div className="judul-blog inline-block md:flex  justify-between mb-2 ">
                            <a href="http://" className="px-4 font-thin py-1 border mb-4 border-black bg-black text-white shadow-md hover:bg-transparent hover:text-black rounded-full">Fotografi</a>
                            <h1 className=" text-lg font-bold hover:text-primary">Lorem ipsum dolor sit.</h1>
                        </div>
                        <p className="text-slate-600 text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente.</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href={"/id/dashboard/blog/" + "1" + "edit"} className="bg-blue-500 text-slate-50 font-thin rounded-md flex items-center "><i className="fa-solid fa-edit">Edit</i></Link>
                            <Link href={"/id/dashboard/blog/" + "1" + "delete"} className="bg-red-500 text-slate-50 font-thin rounded-md flex items-center "><i className="fa-solid fa-edit">Edit</i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}