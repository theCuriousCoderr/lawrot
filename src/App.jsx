import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import link from "./images/link.png";
import CV from "../Olalekan_Oladimeji_Resume.jpg";
import MyInfo from "./components/MyInfo";
import AboutMe from "./components/AboutMe";
import MyExperience from "./components/MyExperience";
import MyProjects from "./components/MyProjects";
import experienceData from "./utils/experience";

function App() {
  const [view, setView] = useState("aboutMe");
  const [expLen, setExpLen] = useState(3)

  function getView(id) {
    let windowHeight = window.innerHeight
    let sections = document.querySelectorAll(".section");
    let target = document.querySelector(`.${id}`);
    sections.forEach((section) => {
      let elRect = section.getBoundingClientRect();
      let point = target.getBoundingClientRect().top + windowHeight ;
      if ((point >= elRect.top) && (point <= elRect.bottom)) {
        setView(section.id);
      }
    });

    let last = document.getElementById('last')
    let lastRect = last.getBoundingClientRect()
    if (lastRect.top < windowHeight) {
      // alert(last.id)
      // alert(6)
      if (expLen <= experienceData.length - 1) {
        setTimeout(() => {
          setExpLen(expLen+3)
        }, 1500)
        
      }
    }
  }

  const projectsURL = [
    {
      link: "https://talentsync-assessment-ebon.vercel.app",
      text: "TalentSync",
    },
    { link: "https://intertwined-fe.vercel.app", text: "Intertwined" },
    { link: "https://trizent-autos-fe.vercel.app", text: "Trizent Autos" },
    { link: "https://itrack-2.vercel.app", text: "iTrack" },
    {
      link: "https://getlinkedai-prehackathon-flax.vercel.app",
      text: "GetLinkedAI",
    },
    {
      link: "https://geegpay-fe-dashboard-challenge.vercel.app",
      text: "Geegpay",
    },
    {
      link: "https://lambdola.github.io/aeefinalproject.github.io",
      text: "AEE Website",
    },
    { link: "https://ui-cgpa-calc.onrender.com", text: "UI CGPA Calculator" },
    { link: "https://light-trail.vercel.app", text: "Light Trail-Pulse" },
    { link: "https://bravex-demo.vercel.app", text: "Bravex Demo" },
    { link: "https://two-face.vercel.app", text: "Theme Toogle" },
    { link: "https://lambdola.github.io", text: "NFT Card Component" },
  ];

  return (
    <div onScroll={() => getView('root')} className="root h-screen overflow-scroll bg-slate-900 px-5 py-8 xl:py-0 xl:h-screen xl:flex ">
      <MyInfo view={view} />
      <div
        onScroll={() => getView('target')}
        className="target xl:w-1/2 xl:h-screen xl:overflow-scroll xl:p-20 no-scrollbar"
      >
        <AboutMe view={view} />
        <MyExperience view={view} expLen={expLen} />
        <MyProjects view={view} />
      </div>

      {/* <div className="my-5">
        <a href={CV} download='Olalekan Oladimeji Resume' className="font-bold text-base text-emerald-900 bg-emerald-400 px-5 py-2 rounded-md"><span>Download Resume</span></a>
      </   div> */}

      {/* <div className="space-y-2 mt-5">
        <h2 className="text-slate-300 text-xl">My hosted projects: </h2>
        <ol className="text-slate-300 underline-offset-2 underline list-decimal px-5 space-y-2">
          {projectsURL.map((projects, id) => {
            return (
              <li
                key={projects.text}
                className="cursor-pointer text-base bg-clip-text hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-transparent text-slate-400 flex items-end gap-2"
              >
                <span>{id + 1}. </span>{" "}
                <a href={projects.link} target="_blank">{projects.text}</a>
                <img src={link} className="size-5" />
              </li>
            );
          })}
        </ol>
      </div> */}
    </div>
  );
}

export default App;
