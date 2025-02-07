import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const four = groq`*[_type == "product"][0..3]`;

// groq query for slug

// const query = groq`*[_type == "product"]{
//     _id,
//     name,
//     slug { // Slug ko explicitly fetch karo
//       current
//     },
//     image,
//     price
//   }`;