// "use client"
// import Image from "next/image"
// import React,  { useEffect, useState } from "react"
// import client from "../sanity/lib/client"
// import { allProducts } from "@/sanity/lib/queries" // if we need only four product so add four in this 
// import { urlFor } from "@/sanity/lib/image"
// import Link from "next/link"
// import { Product } from "../../types/products"
// import { addToCart } from "@/app/actions/action"
// import Swal from 'sweetalert2';

// const Products = () => {
//     const [product, setProduct] = useState<Product[]>([])
//     useEffect(() => {
//         async function fetchproduct() {
//             const fetchedProduct : Product[] = await client.fetch(allProducts)
//             setProduct(fetchedProduct)
//         }
//         fetchproduct()
//     },[]);

//     // to handle add to cart functionality
//     const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//         e.preventDefault()
//         Swal.fire({
//             position:"center",
//             icon: "success",
//             title : `${product.name} added to cart`,
//             showConfirmButton: false,
//             timer : 1000,
//         })
//         addToCart(product)

//     }

//   return (
   
//     <div className="max-x-6xl mx-auto px-4 py-8">
//         <h1 className=" text-2xl font-bold mb-6 text-center">Our Latest Product</h1>
//         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//         {product.map((product) => (
//             <div
//              key={product._id}
//              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//              >
//                 <Link href={`/product/${product.slug.current}`}>
//                 {product.image && (
//                     <Image
//                         src={urlFor(product.image).url()}
//                         width={200}
//                         height={500}
//                         className="w-full h-48 object-cover rounded-md"
//                         alt="image"/>

//                 )}
//                 <h2 className="text-lg font-semibold mt-4">{product.name } </h2>
//                <p className="text-gray-500 mt-2">
//                  {product.price ? `${product.price}` : "price not available"}
//                </p>
//                <button className="bg-gradient-to-r from-blue-500 to bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg  hover: shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
//                 onClick={(e) => handleAddToCart(e, product)}>
//                     Add to cart
//              </button>
//                </Link>
//             </div>

//         ))}
//             </div>
//         </div>   
//   )
// }

// export default Products

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import client from "../sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Product } from "../../types/products";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";

const Products = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);

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

  return (
    <div className="max-x-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  width={200}
                  height={500}
                  className="w-full h-48 object-cover rounded-md"
                  alt="image"
                />
              )}
              <h2 className="text-lg font-semibold mt-4">{product.name} </h2>
              <p className="text-gray-500 mt-2">
                {product.price ? `${product.price}` : "price not available"}
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;