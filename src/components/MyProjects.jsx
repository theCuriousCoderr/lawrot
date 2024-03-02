import { ArrowForward } from "@mui/icons-material";
import React from "react";
import projects from "../utils/projects";

function MyProjects({ view }) {
  return (
    <div
      id="myProjects"
      className="section text-white bg-red-40 h-[60rem w-full mt-10 xl:mt-40"
    >
      <p
        className={`xl:hidden font-medium font-inter z-10  ${
          view === "myProjects"
            ? "sticky bg-slate-900 py-5 text-pink-500 xl:text-white -top-10 xl:relative"
            : "relative my-5"
        }`}
      >
        PROJECTS
      </p>
      <ul className="space-y-10">
        {projects.slice(0, 5).map((items) => {
          return (
            <li className="group space-y-2 xl:flex xl:space-y-0 xl:items-start xl:justify-between xl:hover:bg-teal-800 xl:hover:bg-opacity-10 xl:p-3 rounded-md">
              <div className="flex gap-2 xl:w-[30%] xl:justify-start bg-red-40 ">
                <div className="bg-red-40 w-48 xl:w-auto aspect-video xl:aspect-auto xl:justify-end hidden xl:flex">
                  <img
                    src={items.photo || items.role}
                    className="size-full xl:w-32 xl:aspect-video xl:border border-slate-100 object-cover"
                  />
                </div>
                <p className="text-white bg-green-40 xl:hidden">
                  {items.company}
                </p>
                <a
                  href={items.link}
                  target="_blank"
                  className="xl:hidden text-sm -rotate-45 hover:text-blue-600 bg-red-90 aspect-square xl:size-5 rounded-full"
                >
                  <ArrowForward sx={{ fontSize: 20 }} />
                </a>
              </div>
              <div className="xl:w-2/3 xl:space-y-3">
                <div className="bg-red-40 w-48 aspect-video xl:hidden">
                  <img
                    src={items.photo || items.role}
                    className="size-full object-cover"
                  />
                </div>
              <div onClick={() => window.open(items.link, '_blank')} className="group-hover:text-teal-200 text-white hidden xl:flex gap-2">
                  <p className=" bg-green-40">
                    {items.company}
                  </p>
                  <a
                    href={items.link}
                    target="_blank"
                    className="text-sm -rotate-45 hover:text-blue-600 bg-red-90 aspect-square xl:size-5 rounded-full"
                  >
                    <ArrowForward sx={{ fontSize: 20 }} />
                  </a>
                </div>
                <p className="text-slate-500 group-hover:text-slate-300">{items.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <div>
        <a
          href="#"
          target="_blank"
          className="text-sm -rotate-45 hover:text-blue-600"
        >
          View Full Project Archive
          <ArrowForward sx={{ fontSize: 20 }} />
        </a>
      </div>
    </div>
  );
}

export default MyProjects;
