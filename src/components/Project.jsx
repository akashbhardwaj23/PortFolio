import React from "react";
import Button from "./Button";
import ScrollToTop from "./ScrollToTop";
import Slider from "./Slider";

function Project() {
  return (
    <div className="md:py-48 px-0 py-32 dark:bg-black  dark:border-b-2 dark:border-white">
      <Slider />
      <ScrollToTop />
      <div className="max-w-max-w-10xl m-auto w-11/12">
        <h2 className="md:mb-44 mb-32">
          <span className="spanProject block text-6xl uppercase tracking-wide text-center mb-14 relative text-gray-800 dark:text-white">
            Projects
          </span>
          <span className="block text-center text-gray-500 text-3xl font-medium max-w-7xl m-auto leading-9 uppercase dark:text-white">
            Here You will find Some of my Projects that i have made in the past
            and projects that i am currently building
          </span>
        </h2>

        <div>
          <div className="grid md:grid-cols-2 md:gap-20 md:mb-44 grid-cols-1 gap-8 mb-32 text-center">
            <div className="overflow-hidden">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/19c708670a1f21231c1e2efa6ba38dbf52b15343/3237e/assets/jpeg/dopefolio.jpeg"
                alt=""
                className="w-full block object-cover"
              />
            </div>

            <div className="py-8 px-0 flex justify-center flex-col md:items-start items-center">
              <h3 className="font-extrabold text-4xl mb-8">
                Password Generator
              </h3>
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12 text-left dark:text-white">
               Password Generator is a Simple password generating site . This site has many features some of the feature are that it will generate specified length password along with You can choose to include number and characters
              </p>

              <a href="https://github.com/akash23-ai/React/tree/main/05password" className="no-underline w-full md:text-left"><Button children={"Password Changer"} /></a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-2 md:gap-20 md:mb-44 grid-cols-1 gap-8 mb-32 text-center">
            <div className="overflow-hidden">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/9199afe42f789dbddb324ed3edd326e080e693c1/28f54/assets/jpeg/wilsonport.jpeg"
                alt=""
                className="w-full block object-cover"
              />
            </div>

            <div className="py-8 px-0 flex justify-center flex-col md:items-start items-center">
              <h3 className="font-extrabold text-5xl mb-8">
                Social
              </h3>
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12 text-left dark:text-white">
                This is a social media site that i have created during my free time for fun. It has many features like you can create a post, like a post, comment on a post and many more.It also include Authentication using JWt and bcrypt.  
              </p>

              <a href="https://github.com/akash23-ai/Social" className="no-underline w-full md:text-left"><Button children={"Social"} /></a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-2 md:gap-20 md:mb-44 grid-cols-1 gap-8 mb-32 text-center">
            <div className="overflow-hidden">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/61fc288f39a306e3130c72643480ce015dec48ae/e3272/assets/jpeg/boreal-coffee-clone.jpeg"
                alt=""
                className="w-full block object-cover"
              />
            </div>

            <div className="py-8 px-0 flex justify-center flex-col md:items-start items-center">
              <h3 className="font-extrabold text-4xl mb-8">
                Bg Color Changer
              </h3>
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12 text-left dark:text-white">
               It is the project that i have created during my free time for fun 
               </p>

              <a href="https://github.com/akash23-ai/React/tree/main/04bgchanger" className="no-underline w-full md:text-left"><Button children={"Bg Color Changer"} /></a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-2 md:gap-20 md:mb-44 grid-cols-1 gap-8 mb-32 text-center">
            <div className="overflow-hidden">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/74f6186aaa2b6d5f6ea6da1013abfeb672f5c807/aee81/assets/jpeg/crown-template.jpeg"
                alt=""
                className="w-full block object-cover"
              />
            </div>

            <div className="py-8 px-0 flex justify-center flex-col md:items-start items-center">
              <h3 className="font-extrabold text-4xl mb-8">
                Theme Switcher
              </h3>
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12 text-left dark:text-white">
                This is not the project that i want to include because it is wrongly named it does switch your theme.
              </p>

              <a href="https://github.com/akash23-ai/React/tree/main/09themeSwitcher" className="no-underline w-full md:text-left"><Button children={"Theme Switcher"} /></a>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Project;
