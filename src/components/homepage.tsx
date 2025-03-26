"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { useUserContext } from "@/context/UserContext";
import WorkInProgress from "./workinprogess";
import HeroPage from "./hero";
import { Icons } from "@/lib/icons/icons";
import { contacts } from "@/lib/contact";

export default function HomePage() {
  const { themeMode } = useUserContext();
  const [progessValue, setProgressValue] = useState(20);


  return (
    <div
      className={`text-foreground relative`}
    >
      {/* <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px at 691px 2922.4px, rgba(29, 78, 216, 0.15), transparent 80%",
        }}
      ></div> */}

      {/* <div className="absolute top-30 left-30">
        <h1 className="heading text-3xl uppercase tracking-wider text-center text-primary font-poppins font-extrabold dark:text-white">
          Hey, Akash This Side
        </h1> */}
        {/* change This */}
        {/* <div className="mt-4 mx-auto mb-0 max-w-7xl">
          <p className="primaryText text-gray-800/80 text-2xl text-center w-full leading-relaxed dark:text-white">
            A FrontEnd Web Developer building the Frontend and Backend of
            Websites that lead to a overall success
          </p>
        </div>

        <div className="mt-4 text-center">
          <Link href={"/projects"}>
            <Button children={"Resume"} />
          </Link>
        </div>
        
      </div>
      </div>
      */}
      
      <HeroPage />
      {/* <WorkInProgress /> */}

      <div className="hidden lg:block translate-y-[-50%] bg-background shadow-sidebar top-1/2 dark:shadow-none dark:border-y-[1px] dark:border-r-[1px] dark:border-white p-4 fixed">
        {contacts.map((elements, index) => {
          return (
            <div className="w-20 p-2" key={index}>
              <Link
                href={elements.href}
                key={index}
                target="_blank"
                className={`w-full flex items-center justify-center p-2 rounded-lg no-underline hover:bg-gray-200 hover:shadow-md dark:hover:bg-[#bfbebe]`}
              >
                {themeMode === "light" ? (
                  <Image
                    src={elements.icons.imgsrc}
                    alt={elements.name}
                    width={40}
                    height={40}
                  />
                ) : (
                   <>
                   {elements.icons.svg}
                   </>
                )}
              </Link>
            </div>
          );
        })}

      </div>

      {/* <div className="absoulte bottom-[3%] left-1/2 translate-x-[-50%]">
        <div className="mouse"></div>
      </div> */}
    </div>
  );
}
