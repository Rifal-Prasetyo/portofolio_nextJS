
export default function Card({ locale, dataFetch }: { locale: any, dataFetch: any }) {

    return (
        <>
            {
                dataFetch.map((data: any, index: any) => (
                    <div className="mb-12 p-4 md:w-1/3" key={index}>
                        <div className="rounded-md shadow-md overflow-hidden aspect-video">
                            <img src={data.image} alt="landing-page" className="w-full object-cover aspect-video" />
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">{data.title}</h3>
                        <p id="paragrafFFF" className="text font-medium text-base text-secondary text-ellipsis overflow-hidden mb-2">{data.excerpt}</p>
                        <div className="w-full bg-slate-50 flex px-5 py-2 rounded-md shadow-md mb-4 justify-between gap-4 ">
                            <div className="info-icon ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill text-primary" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                </svg>
                                <p className="text-sm text-slate-500 ">{data.views}</p>
                            </div>
                            <div className="info-icon ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill text-primary" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                                <p className="text-sm text-slate-500 ">{data.likes}</p>
                            </div>
                            <div className="info-icon ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill text-primary" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>
                                <p className="text-sm text-slate-500 ">{data.love}</p>
                            </div>
                        </div>
                        <a href="http://" target="_blank" className="px-4 py-2 bg-transparent border border-primary text-primary text-sm font-bold rounded-md shadow-sm hover:bg-primary hover:text-white hover:shadow-xl">{locale.button}</a>
                    </div>
                ))
            }
        </>
    )
}