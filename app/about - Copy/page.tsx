import React from "react";
import Components from "./(components)";
import axios from "axios";

async function getProduct() {
  interface productProps {
    title: string;
    description: string;
    price: number;
  }

  try {
    const response = await axios.get("https://dummyjson.com/products/1");
    return response.data as productProps;
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default async function page() {
  const products = await getProduct();
  const data = products?.description
  console.log(data);

  return <Components />;
}
