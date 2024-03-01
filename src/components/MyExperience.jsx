import React from "react";

function MyExperience() {
  const experience = [
    {
      period: { start: "JULY", end: "DEC 2016" },
      role: "Software Engineer",
      company: "Stary",
      desc: "practices. I thrive in dynaamic environments where collaboartion and innovation drive success, leveraging agile methodologies to deliver high-quality solutions that exceeds client expectations",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      period: { start: "JULY", end: "DEC 2016" },
      role: "Software Engineer",
      company: "Stary",
      desc: "practices. I thrive in dynaamic environments where collaboartion and innovation drive success, leveraging agile methodologies to deliver high-quality solutions that exceeds client expectations",
      tools: ["HTML", "CSS", "JavaScript", "MongoDB", "Java", "SQL", "Node"],
    },
    {
      period: { start: "JULY", end: "DEC 2016" },
      role: "Software Engineer",
      company: "Stary",
      desc: "practices. I thrive in dynaamic environments where collaboartion and innovation drive success, leveraging agile methodologies to deliver high-quality solutions that exceeds client expectations",
      tools: ["Java", "SQL", "Node"],
    },
  ];
  return (
    <div id="myExperience" className="section text-white bg-blue-40 w-full mt-20">
      <p className="mb-10">EXPERIENCE</p>
      <ul className="space-y-10">
        {experience.map((items) => {
          return (
            <li className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <p>{items.period.start}</p>
                <hr className="w-3 text-slate-500" />
                <p>{items.period.end}</p>
              </div>
              <div className="text-slate-300 flex items-center gap-2">
                <p>{items.role}</p>
                <div className="w-[1px] h-4 bg-slate-200"></div>
                <p>{items.company}</p>
              </div>
              <p className="text-slate-500">{items.desc}</p>
              <ul className="flex flex-wrap w-full gap-2 items-center">
                {items.tools.map((skill) => (
                  <span className="text-emerald-300 text-xs bg-emerald-600 bg-opacity-10 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyExperience;
