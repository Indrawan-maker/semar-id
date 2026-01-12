import Nav from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PaketHarga } from "@/components/PaketHarga";
import { Portfolio } from "@/components/Portfolio";
import { Customer } from "@/components/Customer";
import { AlurKerja } from "@/components/AlurKerja";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <Nav />
      <Hero />
      <PaketHarga />
      <Portfolio />
      <AlurKerja />
      <Customer />
      <Footer />
    </>
  );
}
