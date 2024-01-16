"use client"

import { Dropdown } from "flowbite-react"
import Link from "next/link"
export default function Header({ locale }: any) {
    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center
        z-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between relative">
                    <div className="px-3 ">
                        <a href="#home" className="font-bold text-lg text-primary block py-3">{locale.name}</a>
                    </div>
                    <div className="flex items-center px-3">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{locale.homeBtn}</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{locale.aboutBtn}</a>
                                </li>
                                <li className="group">
                                    <a href="#portofolio" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{locale.portofolioBtn}</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{locale.clientBtn}</a>
                                </li>
                                <li className="group">
                                    <a href="#blog" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{locale.blogBtn}</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">{locale.contactBtn}</a>
                                </li>
                                <li className="group md:mt-4 sm:mt-4 lg:mt-0">
                                    <a href="#contact" className="text-base text-white py-2 mx-8 flex group-hover:text-primary bg-orange-300 rounded-md text-center justify-center lg:px-4 hover:bg-transparent hover:border hover:border-orange-400 ">{locale.projectBtn}</a>
                                </li>
                                <li className="group md:mt-4 sm:mt-4 lg:mt-0">
                                    <Dropdown label={locale.language} dismissOnClick={false}>
                                        <Dropdown.Item><a href="/id">Bahasa Indonesia</a></Dropdown.Item>
                                        <Dropdown.Item><a href="/en">English</a></Dropdown.Item>
                                    </Dropdown>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}