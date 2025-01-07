'use client';

import logo from "@/assets/header/logoBlack.png";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";

// Dont need an id since titles are unique
const navbarList = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Shop',
        link: '/shop'
    },
    {
        title: 'Cart',
        link: '/cart'
    },
    {
        title: 'Profile',
        link: '/profile'
    },
    {
        title: 'Studio',
        link: '/studio/structure'
    }
]

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const pathname = usePathname();

    return (
        <header className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50 px-5">
            <nav className="h-full max-w-screen-xl mx-auto xl:px-0 flex items-center justify-between gap-2">
                <h1>
                    <Link
                        href={'/'}
                    >
                        <Image
                            src={logo}
                            alt='Logo'
                            className="w-20"
                        />
                    </Link>
                </h1>
                <form className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[0.1rem] border-black items-center gap-2 justify-between px-6 rounded-md">
                    <input
                        type="text"
                        placeholder="Search your products here"
                        className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-400"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                    {searchQuery ? <IoCloseOutline className="w-5 h-5 cursor-pointer hover:text-red-500 duration-200" onClick={() => setSearchQuery('')} /> : <FaSearch className="w-5 h-5 cursor-pointer" />}
                </form>
                <ul className="hidden md:inline-flex items-center gap-2">
                    {navbarList.map((item) =>
                        <li
                            key={item?.link}
                            className="md:border-r-[0.1rem] md:border-gray-400 last:border-r-0"
                        >
                            <Link
                                href={item?.link}
                                className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 hover:underline underline-offset-[0.5rem] hover:text-gray-950 duration-200 text-gray-600 ${pathname === item?.link && 'text-gray-950 underline font-medium'}`}
                            >
                                {item?.title}
                            </Link>
                        </li>
                    )}
                </ul>
                <HiMenuAlt2 className="inline-flex md:hidden w-8 h-6" aria-label='Open menu' />
            </nav>
        </header>
    )
}
export default Navbar