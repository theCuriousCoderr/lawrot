import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import projects from "../utils/projects";

function ProjectArchive() {
  return (
    <div className="bg-slate-900 h-full px-5 py-8">
      <div className="flex flex-col bg-red-30">
        <NavLink
          to="/"
          className="text-teal-300 font-semibold font-inter py-2 bg-red-40 text-lg flex items-center gap-2 group"
        >
          {" "}
          <span className="bg-red-30 flex items-center justify-center group-hover:-ml-2">
            <ArrowBack sx={{ fontSize: 20 }} />
          </span>{" "}
          <span className="bg-red-20 group-hover:ml-2 text-base">Olalekan Oladimeji</span>
        </NavLink>
        <h1 className="text-[8vw] font-black font-inter text-slate-300 leading-5">All Projects</h1>
      </div>
      <div className="mt-16">
        <table className="w-full">
            <tr className="z-10 font-semibold text-slate-400 bg-slate-900 text-left sticky top-0">
            
                <th className="w-[25%] py-5">Year</th>
                <th className="">Project</th>
            </tr>
            {projects.map(items => {
                return (
                    <tr className="border-t-[.5px] border-slate-700 ">
                    <td className="text-slate-400 text-sm py-5">{items.period.start.slice(-4)}</td>
                    <td className="flex py-5 text-slate-200 text-sm font-semibold">
                        <p>{items.company}</p>
                        <div className="-rotate-45">
                            <ArrowForward sx={{fontSize:15}} />
                        </div>
                    </td>
                </tr>
                )
            }) }
            
                
            
        </table>
      </div>
    </div>
  );
}

export default ProjectArchive;
