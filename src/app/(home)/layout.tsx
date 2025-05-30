'use client'

import { ShoppingCartSimpleIcon, StorefrontIcon, UserCircleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const pathname = usePathname();
    useEffect(() => setSelectedIndex(pathname === "/" ? 0 : 1), [pathname]);

    return (
        <div className="flex flex-col h-screen">
            <header className="p-6 flex justify-between bg-accent-light text-light">
                <a href="/" className="font-bold text-xl/tight">CHARM BAR</a>
                <a href="cart">
                    <ShoppingCartSimpleIcon size={24} />
                </a>
            </header>
            <main className="grow overflow-y-auto">
                {children}
            </main>
            <footer className="sticky bottom-0 inset-x-0 grid grid-cols-2 inset-shadow-sm bg-light">
                <Link href="/" className={`py-2 text-sm justify-items-center ${selectedIndex === 0 && 'text-light bg-brand'}`}>
                    <StorefrontIcon size={24} />
                    Jewelries
                </Link>
                <Link href="/profile" className={`py-2 text-sm justify-items-center ${selectedIndex === 1 && 'text-light bg-brand'}`}>
                    <UserCircleIcon size={24} />
                    Profile
                </Link>
            </footer>
        </div>
    )
}