import { SiLivechat } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { LiaBlogSolid } from "react-icons/lia";
import { PiWebhooksLogo, PiBookOpenTextBold } from "react-icons/pi";
import { contacts } from "@/lib/contact";
import Link from "next/link";

export default function HeroPage() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="sm:w-1/2 w-[90%] p-4 gap-8">
        <section>
          <h1 className="heading sm:text-3xl text-lg tracking-tighter md:tracking-wider text-primary font-convergence mb-4 sm:mb-0">
            Hey, Akash This Side
          </h1>
          <aside className="flex flex-col flex-row sm:gap-2 gap-4 mt-4 px-10 font-poppins">
            <div className="w-full max-w-12 flex sm:justify-end">
              <p className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
                *
              </p>
            </div>
            <div>
              <p className="lowercase text-gray-800/80 dark:text-gray-200 text-balance text-sm">
                love building website and learning new things - been building
                for a year now i am dabbling into web3 and blockchain and bunch
                of cool stuff
              </p>
              <div className="flex gap-3 mt-3">
                {mydomains.map((domain, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 flex rounded-lg bg-gray-200/80 dark:bg-[#252525] text-center text-sm hover:bg-gray-300"
                  >
                    {domain.name}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="flex flex-col gap-4 mt-10">
          <div className="heading text-lg sm:font-bold flex flex-col sm:flex-row gap-2 mt-4 font-poppins">
            Projects
          </div>
          <ul className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <li key={index}>
                <div className="flex gap-4">
                  <div className="w-full max-w-20 flex justify-end">
                    <div className="flex justify-center p-2 rounded-lg text-center hover:bg-gray-300">
                      {<project.icon className="w-6 h-6" />}
                    </div>
                  </div>
                  <div>
                    
                      <header className="lowercase text-lg mb-2 sm:mb-0 font-convergence hover:cursor-pointer hover:text-gray-800 dark:hover:text-gray-400/80"> 
                      <Link href={""} className="flex items-center gap-4 sm:gap-2">
                        {project.name} {<BiLinkExternal className="w-4 h-4" />}
                        </Link>
                      </header>
                    
                    <p className="text-gray-800/80 dark:text-gray-200 lowercase text-pretty text-sm">
                      {project.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 mt-8 font-poppins h-96 sm:h-44">
          <div className="heading text-lg font-bold flex flex-col sm:flex-row gap-2 mt-4 font-poppins">
            Contacts
          </div>
          <ul className="sm:flex grid grid-cols-2 gap-4 px-4 sm:px-0">
            {contacts.map((contact, index) => (
              <li key={index}>
                <a
                  className="flex text-center text-sm"
                  href={contact.href}
                >
                  <div className="flex justify-center items-center px-8 py-2 rounded-lg bg-gray-200/80 dark:bg-[#252525] hover:text-gray-500 dark:hover:text-gray-400 gap-2 font-poppins">
                    {<contact.icon className="w-5 h-5 text-foreground mr-2" />}
                    {contact.name}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

const mydomains = [
  {
    name: "engineering",
    href: "/engineering",
  },
  {
    name: "web3",
    href: "/web3",
  },
  {
    name: "solana",
    href: "/solana",
  },
  {
    name: "blockchain",
    href: "/blockchain",
  },
];

const projects = [
  {
    name: "chat app",
    icon: SiLivechat,
    href: "/chatapp",
    text: "this application is a chat app that allows users to chat with each other and allows them to create rooms and invite friends to join.",
  },
  {
    name: "web3 wallet",
    icon: PiWebhooksLogo,
    href: "/web3wallet",
    text: "this application is a web3 wallet that allows users to store and send cryptocurrencies like solana and ethereum.",
  },
  {
    name: "blog-app",
    icon: LiaBlogSolid,
    href: "/blogapp",
    text: "this application is a blogging platform that allows users to create and publish blog posts.",
  },
  {
    name: "texttopdf",
    icon: PiBookOpenTextBold,
    href: "/texttopdf",
    text: "this application is a text to pdf converter that allows users to convert text to pdf.",
  },
];
