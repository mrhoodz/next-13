import React from "react";
import Head from "next/head";

async function getProduct(id: number) {
  interface productProps {
    title: string;
    description: string;
    price: number;
  }

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const x: any = response.json();
    return x as productProps;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default async function page({ params }: any) {
  const products = await getProduct(params.id);
  const data = products;
  //   console.log(data);
  const title = data?.title;

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <small>{data?.price}</small>
    </>
  );
}
