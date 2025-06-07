import { StarIcon } from "@phosphor-icons/react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
    image: string | StaticImageData;
    name: string;
    price: number;
    rating: number;
    ratingCount: number;
}

export default function ProductCardSmall({ image, name, price, rating, ratingCount }: ProductCardProps) {
    return (
        <div className="rounded-lg p-2 flex gap-4 shadow-sm items-center">
            <Image src={image} alt={`Image of ${name}`} className="aspect-square rounded-lg object-cover size-16" />

            <div className="grow">
                <h5 className="font-bold text-sm/tight">{name}</h5>
                <div className="flex gap-2 items-center mt-0.5">
                    <div className="flex">
                        {Array.from({ length: 5 }, (_, index) => (
                            <StarIcon key={`star-${index}`} weight={Math.floor(rating) > index ? 'fill' : 'regular'} className="size-3 text-accent-light" />
                        ))}
                    </div>

                    <small className="text-xs font-medium">{rating}</small>
                    <small className="text-xs font-medium opacity-50">({ratingCount})</small>
                </div>
            </div>

            <h4 className="font-bold text-base mt-1 mr-2">&#x20B1;{price}</h4>
        </div>
    )
}