"use client";
import React, { useEffect } from "react";
import { fetchProducts } from "@/lib/features/slices/allProductsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { fetchSearchProducts } from "@/lib/features/slices/searchProducts";
import Link from "next/link";

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
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error}</div>;
  }

  const headerText = activeCategory
    ? `Search results for`
    : activeCategory
      ? `Products in "${activeCategory}"`
      : "All products";

  return (
    <>
      {productsCategories.length > 0 ? (
        <div>
          <h2 className="mb-4 text-xl font-semibold">{`Products in ${activeCategory}`}</h2>
          <div className="lg:grid-cols-3 grid gap-4 max-sm:grid-cols-2 ss:grid-cols-2 desktop:grid-cols-3">
            {productsCategories?.map((product) => (
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
                <p className="font-semibold text-blue-600">${product?.price}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="ml-auto mr-auto desktop:w-[1280px]">
          <h1 className="mb-4 text-xl font-semibold">{headerText}</h1>
          <div className="lg:grid-cols-3 ml-auto mr-auto grid grid-cols-1 gap-4 max-laptop:w-[90%] max-sm:w-[90%] ss:grid-cols-2 sm:grid-cols-2">
            {productSelector.length > 0 ? (
              <>
                {productsSearch?.map(({ id, thumbnail, title, price }) => (
                  <Link
                    href={`details/${id}`}
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
                    <h3 className="text-lg font-bold max-small:text-sm max-xs:text-xs">
                      {title}
                    </h3>
                    <p className="font-semibold text-blue-600 max-small:text-sm max-xs:text-xs">
                      ${price}
                    </p>
                  </Link>
                ))}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
