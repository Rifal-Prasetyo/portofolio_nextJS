import Link from "next/link";
import { getDictionary } from "../../dictionaries"
import Divider from "../../ui/Divider";
import Card from "../../ui/allproject/Card";
import Footer from "../../ui/home/footer";

export default async function AllProject({ params: { lang } }: any) {
    const dict = await getDictionary(lang);
    return (
        <>
            <div className="container mx-auto mt-9">
                <Link href={"/"} className="px-4 py-2 rounded-md bg-primary hover:bg-opacity-70 font-light text-sm mb-6">{dict.allproject.backButton}</Link>
                <h1 className="font-bold text-2xl md:text-4xl text-primary mb-2 mt-5">{dict.allproject.heading1}</h1>
                <h2 className="font-thin text-lg md:text-2xl text-gray mb-2">{dict.allproject.heading2}</h2>
                <Divider />
                <div className="flex flex-wrap px-2 py-2">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </>
    )
}