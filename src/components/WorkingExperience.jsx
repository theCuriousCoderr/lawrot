import React, { useEffect, useState } from "react";
import experienceData from "../utils/experience";
import { ArrowBack, ArrowForward, FilterAlt } from "@mui/icons-material";
import CV from "../../Ola_CV.pdf";
import workingExperienceData from "../utils/workingExperience";
import { Link } from "react-router-dom";

function WorkingExperience({ view, expLen }) {
  const [experience, setExperience] = useState("");
  const [filter, setFilter] = useState("none");

  useEffect(() => {
    if (filter === "none") {
      setExperience(workingExperienceData.slice(0, expLen));
    }
  }, [expLen]);

  const filterExperience = (e) => {
    let filter = experienceData.filter((items) => {
      return items.tools.filter((tools) => {
        if (tools.toLowerCase().includes(e.target.value.toLowerCase())) {
          return tools;
        }
      })[0];
    });
    setExperience(filter);
    setFilter(e.target.value);
  };

  return (
    <div
      id="workingExperience"
      className="section text-white bg-blue-40 w-full mt-28 xl:mt-40"
    >
      <h2 className="hidden xl:block my-5 text-xl text-teal-400 font-bold">
        MY PROFESSIONAL EXPERIENCE
      </h2>
      <div
        className={`xl:hidden font-medium font-inter flex gap-5 items-end ${
          view === "workingExperience"
            ? "sticky bg-slate-900 py-5 text-pink-500 xl:text-white -top-10 xl:relative z-20"
            : "relative my-5"
        }`}
      >
        <p className="text-teal-400">MY PROFESSIONAL EXPERIENCE</p>
        <div className="relative w-48 bg-red-30 bg-clip-text bg-gradient-to-r from-orange-500 to-[20%] to-pink-500">
          <div className="absolute text-slate-500 right-0 bottom-1">
            <FilterAlt sx={{ fontSize: 20 }} />
          </div>
          <input
            id="filter"
            onChange={filterExperience}
            autoComplete="off"
            spellCheck={false}
            className="w-full caret-slate-400 h-full py-1 bg-transparent text-transparent border-b border-slate-500 outline-none text-slate-300 focus-within:border-orange-400 placeholder:text-slate-600 placeholder:font-light placeholder:text-sm"
            placeholder="Filter experence"
          />
        </div>
      </div>
      <ul className="space-y-10">
        {workingExperienceData &&
          workingExperienceData.map((items, id) => {
            return (
              <li
                role="button"
                key={items.company + items.role}
                id={id === experience.length - 1 ? "last" : "none"}
                className="w-full"
              >
                <Link
                  href={items.link}
                  target="_blank"
                  className="block w-full group border-slate-400 bg-red-40 space-y-2 xl:flex xl:items-start xl:space-y-0 bg-red-40 xl:hover:bg-teal-800 xl:hover:bg-opacity-10 xl:p-3 rounded-md"
                >
                  <div className="group-hover:text-white flex items-center gap-2 text-xs text-slate-500 xl:w-[35%] bg-red-40">
                    <p>{items.period.start}</p>
                    <hr className="w-3 text-slate-500" />
                    <p>{items.period.end}</p>
                  </div>
                  <div className="text-left space-y-2 xl:w-2/3 xl:space-y-3 bg-red-30">
                    <div
                      onClick={() => window.open(items.link, "_blank")}
                      className="group-hover:text-teal-200 cursor-pointer text-slate-300 flex items-center gap-2"
                    >
                      <div>
                        <p className="text-slate-400">{items.role}</p>
                        <p className="text-slate-50">{items.company}</p>
                      </div>
                      <div>
                        {items.link && (
                          <a
                            href={items.link}
                            target="_blank"
                            className="text-sm -rotate-45 hover:text-blue-600"
                          >
                            <ArrowForward sx={{ fontSize: 20 }} />
                          </a>
                        )}
                      </div>
                    </div>
                    <ul className="text-slate-500 text-sm xl:group-hover:text-slate-300 text-pretty list-decimal list-inside space-y-2 marker:text-teal-400">
                      {items.desc.map((deeds) => (
                        <li key={deeds}>{deeds}</li>
                      ))}
                    </ul>
                    <ul className="flex flex-wrap w-full gap-2 items-center">
                      {items.tools.map((skill) => (
                        <span
                          key={skill}
                          className={`${
                            skill
                              .toLowerCase()
                              .includes(filter.toLowerCase()) && filter !== ""
                              ? "bg-orange-500 bg-opacity-20 text-orange-500"
                              : "bg-emerald-600 bg-opacity-10"
                          } text-emerald-300 text-xs bg-emerald-600  px-3 py-1 rounded-full`}
                        >
                          {skill}
                        </span>
                      ))}
                    </ul>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default WorkingExperience;
