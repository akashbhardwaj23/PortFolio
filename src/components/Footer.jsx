import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-max-w-10xl m-auto w-11/12">
        <div className="flex justify-between px-0 py-32">
          <div className="w-2/5 order-1 max-w-max-w-3.5xl">
            <h2 className="text-4xl uppercase tracking-wide">
              Akash Kumar Bhardwaj
            </h2>
            <p className="mt-8 text-2xl leading-7">
              
            </p>
          </div>
          <div className="order-2">
            <h2 className="text-4xl uppercase tracking-wide">
              <span>Social</span>
            </h2>
            <div className="mt-8 flex">
              <a href="https://www.linkedin.com/in/akash-bhardwaj-b70a38161/" target="_blank" className="no-underline hover:bg-indigo-500 rounded-lg">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt=""
                  className="mr-4 w-10"
                />
              </a>
              <a href="https://github.com/akash23-ai" className="no-underline hover:bg-indigo-500 rounded-lg">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt=""
                  className="mr-4 w-10"
                />
              </a>
              <a href="" className="no-underline hover:bg-indigo-500 rounded-lg">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
                  alt=""
                  className="mr-4 w-10"
                />
              </a>
              <a href="" className="no-underline hover:bg-indigo-500 rounded-lg">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
                  alt=""
                  className="mr-4 w-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="py-16 px-0 border-t-2 border-solid border-gray-800 text-white text-xl text-center">
          @Copyright {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
