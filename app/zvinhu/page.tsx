import React from "react";
import Components from "./(components)";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

async function getProduct() {
  // const response = await fetch("https://dummyjson.com/products", {
  //   cache: "no-store",
  // });

  const res = await fetch("https://dummyjson.com/products?limit=10",{
    cache: "no-store",
  });

  const data = await  res.json();
  // console.log(data);
  return data as any;
}

export default async function page() {
  const products = await getProduct();
  const data = await products.products;
    // console.log(products);

    // console.log(products);

  return (
    <>
   
      <h1>All Products</h1>
      <ul>
        {data.map((item: any) => (
          <li key={Math.random()}>
            <Link href={`zvinhu/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
