
export default function Client({ locale }: any) {
    return (
        <section id="clients" className="pt-36 pb-32 bg-slate-900 sembunyi">
            <div className="container flex flex-wrap mx-auto ">
                <div className="w-1/2  px-4 ">
                    <div className=" md:w-full sm:w-full mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2 uppercase"> {locale.client}</h4>
                        <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">{locale.partnership}</h2>
                        <p className="font-medium text-md md:text-lg text-slate-200">{locale.partnership_sub}</p>
                    </div>
                </div>
                <div className=" md:w-full sm:w-full w-1/2 px-4 ">
                    <div className="flex flex-wrap items-center justify-center ">
                        <a href="http://" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                            <img src="/img/klien/Google_ G _Logo.svg.png" alt="Google" />
                        </a>
                        <a href="http://" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                            <img src="/img/klien/Google_ G _Logo.svg.png" alt="Google" />
                        </a>
                        <a href="http://" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                            <img src="/img/klien/Google_ G _Logo.svg.png" alt="Google" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}