"use client";
import React from "react";

const list = ["Products", "Carts", "Reciper"];

export default function Header() {
  return (
    <header className="grid grid-cols-2 w-full h-24 bg-slate-800">
      <div className="w-2/6 flex items-center">
        <h3 className="font-medium text-white ml-2">SHOPPING LAND</h3>
      </div>
      <div className="flex items-center w-full">
        <nav className="w-[50%] flex flex-row justify-between">
          {list.map((item, index) => (
            <ul key={index} className="flex flex-row">
              <li className="text-white font-medium uppercase">{item}</li>
            </ul>
          ))}
        </nav>
      </div>
    </header>
  );
}
