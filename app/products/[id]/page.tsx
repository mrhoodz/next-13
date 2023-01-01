import React from "react";
import axios from "axios";

async function getProduct(id: number) {
  interface productProps {
    title: string;
    description: string;
    price: number;
  }

  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data as productProps;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default async function page({ params }: any) {
  const products = await getProduct(params.id);
  const data = products;
  //   console.log(data);

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <small>{data?.price}</small>
    </>
  );
}
