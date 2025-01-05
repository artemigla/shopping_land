"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Categories from "../categories/Categories";

export default function Navigation() {
  const [isOpenCatalog, setIsOpenCatalog] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handlerButton = () => {
    setIsOpenCatalog((prev) => !prev);
  };

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpenCatalog(false);
    }
  };

  return (
    <nav className="ml-auto flex w-[80%] items-end justify-between max-laptop:hidden">
      <span
        onClick={handlerButton}
        className="flex cursor-pointer flex-col items-center justify-center"
      >
        <svg
          viewBox="0 0 27 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-icons"
        >
          <rect x="0.5" width="2" height="2" rx="1" fill="#454545" />
          <rect x="6.5" width="20" height="2" rx="1" fill="#454545" />
          <rect x="0.5" y="8" width="2" height="2" rx="1" fill="#454545" />
          <rect x="6.5" y="8" width="20" height="2" rx="1" fill="#454545" />
          <rect x="0.5" y="16" width="2" height="2" rx="1" fill="#454545" />
          <rect x="6.5" y="16" width="20" height="2" rx="1" fill="#454545" />
        </svg>
        <p className="text-[14px] font-light text-[#454545]">Каталог</p>
        {isOpenCatalog && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleClickOutside}
          >
            <div
              ref={modalRef}
              className="w-[95%] rounded-lg bg-white p-6 shadow-lg"
            >
              <button
                onClick={handleClickOutside}
                className="relative ml-auto mt-0 flex rounded bg-red-500 px-4 py-2 font-bold text-white"
              >
                X
              </button>
              <h1 className="mb-4 text-2xl font-bold">Categories</h1>
              <Categories />
            </div>
          </div>
        )}
      </span>
      <Link href={""} className="flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 25 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-icons"
        >
          <path
            d="M9.5 22C10.0523 22 10.5 21.5523 10.5 21C10.5 20.4477 10.0523 20 9.5 20C8.94772 20 8.5 20.4477 8.5 21C8.5 21.5523 8.94772 22 9.5 22Z"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 22C20.0523 22 20.5 21.5523 20.5 21C20.5 20.4477 20.0523 20 19.5 20C18.9477 20 18.5 20.4477 18.5 21C18.5 21.5523 18.9477 22 19.5 22Z"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 1H5.5L8.18 15.2823C8.27144 15.7734 8.52191 16.2145 8.88755 16.5285C9.25318 16.8424 9.7107 17.0092 10.18 16.9996H19.9C20.3693 17.0092 20.8268 16.8424 21.1925 16.5285C21.5581 16.2145 21.8086 15.7734 21.9 15.2823L23.5 6.3332H6.5"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[14px] font-light text-[#454545]">Корзина</p>
      </Link>
      <Link href={""} className="flex flex-col items-center justify-center">
        <svg
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-icons"
        >
          <path
            d="M21 23V20.6667C21 19.429 20.4732 18.242 19.5355 17.3668C18.5979 16.4917 17.3261 16 16 16H6C4.67392 16 3.40215 16.4917 2.46447 17.3668C1.52678 18.242 1 19.429 1 20.6667V23"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 11C13.2614 11 15.5 8.76142 15.5 6C15.5 3.23858 13.2614 1 10.5 1C7.73858 1 5.5 3.23858 5.5 6C5.5 8.76142 7.73858 11 10.5 11Z"
            stroke="#454545"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[14px] font-light text-[#454545]">Профиль</p>
      </Link>
    </nav>
  );
}
