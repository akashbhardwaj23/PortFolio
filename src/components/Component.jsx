import React from "react";

function Component({ name, isSlider = false }) {
  return (
    <>
      {isSlider ? (
        <a href="" className="border-t border-solid border-white"></a>
      ) : (
        <a className="py-9 px-12 inline-block text-2xl text-gray-600 dark:text-white uppercase tracking-wide font-bold transition-colors duration-300 ease-linear delay-0 hover:text-indigo-600 dark:hover:text-purple-600">
          {name}
        </a>
      )}
    </>
  );

  // if(isSlider) return

  // return
}

export default Component;
