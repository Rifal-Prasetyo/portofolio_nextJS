import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero({ locale }: any) {
    return (
        <section id="home" className="pt-26 max-[640px]:pt-28  mb-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap ">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">{locale.gretting}<span className="block font-bold text-dark text-4xl mt-2 lg:text-5xl"> {locale.myname}</span></h1>
                        <h2 className="font-medium text-slate-400 text-lg mb-5 lg:text-2xl"> {locale.status[0]} | <span className="text-dark">{locale.status[1]}</span></h2>
                        <p className="font-medium text-slate-400 mb-3 leading-relaxed">{locale.personality}</p>
                        <div className="w-1/3 border border-dark mb-4 "></div>
                        <div className="flex flex-wrap ">
                            <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 mr-4 rounded-full max-[620px]:text-ekstra_kecil max-[620px]:py-3 max-[620px]:px-6 max-[620px]:mr-3  hover:shadow-lg  
                        hover:opacity-75 transition duration-300 ease-in-out">{locale.contact_me}</a>
                            <a href="https://github.com/Rifal-Prasetyo" className="text-base font-semibold text-white bg-dark py-3 px-8 mr-4 rounded-full max-[620px]:text-ekstra_kecil max-[620px]:py-3 max-[620px]:px-6 max-[620px]:mr-3  hover:shadow-lg  
                        hover:opacity-75 transition duration-300 ease-in-out flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-github mt-1" viewBox="0 0 16 16">
                                    <path fillRule="inherit" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg><span className="pr-3">Github</span></a>
                        </div>
                        <div className="hidden transition duration-200 ease-in-out" id="tampil">
                            <div className="pl-4 w-2 bg-orange-200"><i data-feather="music" className=" text-center items-center absolute "></i></div>
                            <Marquee speed={60} className="font-thin text-sm">Coba</Marquee>
                        </div>
                    </div>
                    <div className="w-full self-end px-4 pb-16 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <img src="/img/rifal.webp" alt="aku" className="max-w-full mx-auto " />
                            <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                                <svg viewBox="0 0 200 200" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#14b8a6" d="M63.7,-52.1C80.4,-47.1,90.2,-23.5,83.6,-6.5C77.1,10.4,54.2,20.9,37.5,33.8C20.9,46.8,10.4,62.2,0.4,61.8C-9.6,61.5,-19.3,45.2,-28.5,32.2C-37.6,19.3,-46.3,9.6,-47.8,-1.5C-49.3,-12.6,-43.6,-25.3,-34.4,-30.3C-25.3,-35.3,-12.6,-32.7,5.4,-38.1C23.5,-43.5,47.1,-57.1,63.7,-52.1Z" transform="translate(100 100) scale(1,1)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}