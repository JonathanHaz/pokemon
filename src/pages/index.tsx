import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import First from "../components/First";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const currentDateTime = new Date().toLocaleString();
  
  return (
    <>
     <Head>
        <title>PokeCard</title>
        <meta name="description" content="Gotta collect 'em all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <div className={styles.container}>
      <First/>
      <Footer/>
      </div>
    </>
  );
}
