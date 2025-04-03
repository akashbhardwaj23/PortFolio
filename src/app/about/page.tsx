
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-full">
        <div className="w-1/2 mx-auto px-4 sm:px-0">
        <h1 className="sm:text-4xl text-7xl font-bold mb-10 sm:mb-0">About</h1>
        </div>
        {/* <WorkInProgress /> */}
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="sm:w-1/2 w-[70%] flex flex-col sm:p-8 p-4 mx-auto gap-4 text-2xl sm:text-balance">
      <div className="flex gap-4">
        <h1 className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
          *
        </h1>
        <p>
          hey, akash here i love building website and knowing the tech behind it
        </p>
      </div>
      <div className="flex gap-4">
        <h1 className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
          *
        </h1>
        <p>
          i am dabbling into web3 and blockchain and bunch of cool stuff,
          currently i am learning rust for solana development
        </p>
      </div>

      <div className="flex gap-4">
        <h1 className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
          *
        </h1>
        <p>
          i mostly uses nextjs for my projects, tailwindcss for styling , redux for state management
        </p>
      </div>

      <div className="flex gap-4">
        <h1 className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
          *
        </h1>
        <p>
        i have built some application in golang (currently in a learning phase)
          </p>
      </div>


      <div className="flex gap-4">
        <h1 className="lowercase text-neutral-8 dark:text-neutral-dark-8 text-balance text-md">
        *
        </h1>
        <p>
            i know docker and devops
        </p>
      </div>
    </div>
  );
}
