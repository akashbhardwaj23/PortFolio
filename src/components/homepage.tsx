"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { useUserContext } from "@/context/UserContext";
import { AnimatedCircularProgressBar } from "./ui/animatedprogress";

export default function HomePage() {
  const { themeMode } = useUserContext();
  const [progessValue, setProgressValue] = useState(20);

  const sidebarElements = [
    {
      name: "linkedin",
      icons: Icons.linkedIn,
      href: "https://www.linkedin.com/in/akash-bhardwaj-b70a38161/",
    },
    {
      name: "github",
      icons: Icons.github,
      href: "https://github.com/akashbhardwaj23",
    },
    {
      name: "twitter",
      icons: Icons.twitter,
      href: "https://twitter.com/AkashBh2024?t=ZIVvM108UpB5PssuhFIT6g&s=09",
    },
    {
      name: "youtube",
      icons: Icons.youtube,
      href: "",
    },
  ];


  return (
    <div
      className={`text-white h-screen relative dark:border-b-[1px] dark:border-white`}
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px at 691px 2922.4px, rgba(29, 78, 216, 0.15), transparent 80%",
        }}
      ></div>

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


        <div className="absolute top-[30%] left-[40%]">
          <div className="heading flex flex-col justify-center items-center text-3xl uppercase gap-4 tracking-wider text-center text-primary font-poppins font-extrabold dark:text-white">
          Work In Progress
          <AnimatedCircularProgressBar 
            max={100}
            min={0}
            value={progessValue}
            gaugePrimaryColor="rgb(79 70 229)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            className="text-black"
          />
          </div>
        </div>
      

      <div className="translate-y-[-50%] bg-white shadow-sidebar top-1/2 bg-white dark:bg-gray-700 p-4 fixed">
        {sidebarElements.map((elements) => {
          return (
            <div className="w-20 p-2" key={elements.name}>
              <Link
                href={elements.href}
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

      {/* <div className="mouseContainer">
        <div className="mouse"></div>
      </div> */}
    </div>
  );
}

const Icons = {
  linkedIn: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        viewBox="0 0 48 48"
      >
        <path
          fill="#0288D1"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
        ></path>
      </svg>
    ),
    imgsrc:
      "https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg",
  },
  github: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        viewBox="0 0 48 48"
      >
        <path
          fill="#fff"
          d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"
        ></path>
        <path
          fill="#455a64"
          d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"
        ></path>
        <path
          fill="#455a64"
          d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
        ></path>
        <path
          fill="#455a64"
          d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"
        ></path>
        <path
          fill="#00bcd4"
          d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"
        ></path>
      </svg>
    ),
    imgsrc:
      "https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg",
  },
  twitter: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        viewBox="0 0 48 48"
      >
        <path
          fill="#03A9F4"
          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
        ></path>
      </svg>
    ),
    imgsrc:
      "https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg",
  },
  youtube: {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FF3D00"
          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
        ></path>
        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
      </svg>
    ),
    imgsrc:
      "https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg",
  },
};
