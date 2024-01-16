export default function Skills({ locale }: any) {
    return (
        <section className="sembunyi z-50 ">
            <div className="container mx-auto mt-[-7rem]">
                <div className=" border-none py-3  lg:flex gap-4 md:flex px-8 lg:w-[80%] m-auto">
                    <div className="box  bg-slate-100 px-6 py-4  lg:w-1/3 shadow-2xl  rounded-lg sm:w-full mb-3">
                        <div className="icon w-full block mb-4 ">
                            <div className="w-12 h-12 mr-3 rounded-full flex justify-center items-center shadow-sm hover:border-primary hover:bg-primary text-white bg-orange-500 hover:text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-code-slash   " viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L 1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="divider border border-slate-400 w-1/5 mb-2"> </div>
                        <div className="body">
                            <h3 className="t text-2xl text-primary  font-bold mb-2 ">{locale.backend.title}</h3>
                            <p className="text-sm text-slate-600 ">{locale.backend.excerpt}</p>
                        </div>
                        <div className="footer w-full flex flex-row-reverse mt-3">
                            <a href="http://" className="w-8 h-8 mr-3 rounded-full flex justify-center items-center text-left shadow-sm hover:border-black hover:bg-primary text-white bg-blue-400  hover:text-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="box  bg-slate-100 px-6 py-4  lg:w-1/3 shadow-2xl  rounded-lg sm:w-full mb-3">
                        <div className="icon w-full block mb-4 ">
                            <div className="w-12 h-12 mr-3 rounded-full flex justify-center items-center shadow-sm hover:border-primary hover:bg-primary text-white bg-orange-500 hover:text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-images" viewBox="0 0 16 16">
                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                                </svg>
                            </div>
                        </div>
                        <div className="divider border border-slate-400 w-1/5 mb-2"> </div>
                        <div className="body">
                            <h3 className="t text-2xl text-primary  font-bold mb-2 ">{locale.design.title}</h3>
                            <p className="text-sm text-slate-600 ">{locale.design.excerpt}</p>
                        </div>
                        <div className="footer w-full flex flex-row-reverse mt-3">
                            <a href="http://" className="w-8 h-8 mr-3 rounded-full flex justify-center items-center text-left shadow-sm hover:border-black hover:bg-primary text-white bg-blue-400  hover:text-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="box  bg-slate-100 px-6 py-4  lg:w-1/3 shadow-2xl  rounded-lg sm:w-full mb-3">
                        <div className="icon w-full block mb-4 ">
                            <div className="w-12 h-12 mr-3 rounded-full flex justify-center items-center shadow-sm hover:border-primary hover:bg-primary text-white bg-orange-500 hover:text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="divider border border-slate-400 w-1/5 mb-2"> </div>
                        <div className="body">
                            <h3 className="t text-2xl text-primary  font-bold mb-2 ">{locale.editing.title}</h3>
                            <p className="text-sm text-slate-600 ">{locale.editing.excerpt}</p>
                        </div>
                        <div className="footer w-full flex flex-row-reverse mt-3">
                            <a href="http://" className="w-8 h-8 mr-3 rounded-full flex justify-center items-center text-left shadow-sm hover:border-black hover:bg-primary text-white bg-blue-400  hover:text-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>

                            </a>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}