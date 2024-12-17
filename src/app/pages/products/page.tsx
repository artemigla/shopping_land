"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/app/components/api/api";

// import { IProducts } from "@/app/components/interfaces/Interfaces";

export default function Products() {
  const [products, setProducts] = useState([]);
  // const [loadind, setLoading] = useState<boolean>(true);

  try {
    useEffect(() => {
      const getPost = async () => {
        await axios
          .get(`${BASE_URL}/products`)
          .then((res) => res?.data)
          .then((res) => setProducts(res?.products));
        // setLoading(false);
      };
      getPost();
    }, []);
  } catch (error) {
    console.log(error);
  }

  console.log(products);

  return (
    <div>
      {/* <div>
        <div>
          {products.map((item, index) => {
            return (
              <section key={index}>
                <Image
                  src={item?.images}
                  alt="img"
                  loading="lazy"
                  width={120}
                  height={120}
                />
                <span>{item?.title}</span>
              </section>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
