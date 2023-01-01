import React from "react";
import Head from "next/head";

async function getProduct(id: any) {
  // const response = await fetch("https://dummyjson.com/products", {
  //   cache: "no-store",
  // });

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  const data = await response.json();
  return data;
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
