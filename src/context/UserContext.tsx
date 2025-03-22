"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeModeType = "light" | "dark" | "system";

interface UserContextProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  themeMode: ThemeModeType;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeType>>;
  skills: string[];
  setskills: React.Dispatch<React.SetStateAction<string[]>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

// React.FunctionComponent
export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeModeType>("light");
  const [skills, setskills] = useState([
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Tailwind CSS",
    "Git",
    "GITHUB",
    "Java",
    "Python",
    "Ethical Hacking",
    "SQL",
    "MongoDB",
    "CLI",
  ]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (themeMode === "system") {
      const html = document.querySelector("html");
      if (window.matchMedia("(prefers-color-scheme: dark)")) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          html?.classList.remove("light", "dark");
          html?.classList.add("dark");
        } else {
          html?.classList.remove("light", "dark");
          html?.classList.add("light");
        }
      }
    } else {
      if (html) {
        html.classList.remove("light", "dark");
        html.classList.add(themeMode);
      }
    }
  }, [themeMode]);

  return (
    <UserContext.Provider
      value={{ state, setState, themeMode, setThemeMode, skills, setskills }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }

  return context;
};
