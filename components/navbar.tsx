"use client";

import Image from "next/image";
import logo from "@/public/logo.jpg";

import { Cart } from "./cart";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
    const paths = [
        {
            id: 1,
            name: "Blogs",
            href: "/blogs"
        },
        {
            id: 2,
            name: "Courses",
            href: "/courses"
        },
        {
            id: 3,
            name: "About Us",
            href: "/about"
        },
        {
            id: 4,
            name: "Contacts",
            href: "/contact"
        }
    ];

    return (
        <header className="sticky top-0 w-full shadow-md">
            <div className="container flex justify-between h-16 bg-background max-w-screen-2xl items-center">
                {/* Logo and nav links section */}
                <div className="flex mr-4 sm:px-2">
                    <a href="/" className="mr-6 flex items-center space-x-2">
                        <div>
                            <Image src={logo} width={25} height={25} alt="logo"></Image>
                        </div>
                        <span className="font-bold truncate text-sm sm:text-lg inline-block"><span className=" text-custom1">Stock</span> <span className="text-custom2">Sessions</span></span>
                    </a>
                    <div className="flex md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center">
                                <svg fill="none" className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H12M4 18H20" stroke="#4A5568" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {paths.map(path => (
                                    <a href={path.href} key={path.id}><DropdownMenuItem className="cursor-pointer">{path.name}</DropdownMenuItem></a>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-6 text-sm">
                            {
                                paths.map(path => (
                                    <li key={path.id}><a className="transition-colors text-foreground/60 truncate hover:text-foreground/90" href={path.href}>{path.name}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                {/* Logo and nav links section ending */}


                {/* Login and everything section */}
                <div className="flex sm:px-2 justify-between items-center space-x-3 md:justify-end">
                    {/* We can add things here */}
                    {/* <a href="https://twitter.com/stock_sessions" rel="noreferrer" target="_blank">
                        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                            <svg className="h-3 w-3 fill-current" height="23" viewBox="0 0 1200 1227" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path></svg>
                            <span className="sr-only">X</span>
                        </div>
                    </a> */}
                    <div className="flex items-center gap-3 justify-center md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g></svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <a href="/login"><DropdownMenuItem>Login</DropdownMenuItem></a>
                                <a href="/signup"><DropdownMenuItem>Sign Up</DropdownMenuItem></a>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Cart />
                    </div>
                    <div className="hidden md:flex justify-between items-center space-x-3">
                        <a href="/login" className="bg-custom1 text-teal-100 hover:bg-custom2 text-sm px-3 py-1 rounded-md transition">Login</a>
                        <a href="/signup" className="bg-custom3 text-slate-800 hover:bg-slate-300 text-sm px-3 truncate py-1 rounded-md transition">Sign Up</a>
                        <Cart />
                    </div>
                </div>
                {/* Login and everything section ending */}

            </div>
        </header>
    )
};

