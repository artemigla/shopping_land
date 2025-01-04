"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchCategories,
  fetchProductsByCategory,
  setActiveCategory,
} from "@/lib/features/slices/categoriesSlice";

export default function Categories() {
  const { categories, error, loading } = useAppSelector(
    (state) => state?.categoriesStore,
  );
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
      <div className="m-0 space-x-4 space-y-4 max-tablet:grid-cols-3 laptop:grid-cols-5 desktop:grid-cols-10">
        {categories?.map((category) => (
          <button
            key={category?.slug}
            onClick={() => handleCategoryClick(category?.slug)}
            className="rounded-lg bg-purple-400 p-1 text-white"
          >
            <span className="truncate p-1 text-responsive">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
