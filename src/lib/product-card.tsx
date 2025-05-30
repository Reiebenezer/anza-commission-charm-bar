import { StarIcon } from "@phosphor-icons/react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
    image: string | StaticImageData;
    name: string;
    price: number;
    rating: number;
    ratingCount: number;
}

export default function ProductCard({ image, name, price, rating, ratingCount } : ProductCardProps ) {
    return (
        <div className="flex flex-col gap-3">
            <Image src={image} alt={`Image of ${name}`} className="aspect-square rounded-lg object-cover" />
            <h5 className="text-sm/tight">{name}</h5>
            <h4 className="font-bold text-base">&#x20B1;{price}</h4>

            <div className="flex gap-2 items-center">
                <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                        <StarIcon key={`star-${index}`} weight={Math.floor(rating) > index ? 'fill' : 'regular'} className="size-3 text-accent-light" />
                    ))}
                </div>
                
                <small className="text-xs font-medium">{rating}</small>
                <small className="text-xs font-medium opacity-50">({ratingCount})</small>
            </div>
        </div>
    )
}