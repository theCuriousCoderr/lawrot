import { useState } from "react";
import MyInfo from "../components/MyInfo";
import AboutMe from "../components/AboutMe";
import MyExperience from "../components/MyExperience";
import MyProjects from "../components/MyProjects";
import experienceData from "../utils/experience";

function Home() {
  const [view, setView] = useState("aboutMe");
  const [expLen, setExpLen] = useState(3)

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
    <div onScroll={() => getView('root')} className="root h-screen overflow-scroll bg-slate-900 px-5 py-8 xl:py-0 xl:h-screen xl:flex ">
      <MyInfo goTo={goTo} view={view} />
      <div
      id="target"
        onScroll={() => getView('target')}
        className="target xl:w-1/2 xl:h-screen xl:overflow-scroll xl:px-10 xl:pt-20 no-scrollbar"
      >
        <AboutMe view={view} />
        <MyExperience view={view} expLen={expLen} />
        <MyProjects view={view} />
      </div>
    </div>
  );
}

export default Home;
