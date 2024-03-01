import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import React from "react";

function MyInfo() {
  const socialLinks = [
    { link: "https://github.com/Lambdola", icon: <GitHub /> },
    { link: "https://www.linkedin.com/in/oladimeji-olalekan-a24a58250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <LinkedIn /> },
    { link: "https://x.com/elijahdimeji549?s=09", icon: <X /> },
    { link: "", icon: <Email /> },
  ];
  return (
    <header className="space-y-2 xl:space-y-5 mb-20 xl:w-1/2 xl:h-screen xl:p-20 bg-red-40">
      <h1 className="font-bold text-slate-300 text-3xl xl:text-[3rem] font-inter">
        Olalekan Oladimeji
      </h1>
      <h2 className="text-slate-400 text-lg xl:text-[1.5rem] xl:font-semibold">
        Full-Stack Web Developer
      </h2>
      <p className="text-slate-500 xl:w-[80%] xl:text-xl">
        I build responsive, optimised pixel-perfect and scalable web applications.
      </p>

      <div className="text-slate-500 hidden xl:block w-1/3 text-sm">
        <ul>
            <li className="flex items-center gap-2">
                <div className="w-10 h-[.2px] bg-slate-100"></div>
                <p>ABOUT</p>
            </li>
            <li className="flex items-center gap-2">
                <hr className="w-10" />
                <p>EXPERIENCE</p>
            </li>
            <li className="flex items-center gap-2">
                <hr className="w-10" />
                <p>PROJECTS</p>
            </li>
        </ul>
      </div>
      <ul className="flex gap-3 items-center">
        {socialLinks.map((items) => (
          <li key={items.link} className="cursor-pointer"><a  target="_blank" href={items.link} >
            <div className="text-slate-400 bg hover:text-pink-500 ">{items.icon} </div>{" "}
          </a></li>
        ))}
      </ul>
    </header>
  );
}

export default MyInfo;
