// "use client";
// import React from "react";
// import { createContext } from "react";


// export interface UserContextProps {
//   state: boolean;
//   setState: React.Dispatch<React.SetStateAction<boolean>>;
//   themeMode: string;
//   setThemeMode: React.Dispatch<React.SetStateAction<string>>;
//   skills: string[];
//   setskills: React.Dispatch<React.SetStateAction<string[]>>;

// }

// export const UserContext = createContext({});

// //ts-ignore
// export default function UserContextProvider ({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [state, setState] = React.useState<boolean>(false);
//   const [themeMode, setThemeMode] = React.useState<string>("light");
//   const [skills, setskills] = React.useState<string[]>([
//     "HTML",
//     "CSS",
//     "Javascript",
//     "React",
//     "Tailwind CSS",
//     "Git",
//     "GITHUB",
//     "Java",
//     "Python",
//     "Ethical Hacking",
//     "SQL",
//     "MongoDB",
//     "CLI",
//   ]);

//   React.useEffect(() => {
//     const html = document.querySelector("html");
//     if (html) {
//       html.classList.remove("light", "dark");
//       html.classList.add(themeMode);
//     }
//   }, [themeMode]);

//   return <UserContext.Provider value={{state, setState, themeMode, setThemeMode, skills, setskills}}>{children}</UserContext.Provider>;
// };
