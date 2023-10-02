import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-4 md:mx-32 lg:mx-52 mt-8 md:mt-16 lg:mt-32">
      <div className="p-1 w-full bg-gradient-to-r from-yellow-500 to-slate-900"></div>
      <div className="my-5 text-lg text-white tracking-widest ">
        <a
          className="hover:underline text-orange-400 font-bold hover:underline-offset-8 hover:text-blue-500 "
          href="/"
        >
          MoviEra
        </a>{" "}
        by{" "}
        <a
          className="hover:underline text-orange-400 font-bold leading-6 hover:underline-offset-8 hover:text-blue-500 "
          target="_blank"
          rel="noopener noreferrer"
          href="https://xentech.netlify.app/"
        >
          XenTech ↗
        </a>
      </div>
    </div>
  );
};

export default Footer;
