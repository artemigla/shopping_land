"use client";
import React, { useEffect } from "react";
import { fetchProducts } from "@/lib/features/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";

export default function Products() {
  const dispatch = useAppDispatch();
  const { productSelector, loading, error } = useAppSelector(
    (state) => state?.productStore,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error}</div>;
  }

  return (
    <>
      <h1 className="mb-4 text-xl font-semibold">All products</h1>
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {productSelector?.map(({ id, thumbnail, title, price }) => (
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
            <p className="font-semibold text-blue-600">${price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
