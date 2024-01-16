import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-screen ">
            <div className="flex">
                <div className="h-screen bg-slate-100 p-4 shadow">
                    <div className="mt-8">
                        <ul>
                            <li className="mb-8">
                                <Link href={"/id/dashboard/project"} className="p-4 rounded-md bg-secondary hover:bg-opacity-40 text-white "><i className="fa-solid fa-list "></i></Link>
                            </li>
                            <li className="mb-8">
                                <Link href={"/id/dashboard/blog"} className="p-4 rounded-md bg-secondary hover:bg-opacity-40 text-white "><i className="fa-solid fa-newspaper "></i></Link>
                            </li>
                            <li className="mb-8">
                                <Link href={"/id/dashboard/music"} className="p-4 rounded-md bg-secondary hover:bg-opacity-40 text-white "><i className="fa-solid fa-file "></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}