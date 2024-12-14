"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="grid grid-cols-[25%,25%,50%] gap-4 w-full h-24 bg-slate-800">
      <div className="flex items-center ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          width={56}
          height={56}
          viewBox="0 0 512 487.17"
        >
          <path
            fill="#3E2E30"
            fillRule="nonzero"
            d="M12.29 460.94h11.39v-161.8c-4.82-1.46-9.48-4.17-13.35-7.76-5.59-5.19-9.65-12.33-10.3-20.35L0 270.5v-28.97c0-1.46.46-2.81 1.24-3.91l21.97-38.13c-4.57-1.39-7.91-5.65-7.91-10.66V172.4c0-4.86 3.2-9.04 7.58-10.54V46.78c-7.87-2.84-13.53-10.4-13.53-19.22v-7.15C9.35 9.19 18.53 0 29.76 0h452.5c11.23 0 20.42 9.2 20.42 20.41v7.15c0 8.81-5.67 16.37-13.54 19.21v115.09c4.39 1.5 7.58 5.68 7.58 10.54v16.43c0 6.07-4.9 11.03-10.94 11.14l25.12 39.86c.75 1.2 1.08 2.55 1.03 3.87l.07 49.85c0 3.73-3.02 6.75-6.75 6.75-6.01-.19-11.99-2.38-16.9-5.9v166.54h11.39c5.61 0 10.2 4.59 10.2 10.2v5.82c0 5.61-4.61 10.21-10.2 10.21H12.29c-5.62 0-10.21-4.59-10.21-10.21v-5.82c0-5.59 4.61-10.2 10.21-10.2z"
          />
          <path
            fill="#F8B88A"
            d="M482.41 293.75v167.19H29.61V300.29c.68.06 1.35.08 2.02.08 7.21 0 12.83-1.72 17.4-4.72 1.73-1.13 3.27-2.42 4.66-3.85 12.1 11.34 31.5 11.26 43.49-.2 12.07 11.53 31.63 11.53 43.7 0 12.06 11.53 31.64 11.53 43.7 0 12.06 11.53 31.61 11.53 43.68.02 12.87 12.37 34.19 11.31 45.81-2.14 11.36 13.15 32.05 14.48 45.01 2.88 12.07 10.05 32.12 10.42 43.74-.63 9.86 9.83 24.55 11.08 36.59 4.56.78-.42 1.55-.87 2.29-1.35.82.54 1.65 1.05 2.51 1.51 11.96 6.46 27.16 4.57 37.02-4.85 11.26 10.76 29.05 11.48 41.18 2.15z"
          />
          <path
            fill="#3E2E30"
            fillRule="nonzero"
            d="M333.58 299.2v161.74H178.45V296.15c2.19-1.24 4.25-2.75 6.13-4.55 12.06 11.53 31.61 11.53 43.68.02 12.87 12.37 34.19 11.31 45.81-2.14 11.36 13.15 32.05 14.48 45.01 2.88 4.12 3.43 9.17 5.73 14.5 6.84z"
          />
          <path
            fill="#BFE1EA"
            d="M327.64 297.41v163.53H184.38V291.78l.2-.18c12.06 11.53 31.61 11.53 43.68.02 12.87 12.37 34.19 11.31 45.81-2.14 11.36 13.15 32.05 14.48 45.01 2.88 2.55 2.12 5.46 3.81 8.56 5.05z"
          />
          <path
            fill="#689EAB"
            d="M258.98 460.94h-5.93V300.13c2-.18 3.99-.55 5.93-1.1v161.91z"
          />
          <path
            fill="#3E2E30"
            fillRule="nonzero"
            d="M67.34 324.59h67.33c3.11 0 5.63 2.53 5.63 5.64v99.14a5.63 5.63 0 01-5.63 5.63H67.34a5.63 5.63 0 01-5.63-5.63v-99.14c0-3.11 2.52-5.64 5.63-5.64z"
          />
          <path fill="#BFE1EA" d="M67.34 330.23h67.33v99.14H67.34z" />
          <path
            fill="#3E2E30"
            fillRule="nonzero"
            d="M377.36 324.59h67.32c3.11 0 5.64 2.53 5.64 5.64v99.14c0 3.11-2.53 5.63-5.64 5.63h-67.32a5.63 5.63 0 01-5.63-5.63v-99.14c0-3.11 2.52-5.64 5.63-5.64z"
          />
          <path fill="#BFE1EA" d="M377.36 330.23h67.32v99.14h-67.32z" />
          <path
            fill="#9CBFD3"
            d="M12.29 466.36h487.45c2.63 0 4.78 2.16 4.78 4.78v5.83c0 2.62-2.16 4.78-4.78 4.78H12.29c-2.63 0-4.79-2.16-4.79-4.78v-5.83c0-2.63 2.15-4.78 4.79-4.78z"
          />
          <path fill="#FAB888" d="M28.81 47.93h454.4v113.34H28.81z" />
          <path
            fill="#E6E6E6"
            d="M26.44 167.2h459.14c2.87 0 5.21 2.34 5.21 5.2v16.43c0 2.86-2.35 5.21-5.21 5.21H26.44c-2.86 0-5.2-2.34-5.2-5.21V172.4c0-2.86 2.34-5.2 5.2-5.2z"
          />
          <path
            fill="#F69173"
            d="M29.76 5.93h452.5c7.97 0 14.49 6.52 14.49 14.48v7.15c0 7.96-6.53 14.48-14.49 14.48H29.76c-7.96 0-14.48-6.51-14.48-14.48v-7.15c0-7.96 6.51-14.48 14.48-14.48z"
          />
          <path
            fill="#3E2E30"
            fillRule="nonzero"
            d="M137.37 130.34l2.51-14.74a9.213 9.213 0 012.18-4.61c-2.72-4.26-4.07-9.55-4.07-15.86 0-4.85.57-9.09 1.71-12.71l.18-.52c1.39-4.11 3.54-7.43 6.44-9.94 2.83-2.45 6.39-4.22 10.66-5.31 3.64-.93 7.88-1.39 12.71-1.39 8.81 0 16.85.85 24.12 2.55.6.14 1.18.34 1.73.58a9.33 9.33 0 015.45-1.76h18.34a9.33 9.33 0 016.87 3.02 9.347 9.347 0 016.87-3.02h18.34c3.72 0 6.93 2.18 8.43 5.34 5.8-4.47 13.92-6.71 24.33-6.71 10.42 0 18.53 2.24 24.33 6.71a9.342 9.342 0 018.44-5.34h28.87c19.37 0 29.05 10.18 29.05 30.52 0 4.75-.56 9.02-1.68 12.79-1.26 4.21-3.23 7.79-5.9 10.71-2.16 2.37-5 4.32-8.52 5.84a26.15 26.15 0 01-5.68 1.72c-1.97.37-3.93.55-5.89.55h-2.58v4.5c0 5.16-4.18 9.34-9.34 9.34h-18.33a9.33 9.33 0 01-8.42-5.31l-1.11.81a28.467 28.467 0 01-7.01 3.53c-2.28.79-4.85 1.38-7.71 1.78-2.73.37-5.57.57-8.52.57-2.94 0-5.78-.2-8.51-.57-2.86-.4-5.43-.99-7.71-1.78-2.54-.87-4.87-2.05-7.01-3.53l-1.11-.81a9.33 9.33 0 01-8.42 5.31h-18.34a9.31 9.31 0 01-6.87-3.02 9.293 9.293 0 01-6.87 3.02h-18.34c-3.12 0-5.89-1.53-7.58-3.89-.7.47-1.43.91-2.21 1.31-1.55.8-3.32 1.49-5.28 2.03-3.25.91-6.16 1.47-8.71 1.66-.81.06-2.11.12-3.91.17-2.18.06-3.78.1-4.71.1-8.62 0-16.7-.88-24.2-2.64-4.95-1.15-8.05-6.05-7.02-11zm47.04-11.65c0 1.31-.28 2.58-.78 3.73.34-.56.65-1.21.94-1.95.29-.74.51-1.57.65-2.5.16-1.01.25-2.3.25-3.86 0-1.65-.19-2.99-.56-4.01-.29-.79-.71-1.46-1.25-2-.53-.52-1.5-1.02-2.9-1.51l-.21-.07a9.323 9.323 0 013.89 7.59v4.58h-.03zm-23.92-15.95c.62.21 1.31.41 2.06.59-2.89-1.59-4.86-4.67-4.86-8.2v-4.49h.04c0-1.85.55-3.6 1.51-5.08-.3.15-.54.31-.73.48-.32.27-.62.83-.91 1.66l-.1.34c-.55 1.76-.83 4.13-.83 7.09 0 3.21.51 5.35 1.54 6.42.37.39 1.13.79 2.28 1.19zm76.7 1.88a9.412 9.412 0 014.88 5.85v-11.7a9.412 9.412 0 01-4.88 5.85zm-26.86 5.86c.73-2.58 2.53-4.7 4.88-5.86a9.405 9.405 0 01-4.88-5.86v11.72zm57.23-16.88c-.72 2.92-1.08 6.61-1.08 11.06 0 2.54.07 4.64.23 6.3.16 1.67.41 3.24.75 4.7l.04.18V95.13c0-.52.02-1.03.06-1.53zm34.31 11.06c0-4.12-.31-7.6-.93-10.41v19.86c0 .57-.03 1.13-.08 1.67l.03-.12c.34-1.46.59-3.03.75-4.7.15-1.66.23-3.76.23-6.3zm24.41 12.23a9.356 9.356 0 013.21-4.8 9.356 9.356 0 01-3.21-4.8v9.6zm0-31.58v2.8c.29-1.01.74-1.95 1.32-2.8h-1.32zm29.9 11.84c0-3.66-.74-6.47-2.23-8.43.8 1.78 1.2 3.7 1.2 5.77v6.42c0 2.17-.44 4.18-1.32 6.04-.29.6-.62 1.17-.98 1.69.26-.17.48-.35.64-.53l.04-.04c.73-.8 1.32-1.95 1.77-3.46.59-1.97.88-4.46.88-7.46z"
          />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M146.5 132.25l2.57-15.12c5.62 1.41 10.68 2.11 15.17 2.11s8.11-.19 10.86-.55v-4.58l-8.25-.74c-7.45-.67-12.57-2.46-15.35-5.36-2.78-2.9-4.17-7.19-4.17-12.88 0-7.82 1.69-13.2 5.08-16.13 3.39-2.93 9.15-4.4 17.28-4.4s15.46.76 22 2.29l-2.29 14.67c-5.68-.92-10.24-1.38-13.66-1.38s-6.32.16-8.71.46v4.49l6.6.64c8.01.8 13.54 2.71 16.59 5.73 3.06 3.03 4.59 7.23 4.59 12.61 0 3.85-.52 7.1-1.56 9.76s-2.28 4.67-3.71 6.05c-1.44 1.37-3.47 2.43-6.1 3.16-2.63.73-4.93 1.18-6.92 1.33-1.99.15-4.63.23-7.93.23-7.94 0-15.31-.8-22.09-2.39zM233.07 133.26v-20.25h-13.75v20.25h-18.33V75.98h18.33v20.25h13.75V75.98h18.34v57.28zM257.13 104.66c0-10.44 1.96-18.07 5.87-22.86 3.91-4.8 10.97-7.2 21.17-7.2 10.21 0 17.27 2.4 21.18 7.2 3.91 4.79 5.86 12.42 5.86 22.86 0 5.2-.41 9.57-1.23 13.11-.83 3.55-2.25 6.63-4.27 9.26-2.01 2.63-4.79 4.55-8.34 5.77-3.54 1.23-7.94 1.84-13.2 1.84-5.25 0-9.65-.61-13.2-1.84-3.54-1.22-6.32-3.14-8.34-5.77-2.01-2.63-3.43-5.71-4.26-9.26-.82-3.54-1.24-7.91-1.24-13.11zm19.71-9.53v23.83h7.61c2.5 0 4.32-.29 5.45-.87 1.13-.58 1.7-1.91 1.7-3.98V90.27h-7.7c-2.45 0-4.23.29-5.36.88-1.13.58-1.7 1.9-1.7 3.98zM347.19 119.42h-11.92v13.84h-18.33V75.98h28.87c13.14 0 19.71 7.05 19.71 21.17 0 7.76-1.71 13.5-5.13 17.23-1.28 1.41-3.06 2.6-5.32 3.58-2.26.97-4.89 1.46-7.88 1.46zm-11.92-28.78v14.12h4.22c2.2 0 3.8-.23 4.81-.69 1.01-.46 1.51-1.51 1.51-3.16v-6.42c0-1.65-.5-2.7-1.51-3.16-1.01-.46-2.61-.69-4.81-.69h-4.22z"
          />
          <path
            fill="#F86C48"
            d="M6.78 270.5v-28.97l23.94-41.56H477.8l27.38 43.46.07 50.12c-8.8-.53-16.35-5.65-20.32-12.99-9.32 17.24-34.38 17.24-43.7 0-8.13 15.04-28.23 16.96-39.42 5.76-10.79 10.08-29.9 10.95-38.93-5.76-11.87 21.97-43.11 10.8-43.11.17-10.62 19.31-39.82 16.11-45.7-5.4-5.9 21.58-35.25 24.73-45.79 5.23-9.32 17.24-34.38 17.24-43.7 0-9.32 17.24-34.38 17.24-43.7 0-9.32 17.24-34.38 17.24-43.7 0-9.32 17.24-34.38 17.24-43.7 0-4.2 7.76-10.27 13.04-21.85 13.04-11.08 0-23.8-10.2-24.85-23.1z"
          />
          <path
            fill="#EA5445"
            d="M6.78 270.5v-27.12h498.37l.03.05.07 50.12c-8.8-.53-16.35-5.65-20.32-12.99-4.2 7.76-12.41 13.04-21.85 13.04-9.44 0-17.65-5.28-21.85-13.04-4.2 7.76-12.41 13.04-21.85 13.04-6.93 0-13.19-2.84-17.69-7.42-4.8 4.58-11.11 7.42-16.96 7.42-11.57 0-17.65-5.28-21.85-13.04-4.19 7.76-12.61 13.04-21.85 13.04-6.4 0-21.26-5.95-21.26-12.87-10.62 19.31-39.82 16.11-45.7-5.4-5.9 21.58-35.25 24.73-45.79 5.23-9.32 17.24-34.38 17.24-43.7 0-9.32 17.24-34.38 17.24-43.7 0-9.32 17.24-34.38 17.24-43.7 0-9.32 17.24-34.38 17.24-43.7 0-4.19 7.76-10.27 13.04-21.85 13.04-11.08 0-23.8-10.2-24.85-23.1z"
          />
        </svg>
        <Link href={"/"}>
          <h3 className="font-medium text-white ml-2 text-lg">SHOPPING LAND</h3>
        </Link>
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <input
          type="text"
          className="flex p-1 w-full font-medium outline-none"
        />
      </div>
      <div className="relative flex items-center w-full">
        <Navbar />
        <div className="absolute flex w-[30%] right-12 justify-between">
          <div className="flex items-center">
            🌚
            <div className="inline-block w-10">
              <span className="border rounded-full border-sky-700 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0">
                <span className="rounded-full w-3 h-3 m-1 bg-sky-700"></span>
              </span>
            </div>
            🌞
          </div>
          <div className="absolute flex top-[-4px] right-5">
            <Link href={"/pages/basket"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width={32}
                height={32}
                color="#ffffff"
                fill="currentcolor"
              >
                <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
