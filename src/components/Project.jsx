import React from "react";
import Button from "./Button";

function Project() {
  return (
    <div className="md:py-48 px-0 py-32">
      <div className="max-w-max-w-10xl m-auto w-11/12">
        <h2 className="md:mb-44 mb-32">
          <span className="spanProject block text-6xl uppercase tracking-wide text-center mb-14 relative text-gray-800">
            Projects
          </span>
          <span className="block text-center text-gray-500 text-3xl font-medium max-w-7xl m-auto leading-9 uppercase">
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
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>

              <Button children={"Link"} />
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
              <h3 className="font-extrabold text-4xl mb-8">
                Mega Site
              </h3>
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>

              <Button children={"Link"} />
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
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>

              <Button children={"Link"} />
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
              <p className="text-3xl text-gray-500 max-w-4xl leading-9 mb-12">
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>

              <Button children={"Link"} />
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Project;
