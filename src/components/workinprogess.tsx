"use client";
import { useState } from "react";
import { AnimatedCircularProgressBar } from "./ui/animatedprogress";
import { useUserContext } from "@/context/UserContext";

export default function WorkInProgress() {
  const [progessValue, setProgressValue] = useState(20);
  const { themeMode } = useUserContext();

  return (
    <div className="h-96 flex justify-center items-center">
      <div className="heading flex flex-col justify-center items-center text-3xl uppercase gap-4 tracking-wider text-center text-primary font-poppins font-extrabold dark:text-white">
        Work In Progress
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={progessValue}
          gaugePrimaryColor="rgb(29, 78 ,216)"
          gaugeDarkPrimaryColor="rgb(59, 130, 246)"
          gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          gaugeDarkSecondaryColor="rgba(255, 255, 255, 1)"
          className="text-black dark:text-white"
          theme={themeMode}
        />
      </div>
    </div>
  );
}
