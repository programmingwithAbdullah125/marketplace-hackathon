
import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"; // Ensure you import the Image component


interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            _type,
            image,
            price,
            desciption
        }`, { slug }
    );
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);
    return (
        <div className="max-w-7xl mx-auto px-4 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={450}
                            height={450}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className=" flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">
                        {product.name}
                        </h1>
                    <p className="text-2xl font-sans">
                        Price:{product.price}
                    </p>
                     <p className="text-gray-500 ">
                        {product.description}
                     </p>
                </div>
            </div>
        </div>
    );
}

