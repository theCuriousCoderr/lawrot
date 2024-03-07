import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import projects from "../utils/projects";

function ProjectArchive() {
  return (
    <div className="bg-slate-900 h-full px-5 py-8 xl:p-20">
      <div className="flex flex-col bg-red-30">
        <NavLink
          to="/"
          className="text-teal-300 font-semibold font-inter py-2 bg-red-40 text-lg flex items-center gap-2 group"
        >
          {" "}
          <span className="bg-red-30 flex items-center justify-center group-hover:-ml-2">
            <ArrowBack sx={{ fontSize: 20 }} />
          </span>{" "}
          <span className="bg-red-20 group-hover:ml-2 group-hover:text-slate-500 text-base xl:text-lg">
            Olalekan Oladimeji
          </span>
        </NavLink>
        <h1 className="text-[8vw] xl:text-[3rem] font-black font-inter text-slate-300 xl:leading-10 leading-8">
          All Projects
        </h1>
      </div>
      <div className="mt-16">
        <table className="xl:hidden w-full">
          <tr className="z-10 font-semibold text-slate-400 bg-slate-900 text-left sticky top-0">
            <th className="w-[25%] py-5">Year</th>
            <th className="">Project</th>
          </tr>
          {projects.map((items) => {
            return (
              <tr className="border-t-[.5px] border-slate-700 ">
                <td className="text-slate-400 text-sm py-5">
                  {items.period.start.slice(-4)}
                </td>
                <td
                  onClick={() => window.open(items.link, "_blank")}
                  className="flex py-5 text-slate-200 hover:text-teal-200 text-sm font-bold group transition-all"
                >
                  <p>{items.company}</p>
                  <div className="transition-all -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowForward sx={{ fontSize: 15 }} />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>

        <table className="hidden xl:block w-full">
          <tr className="z-10 flex items-center font-semibold text-slate-400 bg-slate-900 text-left sticky top-0">
            <th className="w-[10%] py-5">Year</th>
            <th className="w-[15%]">Project</th>
            <th className="w-[20%] bg-red-30">Role</th>
            <th className="w-[40%]">Built with</th>
            <th className="w-[15%]">Link</th>
          </tr>
          {projects.map((items) => {
            return (
              <tr className="border-t-[.5px] w-full flex items-center border-slate-700 hover:bg-gradient-to-r hover:from-transparent hover:to-slate-800 hover:border-l-0 ">
                <td className="text-slate-400 text-sm w-[10%]">
                  {items.period.start.slice(-4)}
                </td>
                <td
                  className="flex w-[15%] text-slate-200 hover:text-teal-200 text-sm font-bold group transition-all"
                >
                  <p>{items.company}</p>
                 
                </td>
                <td className="text-slate-500 w-[20%] font-semibold">{items.role || 'Front End Developer'}</td>
                <td className="flex flex-wrap gap-2 bg-red-40 py-5 px-5 w-[40%]">
                {items.tools.map((skill) => (
                      <span
                        key={skill}
                        className=" text-emerald-300 text-xs bg-emerald-600 bg-opacity-10 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                </td>
                <td
                  onClick={() => window.open(items.link, "_blank")}
                  className="flex overflow-scroll no-scrollbar w-[15%] text-slate-200 hover:text-teal-200 text-sm font-bold group transition-all"
                >
                  <p className="">{items.link.replace('https://', '')}</p>
                  <div className="transition-all -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowForward sx={{ fontSize: 15 }} />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ProjectArchive;
