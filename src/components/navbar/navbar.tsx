"use client"
import Link from "next/link";
import { CircleUserRound, HomeIcon, Info, TerminalIcon } from "lucide-react";
import { ModeToggle } from "../ui/modetoggle";
import { usePathname } from "next/navigation";


export function Navbar() {
  const pathname = usePathname()

  const navbarItems = [
    {
      name : "Home",
      href : "/",
      icon : <HomeIcon width={30} />
    },
    {
      name : "About",
      href : "/about",
      icon : <Info width={30} />
    },
    {
      name : "Project",
      href : "/projects",
      icon : <TerminalIcon width={30} />
    },
    {
      name : "Contact",
      href : "/contact",
      icon : <CircleUserRound width={30} />
    }
  ]

  // z-50 lg:sticky max-w-[90%] m-auto lg:top-0
  

  return (
    <nav className="z-50 lg:sticky max-w-[90%] m-auto lg:top-0">
      <section className="flex w-full justify-between items-center m-auto p-4">
          <Link href={""} className="uppercase text-3xl font-bold tracking-widest relative font-convergence">
              AKB <span className="text-blue-700 font-bold text-8xl absolute -bottom-2">.</span>
          </Link>

        <div className="hidden lg:flex gap-4 min-w-96 justify-center items-center backdrop-blur-lg p-2 rounded-lg">
            {
              navbarItems.map((items) => {
                const isActive = (pathname.includes(items.href) && pathname === items.href) ? true : false
                return (
                  <Link
                    href={items.href}
                    key={items.name}
                    className={`${isActive ? "text-blue-700" : "text-gray-800 dark:text-gray-200"} flex items-center justify-center gap-2 uppercase hover:text-blue-500 dark:hover:text-blue-500 duration-200 ease-linear w-36 font-medium text-center`}
                  >
                    {items.icon} {items.name}
                  </Link>
                )
              })
            }

        </div>

            <div className="flex items-center gap-4">
              <ModeToggle />
            </div>


         
      {/* For Mobile */}
      <section className="fixed z-50 md:w-[30rem] md:m-auto lg:hidden bottom-10 left-0 right-0 flex flex-wrap justify-center items-center w-full">
                <div className="flex gap-1 flex-wrap items-center w-[6  0%] justify-between p-2 rounded-lg bg-black/20 dark:bg-white/5 backdrop-blur-lg">
                    {navbarItems.map((items) => {
                        const isActive = (pathname.includes(items.href) && items.href.length > 1) || pathname === items.href;
                        return (
                            <Link key={items.name} href={items.href} className={`${isActive ? "text-blue-700" : "text-gray-800 dark:text-gray-200"} p-2`}>
                                {items.icon}
                            </Link>
                        );
                    })}
                </div>
            </section>



      </section>
    </nav>
  );
}

