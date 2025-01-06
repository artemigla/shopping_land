"use client";

import React, { useState, KeyboardEvent, useRef, useEffect } from "react";
import Input from "../input/Input";
import { fetchSearchProducts } from "@/lib/features/slices/searchProducts";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Navigation from "../menuNavigation/Navigation";
import Link from "next/link";

import {
  fetchCategories,
  fetchProductsByCategory,
  setActiveCategory,
} from "@/lib/features/slices/categoriesSlice";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [isOpenCategories, setIsOpenCategories] = useState<boolean>(false);
  const modalRef = useRef<HTMLSpanElement | null>(null);
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state?.categoriesStore);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpenCategories(false);
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    dispatch(fetchProductsByCategory(category));
    dispatch(setActiveCategory(category));
  };

  const changeMenu = () => {
    setIsOpenMobileMenu((prev: boolean) => !prev);
  };
  const openCategories = () => {
    setIsOpenCategories((prev: boolean) => !prev);
  };
  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(fetchSearchProducts(searchQuery));
    }
    setSearchQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      handleSearch();
    }
  };

  return (
    <header className="relative ml-auto mr-auto flex h-20 w-full items-center justify-center border-b-[1px] border-b-gray-300 max-tablet:rounded-b-md tablet:h-[129px]">
      <div className="relative grid h-[46px] w-[1280px] grid-cols-[1fr_2fr_1fr] decoration-transparent max-laptop:grid-cols-2 max-tablet:h-auto max-tablet:grid-cols-1">
        <div className="relative flex min-w-32 items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-xl font-bold text-transparent max-tablet:mt-auto max-tablet:justify-center max-tablet:text-sm">
          <p className="max-tablet:mb-1">SHOPPING LAND</p>
        </div>
        <div className="relative flex w-[90%] items-center justify-center max-laptop:right-7 max-tablet:left-4 max-tablet:right-0 max-tablet:mb-0 max-tablet:h-12 max-tablet:w-[80%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.85-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex w-full items-center tablet:h-9">
            <Input
              type="search"
              value={searchQuery}
              placeholder="Search..."
              onInput={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className={
                "w-full rounded-lg border border-gray-300 bg-[#dedede] py-1 pl-10 outline-none max-laptop:mr-[5%]"
              }
            />
          </div>
        </div>
        <Navigation />
        {isOpenMobileMenu ? (
          <div
            onClick={changeMenu}
            className="absolute right-1 top-1 hidden max-laptop:flex max-tablet:translate-y-[80%] max-tablet:items-center"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
        ) : (
          <div
            onClick={changeMenu}
            className="absolute right-1 top-1 hidden max-laptop:flex max-tablet:translate-y-[80%]"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        )}
        {isOpenMobileMenu ? (
          <div className="absolute right-0 top-[4.7rem] z-30 h-auto w-[50%] bg-slate-800 p-1 tablet:top-[5.5rem] tablet:w-[25%] laptop:hidden">
            <ul className="flex flex-col gap-2 text-white">
              <Link href={""} className="ml-1 flex flex-row">
                <svg
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-icons"
                >
                  <path
                    d="M21 23V20.6667C21 19.429 20.4732 18.242 19.5355 17.3668C18.5979 16.4917 17.3261 16 16 16H6C4.67392 16 3.40215 16.4917 2.46447 17.3668C1.52678 18.242 1 19.429 1 20.6667V23"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 11C13.2614 11 15.5 8.76142 15.5 6C15.5 3.23858 13.2614 1 10.5 1C7.73858 1 5.5 3.23858 5.5 6C5.5 8.76142 7.73858 11 10.5 11Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-1 text-[14px] font-light text-white">
                  Профиль
                </p>
              </Link>
              <Link href={""}>
                <div
                  onClick={handleClickOutside}
                  className={`md:left-[-176px] absolute z-50 flex flex-col bg-slate-800 text-sm ss:left-[-123px] ss:w-[-178px] sm:w-44 laptop:left-[-240px] ${isOpenCategories ? "flex" : "hidden"}`}
                >
                  {categories?.map(({ name, slug }) => (
                    <span
                      key={slug}
                      ref={modalRef}
                      className="gap-2"
                      onClick={() => handleCategoryClick(name)}
                    >
                      {name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row" onClick={openCategories}>
                  <svg
                    viewBox="0 0 27 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-icons"
                  >
                    <rect x="0.5" width="2" height="2" rx="1" fill="#FFFFFF" />
                    <rect x="6.5" width="20" height="2" rx="1" fill="#FFFFFF" />
                    <rect
                      x="0.5"
                      y="8"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="6.5"
                      y="8"
                      width="20"
                      height="2"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="0.5"
                      y="16"
                      width="2"
                      height="2"
                      rx="1"
                      fill="#FFFFFF"
                    />
                    <rect
                      x="6.5"
                      y="16"
                      width="20"
                      height="2"
                      rx="1"
                      fill="#FFFFFF"
                    />
                  </svg>

                  <p className={`ml-1`}>Каталог</p>
                </div>
              </Link>
              <Link href={""} className="ml-1 flex flex-row">
                <svg
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-icons"
                >
                  <path
                    d="M9.5 22C10.0523 22 10.5 21.5523 10.5 21C10.5 20.4477 10.0523 20 9.5 20C8.94772 20 8.5 20.4477 8.5 21C8.5 21.5523 8.94772 22 9.5 22Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 22C20.0523 22 20.5 21.5523 20.5 21C20.5 20.4477 20.0523 20 19.5 20C18.9477 20 18.5 20.4477 18.5 21C18.5 21.5523 18.9477 22 19.5 22Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.5 1H5.5L8.18 15.2823C8.27144 15.7734 8.52191 16.2145 8.88755 16.5285C9.25318 16.8424 9.7107 17.0092 10.18 16.9996H19.9C20.3693 17.0092 20.8268 16.8424 21.1925 16.5285C21.5581 16.2145 21.8086 15.7734 21.9 15.2823L23.5 6.3332H6.5"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="ml-1 text-[14px] font-light text-white">
                  Корзина
                </p>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
