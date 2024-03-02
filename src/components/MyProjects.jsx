import { ArrowForward } from "@mui/icons-material";
import React from "react";
import projects from "../utils/projects";

function MyProjects({ view }) {
  return (
    <div
      id="myProjects"
      className="section text-white bg-red-40 h-[60rem w-full mt-10"
    >
      <p
        className={`font-medium font-inter z-10  ${
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
            <li className="space-y-2 ">
              <div className="flex gap-2">
                <p className="text-white">{items.company}</p>
                <a
                  href={items.link}
                  target="_blank"
                  className="text-sm -rotate-45 hover:text-blue-600 aspect-square rounded-full"
                >
                  <ArrowForward sx={{ fontSize: 20 }} />
                </a>
              </div>

              <div className="bg-red-400 w-48 aspect-video">
                <img
                  src={items.photo || items.role}
                  className="size-full object-cover"
                />
              </div>
              <p className="text-slate-500">{items.desc}</p>
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
