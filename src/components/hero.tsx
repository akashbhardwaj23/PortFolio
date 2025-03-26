import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io"
export default function HeroPage() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="w-1/2 p-4 gap-8">
        <section>
          <h1 className="heading text-3xl tracking-wider text-primary font-convergence">
            Hey, Akash This Side
          </h1>
          <aside className="flex flex-col sm:flex-row gap-2 mt-4 px-10 font-poppins">
            <div className="w-full max-w-12 flex sm:justify-end">
              <p className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
                *
              </p>
            </div>
            <div>
              <p className="lowercase text-neutral-7 dark:text-neutral-dark-7 text-balance text-sm">
                love building website and learning new things - been building
                for 1 year now also i dabble into web3 and blockchain and bunch
                of cool stuff
              </p>
              <div className="flex gap-3 mt-3">enginnering</div>
            </div>
          </aside>
        </section>

        <section className="flex flex-col gap-4 mt-10">
          <div className="heading text-lg font-bold flex flex-col sm:flex-row gap-2 mt-4 font-poppins">
            Projects
          </div>
          <ul className="flex flex-col gap-4">
            <li>
              <div className="flex gap-2 items-center justify-center">
                Project 1
              </div>
            </li>
            <li>
              <div className="flex gap-2 items-center justify-center">
                Project 1
              </div>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4 mt-8 font-poppins">
          <div className="heading text-lg font-bold flex flex-col sm:flex-row gap-2 mt-4 font-poppins">
            Contacts
          </div>
          <ul className="flex gap-4">
            <li>
              <a
                className="px-8 py-2 flex rounded-lg bg-gray-200/80 dark:bg-[#252525] text-center text-sm hover:bg-gray-300"
                href="https://github.com/akashbhardwaj23"
              >
                <div className="flex justify-center items-center gap-2 font-poppins">
                  <SiGithub className="w-5 h-5 text-foreground" />
                  Github
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
