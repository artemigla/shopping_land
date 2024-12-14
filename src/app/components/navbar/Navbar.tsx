import React from "react";
import Link from "next/link";

const list = ["products", "carts", "reciper", "posts"];
export default function Navbar() {
  return (
    <nav className="w-[60%] flex-row justify-between hidden md:flex">
      <Link href={"/"} className="text-white font-medium uppercase">
        HOME
      </Link>
      <div>
        <select
          name="Catalog"
          id=""
          className="bg-transparent text-white font-medium uppercase"
        >
          <option value="">Catalog</option>
        </select>
      </div>
      {list.map((item, index) => (
        <Link key={index} href={{ pathname: `/pages/${item}` }}>
          <ul className="flex flex-row">
            <li className="text-white font-medium uppercase">{item}</li>
          </ul>
        </Link>
      ))}
    </nav>
  );
}
