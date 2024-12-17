import React from "react";
import Link from "next/link";

const list: string[] = ["products", "carts"];

export default function Navbar() {
  return (
    <nav className="w-[50%] flex flex-row text-responsive items-center justify-around">
      <Link href={"/"} className="text-white ml-2 font-medium uppercase">
        HOME
      </Link>
      <div >
        <select
          name="Catalog"
          id=""
          className="bg-transparent ml-1 text-white font-medium uppercase"
        >
          <option value="">Catalog</option>
        </select>
      </div>
      {list.map((item, index) => (
        <Link key={index} href={{ pathname: `/pages/${item}` }}>
          <ul className="flex flex-row ml-2">
            <li className="text-white font-medium uppercase">{item}</li>
          </ul>
        </Link>
      ))}
    </nav>
  );
}
