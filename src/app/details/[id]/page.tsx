"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BASE_URL } from "@/app/components/api/api";
import { Product } from "@/app/interfaces/Interface";

export default function ProductDetails({
  params,
}: {
  params: Promise<Product>;
}) {
  const [state, setState] = useState<Product | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const { id } = await params;
      try {
        const response = await fetch(`${BASE_URL}/product/${id}`);
        const data = await response.json();
        setState(data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="ml-auto mr-auto w-[90%]">
      <div className="grid-[1fr 3fr] grid grid-cols-3">
        <div className="ml-auto mr-auto">
          {state ? (
            <Image
              src={
                Array.isArray(state.images)
                  ? state.images[0]
                  : state?.images || "/placeholder.png"
              }
              alt={state?.title || ""}
              width={320}
              height={300}
              className="w-auto"
            />
          ) : (
            "Loading..."
          )}
        </div>
        <div className="mt-3">
          <div className="font-bold">{state?.title}</div>
          <p>{state?.brand}</p>
          <p>{state?.category}</p>
          <p>{state?.warrantyInformation}</p>
          <p>{state?.rating}</p>
          <p className="mt-3">{state?.description}</p>
        </div>
      </div>
    </div>
  );
}
