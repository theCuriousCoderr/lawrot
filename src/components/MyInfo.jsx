import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import React, { useState } from "react";
import SendMail from "./SendMail";
import { NavLink } from "react-router-dom";
import CV from "../../Ola_CV.pdf";

function MyInfo({ view, goTo, setView }) {
  const [openEmail, setOpenEmail] = useState(false);
  const socialLinks = [
    { link: "https://github.com/Lambdola", icon: <GitHub /> },
    {
      link: "https://www.linkedin.com/in/oladimeji-olalekan-a24a58250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LinkedIn />,
    },
    { link: "https://x.com/elijahdimeji549?s=09", icon: <X /> },
    { link: "email", icon: <Email /> },
  ];

  return (
    <header className="space-y-2 xl:space-y-5 mb-20 xl:w-1/2 xl:h-screen xl:p-20 bg-red-40">
      <h1 className="font-bold text-slate-300 text-3xl xl:text-[3rem] font-inter">
        Olalekan Oladimeji
      </h1>
      <h2 className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-pink-500 from-10% to-violet-500 text-lg xl:text-[1.5rem] font-inter xl:font-semibold">
        <p>Full-Stack Web Developer</p>
      </h2>
      <p className="text-slate-500 xl:w-[80%] xl:text-xl">
        I build responsive, optimised pixel-perfect and scalable web
        applications.
      </p>

      <div className="text-slate-500 hidden xl:block xl:w-auto w-1/3 text-sm bg-red-40">
        <ul className="space-y-5 my-20 xl:mb-5">
          {[
            { section: "aboutMe", text: "ABOUT ME" },
            {
              section: "workingExperience",
              text: "MY PROFESSIONAL EXPERIENCE",
            },
            { section: "myExperience", text: "MY PROJECT EXPERIENCE" },
            { section: "myProjects", text: "MY PROJECTS" },
          ].map((items) => {
            return (
              <li
                key={items.text}
                onClick={() => goTo(items.section)}
                className="w-full"
              >
                <button
                  onClick={() => setView(items.section)}
                  className="w-ful group flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className={`group-hover:w-16 group-hover:bg-white ${
                      view === items.section
                        ? "w-16 bg-white"
                        : "w-5 bg-slate-500"
                    } h-[.2px] transition-all`}
                  ></div>

                  <p
                    className={`group-hover:font-semibold group-hover:text-slate-300 ${
                      view === items.section
                        ? "font-semibold text-slate-300"
                        : "font-normal text-slate-500"
                    } transition-all`}
                  >
                    {items.text}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="">
        <a
          href={CV}
          download
          target="_blank"
          className="w-2/3 font-medium text-base text-emerald-600 bg-emerald-200  hover:bg-emerald-900 px-5 py-2 rounded-md flex items-center justify-center"
        >
          <span className="">Download Resume</span>
        </a>
      </div>

      <div>
        <ul className="flex gap-3 xl:gap-5 items-center mt-5">
          {socialLinks.map((items) => (
            <li key={items.link} className="cursor-pointer">
              {items.link !== "email" ? (
                <NavLink target="_blank" href={items.link}>
                  <div className="text-slate-400 bg hover:text-pink-500 ">
                    {items.icon}{" "}
                  </div>{" "}
                </NavLink>
              ) : (
                <a href="mailto:elijahdimeji549@gmail.com">
                  <div className="text-slate-400 bg hover:text-pink-500 ">
                    {items.icon}{" "}
                  </div>{" "}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>{openEmail && <SendMail />}</div>
    </header>
  );
}

export default MyInfo;
