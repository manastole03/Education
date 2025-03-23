import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import Service from "@/components/Home/service";
import Reviews from "@/components/Home/Reviews";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Beyond Borders",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Service />
      <Reviews />
      <Newsletter />
    </main>
  );
}
