"use client"
import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"; // Ensure you import the Image component
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";


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

// additional functionality to manage add to cart button 

  // to handle add to cart functionality
  const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    await Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

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
                     <button
                className="bg-gradient-to-r from-blue-500 to bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart
              </button>
                </div>
            </div>
        </div>
    );
}

