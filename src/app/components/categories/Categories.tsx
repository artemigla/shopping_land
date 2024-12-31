"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Products from "../products/Products";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchCategories,
  fetchProductsByCategory,
  setActiveCategory,
} from "@/lib/features/slices/categoriesSlice";

export default function Categories() {
  const { categories, activeCategory, error, loading, products } =
    useAppSelector((state) => state?.categoriesStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    dispatch(fetchProductsByCategory(category));
    dispatch(setActiveCategory(category));
  };

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error}</div>;
  }

  if (!categories || categories.length === 0) {
    return <div>Категорії не знайдено.</div>;
  }

  return (
    <div className="ml-auto mr-auto desktop:w-[1280px]">
      <h1 className="mb-4 text-2xl font-bold">Categories</h1>
      <div className="m-0 space-x-4 space-y-4 max-tablet:grid-cols-3 laptop:grid-cols-5 desktop:grid-cols-10">
        {categories?.map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category?.slug)}
            className="rounded-lg bg-purple-400 p-3 text-white"
          >
            <span className="truncate p-1 text-responsive">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        {loading ? (
          <p>Loading products...</p>
        ) : activeCategory ? (
          <div>
            <h2 className="mb-4 text-xl font-semibold">{`Products in ${activeCategory}`}</h2>
            <div className="lg:grid-cols-3 grid gap-4 max-sm:grid-cols-2 ss:grid-cols-2 desktop:grid-cols-3">
              {products?.map((product) => (
                <div
                  key={product?.id}
                  className="rounded-lg border p-4 shadow-sm hover:shadow-md"
                >
                  <Image
                    width={120}
                    height={120}
                    src={product?.thumbnail || "/placeholder.jpg"}
                    alt={product?.title || ""}
                    className="mb-4 h-32 w-full rounded object-contain"
                  />
                  <h3 className="text-lg font-bold">{product?.title}</h3>
                  <p className="font-semibold text-blue-600">
                    ${product?.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Products />
        )}
      </div>
    </div>
  );
}
