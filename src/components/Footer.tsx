import React from "react";

const Footer = () => {
  return (
    <div id="Contact">
      <div className="h-80"></div>
      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-neutral-50 justify-items-center text-center mx-auto gap-10">
        {/* <div className="grid grid-cols-1 gridtoota:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-neutral-50 gap-12 sm:gap-24 mb-12 pr-8 pl-8 xs:px-20 gridtoota:px-6"> */}
        <div className="w-fit max-w-50">
          <div className="text-xl font-bold">Dheeraj</div>
          <div className="font-extralight ">
            <p className="">
              Aim is to become a great software engineer capable of solving
              complex problems quickly.
            </p>
            <p>Thanks for stopping by!</p>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Quick Links</div>
          <div className="font-extralight">
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Contact</div>
          <p>
            Email:
            <a href="mailto:dnagula@gmu.edu">dnagula@gmu.edu</a>
          </p>
        </div>
        <div>
          <div className="text-xl font-bold">Connect</div>
          <p>Github</p>
          <p>LinkedIn</p>
          <p>X</p>
        </div>
      </div>

      <hr className=" border-gray-500"></hr>
      <div className="text-center text-neutral-50 font-extralight p-10">
        © 2025 Dheeraj Krishna Nagula. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
