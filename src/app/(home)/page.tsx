'use client'

import ProductCard from "@/lib/product-card"
import PlaceholderImage from '@/lib/placeholder.jpg';
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Image src={PlaceholderImage} alt="New Product Image" className="fixed inset-0 h-screen -z-10 object-cover brightness-50" />
      <div className="px-6 py-4 flex flex-col items-start justify-end gap-4 min-h-[50vh]">
        <h1 className="text-4xl font-bold text-light">New Product Release</h1>
        <button>Buy Now</button>
      </div>

      <div className="rounded-t-2xl px-6 py-4 flex flex-col gap-6 bg-light">
        <h2 className="text-2xl font-semibold">What's New</h2>

        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <ProductCard key={`product-card-${i}`} image={PlaceholderImage} name="Lorem Ipsum dolor sit amet" price={59.95} rating={4.2} ratingCount={20} />
          ))}
        </div>
      </div>
    </>
  )
}