import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  console.log("testing 1 2 3");

  return (
    <>
      <h1>Hello, Next.js!</h1>
      hey there still testing
    </>
  );
}
