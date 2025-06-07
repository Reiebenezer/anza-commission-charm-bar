'use client'

import ProductCardSmall from "@/lib/product-card-small";
import PlaceholderImage from '@/lib/placeholder.jpg';

import Image from "next/image";

export default function Profile() {
    return (
        <div className="px-6 py-12 flex flex-col gap-4">
            <Image src={PlaceholderImage} alt="Angel Palma" className="size-32 rounded-full bg-gray-400" />
            <div>
                <h1 className="text-2xl/tight font-bold">Angel Palma</h1>
                <p className="opacity-50 text-sm">REGULAR CUSTOMER</p>
            </div>
            <div className="my-4 flex flex-col gap-4">
                <h2 className="text-base">Recent Purchases</h2>

                <div className="grid gap-4">
                    {Array.from({ length: 4 }, (_, i) => (
                        <ProductCardSmall key={`product-card-small-${i}`} image={PlaceholderImage} name="Lorem Ipsum dolor sit amet" price={59.95} rating={4.2} ratingCount={20} />
                    ))}
                </div>
            </div>
        </div>
    );
}