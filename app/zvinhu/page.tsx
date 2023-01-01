import React from "react";
import Components from "./(components)";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
// import "../../pages/api/dummy.ts"

async function getProduct() {
  // const response = await fetch("https://dummyjson.com/products", {
  //   cache: "no-store",
  // });

  const response = await axios.get("http://localhost:3000/api/dummy");

  // const response = await axios.post("http://localhost:3000/api/dummy", {
  //   slug: "all",
  // });

  const data = await response.data;
  return data;
}

export default async function page() {
  const products = await getProduct();
  const data = products.products;
  // console.log(data);

  // data?.map((item: any) => {console.log(item.title)}  )
  // products?.map((item: any) => {console.log(item.title)}  )

  return (
    <>
   
      <h1>All Products</h1>
      1234
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
