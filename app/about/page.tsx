import React from "react";
import Components from "./(components)";

async function getProduct() {
  interface productProps {
    title: string;
    description: string;
    price: number;
  }

  try {
    const response = await fetch("https://dummyjson.com/products/1");
    const data = await response.json();
    return data as productProps;
    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default async function page() {
  const products = await getProduct();
  console.log(products);

  return <Components />;
}
