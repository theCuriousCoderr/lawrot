import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import React from "react";

function MyInfo({view}) {
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
        <ul className="space-y-5 my-20">
           { [ {section: 'aboutMe', text: 'ABOUT'},  {section: 'myExperience', text: 'EXPERIENCE'},  {section: 'myProjects', text: 'PROJECTS'}, ].map(items => {
            return (
                <li className="flex items-center gap-2">
                <div className={`${view === items.section ? 'w-16 bg-white' : 'w-5 bg-slate-500'} h-[.2px] transition-all`}></div>
                <p className={`${view === items.section ? 'font-semibold text-slate-300' : 'font-normal text-slate-500' } transition-all`} >{items.text}</p>
            </li>
            )
           }) }
           
            {/* <li className="flex items-center gap-2">
                <div className={`${view === 'myExperience' ? 'w-16 bg-white' : 'w-5 bg-slate-500'} h-[.2px] transition-all`}></div>
                <p className={`${view === 'myExperience' ? 'font-semibold text-slate-300' : 'font-normal text-slate-500' } transition-all`} >EXPERIENCE</p>
            </li>
            <li className="flex items-center gap-2">
                <div className={`${view === 'myProjects' ? 'w-16 bg-white' : 'w-5 bg-slate-500'} h-[.2px] transition-all`}></div>
                <p className={`${view === 'myProjects' ? 'font-semibold text-slate-300' : 'font-normal text-slate-500' } transition-all`} >PROJECTS</p>
            </li> */}
        </ul>
      </div>

      <ul className="flex gap-3 xl:gap-5 items-center">
        {socialLinks.map((items) => (
          <li key={items.link} className="cursor-pointer"><a  target="_blank" href={items.link} >
            <div className="text-slate-400 bg hover:text-pink-500 ">{items.icon} </div>{" "}
          </a></li>
        ))}
      </ul>
       {/* {view === 'aboutMe' && <p className="text-[5rem] text-yellow-400">{view }</p>}
       {view === 'Exp' && <p className="text-[5rem] text-blue-400">{view }</p>}
       {view === 'Projects' && <p className="text-[5rem] text-red-400">{view }</p>} */}
    </header>
  );
}

export default MyInfo;
