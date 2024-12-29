"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/interfaces/Interface";
import { BASE_URL } from "../api/api";
import Image from "next/image";

export default function Categories() {
  const [categories, setCategories] = useState<
    { slug: string; name: string }[]
  >([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProductsByCategory = async (category: string) => {
    if (typeof category !== "string") {
      console.error("Invalid category:", category);
      return;
    }
    setLoading(true);
    setActiveCategory(category);
    try {
      const response = await fetch(`${BASE_URL}/products/category/${category}`);
      const data = await response.json();
      setProducts(data?.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllProducts = async () => {
    try {
      await fetch(`${BASE_URL}/products`)
        .then((response) => response.json())
        .then((response) => setAllProducts(response.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Categories</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {categories.map(({ slug, name }) => (
          <button
            key={name}
            onClick={() => fetchProductsByCategory(slug)}
            className={`rounded-lg px-4 py-2 text-white ${activeCategory === name ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-500"}`}
          >
            {slug}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {loading ? (
          <p>Loading products...</p>
        ) : activeCategory ? (
          <div>
            <h2 className="mb-4 text-xl font-semibold">{`Products in ${activeCategory}`}</h2>
            <div className="lg:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {products?.map((product) => (
                <div
                  key={product?.id}
                  className="rounded-lg border p-4 shadow-sm hover:shadow-md"
                >
                  <Image
                    width={120}
                    height={120}
                    src={product?.thumbnail || ""}
                    alt={product?.title || ""}
                    className="mb-4 h-32 w-full rounded object-contain"
                  />
                  <h3 className="text-lg font-bold">{product?.title}</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    {product?.description
                      ? product?.description.slice(0, 60)
                      : ""}
                  </p>
                  <p className="font-semibold text-blue-600">
                    ${product?.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="lg:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allProducts?.map(
              ({ id, thumbnail, title, description, price }) => (
                <div
                  key={id}
                  className="rounded-lg border p-4 shadow-sm hover:shadow-md"
                >
                  <Image
                    width={120}
                    height={120}
                    src={thumbnail || ""}
                    alt={title || ""}
                    className="mb-4 h-32 w-full rounded object-contain"
                  />
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mb-2 text-sm text-gray-600">
                    {description ? description.slice(0, 60) : ""}
                  </p>
                  <p className="font-semibold text-blue-600">${price}</p>
                </div>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
