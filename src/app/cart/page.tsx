'use client'

import ProductCardSmall from "@/lib/product-card-small";
import PlaceholderImage from '@/lib/placeholder.jpg';

import { XIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation"

export default function Cart() {
    const router = useRouter();

    return (
        <div className="fixed inset-0 flex flex-col">
            <div className="bg-accent-light p-6 text-light">
                <div className="flex items-center gap-2">
                    <button onClick={() => router.back()} className="aspect-1 bg-transparent p-1">
                        <XIcon size={24} />
                    </button>
                    <span className="font-bold text-xl">CART</span>
                </div>
                <div className="mt-12">
                    <span className="text-sm">TOTAL FEES</span>
                    <h1 className="text-4xl font-bold font-title">&#x20B1;12,450.00</h1>
                </div>
            </div>

            <div className="grow p-6">
                <p>Your order</p>
                <div className="grid gap-4">
                    {Array.from({ length: 4 }, (_, i) => (
                        <ProductCardSmall key={`product-card-small-${i}`} image={PlaceholderImage} name="Lorem Ipsum dolor sit amet" price={59.95} rating={4.2} ratingCount={20} />
                    ))}
                </div>
            </div>

            <button className="m-6">Place Order</button>
        </div>
    )
}