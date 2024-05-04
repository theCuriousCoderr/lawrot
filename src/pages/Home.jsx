import { useState } from "react";
import MyInfo from "../components/MyInfo";
import AboutMe from "../components/AboutMe";
import MyExperience from "../components/MyExperience";
import MyProjects from "../components/MyProjects";
import experienceData from "../utils/experience";

function Home() {
  const [view, setView] = useState("aboutMe");
  const [expLen, setExpLen] = useState(3)
  const [shrink, setShrink] = useState(0)

  function getView(id) {
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth
   
    let sections = document.querySelectorAll(".section");
    let target = document.querySelector(`.${id}`);
    sections.forEach((section) => {
      let elRect = section.getBoundingClientRect();
      let point = target.getBoundingClientRect().top ;
      if (windowWidth >=1000) {
        point += (windowHeight - (windowHeight/4))
      }
      if ((point >= elRect.top) && (point <= elRect.bottom)) {
        setView(section.id);
      }
      // alert((Math.round(elRect.top % 100)))
      if (Math.round(elRect.top % 100) < 0 ) {
        setShrink(Math.round(elRect.top % 100))
      }
    });

    let last = document.getElementById('last')
    let lastRect = last.getBoundingClientRect()
    if (lastRect.top < windowHeight) {
      if (expLen < experienceData.length) {
        setTimeout(() => {
          setExpLen(expLen+3)
        }, 1500)
      }
    }
  }
  function goTo(id) {
    let el = document.getElementById(id).getBoundingClientRect()
    let target = document.getElementById('target')
    target.scrollBy(0,el.top-60)

  }

  return (
    <div onScroll={() => getView('root')} className="z-20 relative selection:bg-orange-400 selection:bg-opacity-20 root h-screen overflow-scroll xl:overflow-hidden bg-slate-900 px-5 py-8 xl:py-0 xl:h-screen xl:flex ">
      <div className="fixed animate-ping flex items-center justify-center bg-red-300 -z-10">
        <div className="absolute size-[10rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[20rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[30rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[40rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[50rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[60rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[70rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[80rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[90rem] border border-slate-800 rounded-full"></div>
        <div className="absolute size-[100rem] border border-slate-800 rounded-full"></div>
      </div>
      
      <MyInfo goTo={goTo} view={view} />
      <div
      id="target"
        onScroll={() => getView('target')}
        className="target xl:w-1/2 xl:h-screen xl:overflow-scroll xl:px-10 xl:pt-20 no-scrollbar"
      >
        <AboutMe view={view} shrink={shrink} />
        <MyExperience view={view} expLen={expLen} />
        <MyProjects view={view} />
      </div>
    </div>
  );
}

export default Home;
