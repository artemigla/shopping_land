import React from "react";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { closeMenu } from "@/redux/store/menuSlice";

const list = ["products", "carts"];

export default function Navbar() {
  const dispatch = useAppDispatch();

  return (
    <>
      {
        <nav className="flex w-[50%] flex-row items-center justify-around text-responsive">
          <Link href={"/"} className="ml-2 font-medium uppercase text-white">
            HOME
          </Link>
          <div>
            <select
              name="Catalog"
              id=""
              className="ml-1 bg-transparent font-medium uppercase text-white"
            >
              <option value="">Catalog</option>
            </select>
          </div>
          {list.map((item, index) => (
            <Link key={index} href={{ pathname: `/pages/${item}` }}>
              <ul className={`ml-2 flex flex-row`}>
                <li
                  className="font-medium uppercase text-white"
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
