import Link from "next/link";
import Divider from "../../components/Divider";

export default function DashboardPage() {
    return (
        <>
            <h1 className="font-bold text-2xl md:text-4xl text-slate-900 mb-2">Selamat Datang di Website</h1>
            <h2 className="font-light text-lg md:text-2xl mb-4">Kamu adalah admin</h2>
            <Divider />

            <div className="flex flex-wrap rounded gap-4 justify-start ">
                <Link href={"/id/dashboard/blog"} className="bg-orange-200 rounded-lg flex items-center justify-between shadow-sm w-full md:w-[30%] px-10 py-10" >
                    <h3 className="font-semibold text-slate-800 text-lg">Total Post</h3>
                    <h3 className="font-bold text-slate-900 text-lg">12</h3>
                </Link>
                <Link href={"/id/dashboard/project"} className="bg-yellow-200 rounded-lg flex items-center justify-between shadow-sm w-full md:w-[30%] px-10 py-10">
                    <h3 className="font-semibold text-slate-800 text-lg">Total Project</h3>
                    <h3 className="font-bold text-slate-900 text-lg">12</h3>
                </Link>
                <Link href={"/id/dashboard/music"} className="bg-green-200 rounded-lg flex items-center justify-between shadow-sm w-full md:w-[30%] px-10 py-10">
                    <h3 className="font-semibold text-slate-800 text-lg">Total Music</h3>
                    <h3 className="font-bold text-slate-900 text-lg">12</h3>
                </Link>
            </div>
        </>
    )
}