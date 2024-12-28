"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BASE_URL } from "../api/api";
import { Product } from "@/app/interfaces/Interface";

export default function Banner() {
  const [state, setState] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function getApi() {
    try {
      await fetch(`${BASE_URL}/products`)
        .then((response) => response.json())
        .then((res) => setState(res?.products));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? state.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === state.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative ml-auto mr-auto mt-10 h-[260px] w-[1280px] overflow-hidden rounded-xl border border-solid">
      {state?.length > 0 && (
        <div
          className="flex h-[260px] w-[1280px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {state?.map(({ id, thumbnail }) => (
            <div key={id} className="h-[260px] w-full flex-shrink-0">
              <Image
                src={thumbnail ?? "https://via.placeholder.com/1280x260"}
                alt={`Product ${id}`}
                width={1280}
                height={260}
                className="h-[260px] w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}
      <span
        onClick={handlePrev}
        className="absolute left-10 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer px-4 py-2"
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-1"
            y="1"
            width="50"
            height="50"
            rx="25"
            transform="matrix(-1 0 0 1 50 0)"
            stroke="#C1C1C1"
            strokeWidth="2"
          />
          <path
            d="M32 16L20.9418 24.7544C20.4519 25.1423 20.4337 25.8795 20.904 26.291L32 36"
            stroke="#C1C1C1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        onClick={handleNext}
        className="absolute right-10 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer px-4 py-2"
      >
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="50"
            height="50"
            rx="25"
            stroke="#C1C1C1"
            strokeWidth="2"
          />
          <path
            d="M20 16L31.0582 24.7544C31.5481 25.1423 31.5663 25.8795 31.096 26.291L20 36"
            stroke="#C1C1C1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}
