"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/lib/features/slices/allProductsSlice";
import { fetchSearchProducts } from "@/lib/features/slices/searchProducts";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Products() {
  const dispatch = useAppDispatch();

  const { productSelector, loading, error } = useAppSelector(
    (state) => state?.productStore,
  );
  const { productsSearch } = useAppSelector((state) => state?.searchStore);
  const { productsCategories, activeCategory } = useAppSelector(
    (state) => state?.categoriesStore,
  );

  useEffect(() => {
    dispatch(fetchSearchProducts(""));
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка: {error}</div>;

  const headerText = activeCategory
    ? `Products in "${activeCategory}"`
    : "All Products";

  const productsToShow =
    productsSearch.length > 0 ? productsSearch : productSelector;
  const showCategories = activeCategory && productsCategories.length > 0;

  return (
    <div className="ml-auto mr-auto desktop:w-[1280px]">
      <h1 className="mb-4 text-xl font-semibold">{headerText}</h1>

      {showCategories ? (
        <div className="lg:grid-cols-3 grid grid-cols-2 gap-4 max-sm:grid-cols-2">
          {productsCategories.map(({ id, thumbnail, title, price }) => (
            <Link
              href={`/details/${id}`}
              key={id}
              className="rounded-lg border p-4 shadow-sm hover:shadow-md"
            >
              <Image
                width={120}
                height={120}
                src={thumbnail || "/placeholder.jpg"}
                alt={title || "Product Image"}
                className="mb-4 h-32 w-full rounded object-contain"
              />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="font-semibold text-blue-600">${price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="lg:grid-cols-3 grid grid-cols-2 gap-4 max-sm:grid-cols-2">
          {productsToShow.map(({ id, thumbnail, title, price }) => (
            <Link
              href={`/details/${id}`}
              key={id}
              className="rounded-lg border p-4 shadow-sm hover:shadow-md"
            >
              <Image
                width={120}
                height={120}
                src={thumbnail || "/placeholder.jpg"}
                alt={title || "Product Image"}
                className="mb-4 h-32 w-full rounded object-contain"
              />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="font-semibold text-blue-600">${price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
