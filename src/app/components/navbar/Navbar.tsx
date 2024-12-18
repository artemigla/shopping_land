import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { closeMenu } from "@/redux/store/menuSlice";

const list = ["products", "carts"];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector((selector) => selector.theme);

  return (
    <>
      {
        <nav className="flex w-[50%] flex-row items-center justify-around text-responsive">
          <Link
            href={"/"}
            className={`ml-2 transform font-medium uppercase duration-500 ${isDark ? "text-white" : "text-black"}`}
          >
            HOME
          </Link>
          <div>
            <select
              name="Catalog"
              id=""
              className={`ml-1 transform bg-transparent font-medium uppercase duration-500 ${isDark ? "text-white" : "text-black"}`}
            >
              <option value="">Catalog</option>
            </select>
          </div>
          {list.map((item, index) => (
            <Link key={index} href={{ pathname: `/pages/${item}` }}>
              <ul className={`ml-2 flex flex-row`}>
                <li
                  className={`transform font-medium uppercase duration-500 ${isDark ? "text-white" : "text-black"}`}
                  onClick={() => dispatch(closeMenu())}
                >
                  {item}
                </li>
              </ul>
            </Link>
          ))}
        </nav>
      }
    </>
  );
}
