import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import link from "./images/link.png";
import CV from '../Olalekan_Oladimeji_Resume.jpg';

function App() {
  const [count, setCount] = useState(0);

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
    <div className="bg-slate-900 px-3 py-8 h-screen ">
      <header className="space-y-1">
        <h1 className="font-bold text-slate-300 text-3xl">
          Olalekan Oladimeji
        </h1>
        <h2 className="text-slate-400 text-base font-semibold">
          Full-Stack Web Developer
        </h2>
        <p className="text-slate-500">
          I build responsive, optimised pixel-perfect and scalable web apps{" "}
        </p>
      </header>

      <div className="my-5">
        <a href={CV} download='Olalekan Oladimeji Resume' className="font-bold text-base text-emerald-900 bg-emerald-400 px-5 py-2 rounded-md"><span>Download Resume</span></a>
      </div>

      <div className="space-y-2 mt-5">
        <h2 className="text-slate-300 text-xl">My hosted projects: </h2>
        <ol className="text-slate-300 underline-offset-2 underline list-decimal px-5 space-y-2">
          {projectsURL.map((projects, id) => {
            return (
              <li
                key={projects.text}
                className="cursor-pointer text-base bg-clip-text hover:bg-gradient-to-r from-pink-500 to-violet-500 hover:text-transparent text-slate-400 flex items-end gap-2"
              >
                <span>{id + 1}. </span>{" "}
                <a href={projects.link}>{projects.text}</a>
                <img src={link} className="size-5" />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
