"use client";
import React from "react";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import ProductDetails from "../app/details/[id]/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products />
      <ProductDetails params={{ id: "" }} />
    </div>
  );
}
