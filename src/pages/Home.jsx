import { useState } from "react";
import MyInfo from "../components/MyInfo";
import AboutMe from "../components/AboutMe";
import MyExperience from "../components/MyExperience";
import MyProjects from "../components/MyProjects";
import experienceData from "../utils/experience";
import WorkingExperience from "../components/WorkingExperience";
import Ripples from "../components/Ripples";

function Home() {
  const [view, setView] = useState("aboutMe");
  const [expLen, setExpLen] = useState(3);
  const [shrink, setShrink] = useState(0);

  function getView(id) {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    let sections = document.querySelectorAll(".section");
    let target = document.querySelector(`.${id}`);
    sections.forEach((section) => {
      let elRect = section.getBoundingClientRect();
      let point = target.getBoundingClientRect().top;
      if (windowWidth >= 1000) {
        point += windowHeight - windowHeight / 4;
      }
      if (point >= elRect.top && point <= elRect.bottom) {
        setView(section.id);
      }
      // alert((Math.round(elRect.top % 100)))
      if (Math.round(elRect.top % 100) < 0) {
        setShrink(Math.round(elRect.top % 100));
      }
    });

    let last = document.getElementById("last");
    let lastRect = last.getBoundingClientRect();
    if (lastRect.top < windowHeight) {
      if (expLen < experienceData.length) {
        setTimeout(() => {
          setExpLen(expLen + 3);
        }, 2000);
      }
    }
  }

  function goTo(id) {
    let el = document.getElementById(id).getBoundingClientRect();
    let target = document.getElementById("target");
    target.scrollBy(0, el.top - 60);
  }

  return (
    <div
      onScroll={() => getView("root")}
      className="z-20 relative selection:bg-teal-500 root h-screen overflow-scroll xl:overflow-hidden bg-slate-900 px-5 py-8 xl:py-0 xl:h-screen xl:flex "
    >
     <Ripples />

      <MyInfo goTo={goTo} view={view} setView={setView} />
      <div
        id="target"
        onScroll={() => getView("target")}
        className="target xl:w-1/2 xl:h-screen xl:overflow-scroll xl:px-10 xl:pt-20 no-scrollbar"
      >
        <AboutMe view={view} shrink={shrink} />
        <WorkingExperience view={view} expLen={expLen} />
        <MyExperience view={view} expLen={expLen} />
        <MyProjects view={view} />
      </div>
    </div>
  );
}

export default Home;
