import { useRef, useState } from "react";
import "../src/index.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Skill from "./component/Skill";

function App() {
  // darkmode
  const [darkMode, setDarkMode] = useState(true);

  // scroll effect
  const skill = useRef(null);
  const about = useRef(null);
  const top = useRef(null);
  const project = useRef(null);
  const scrollRef = { skill: skill, about: about, top: top, project: project };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="px-10 dark:bg-gray-900">
        <Header
          scrollRef={scrollRef}
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <Hero />
        <About about={about}/>
        <Skill skill={skill} />
        <Project project={project}/>
        <Contact/>
      </div>
      <div className=" text-center dark:text-white text-sm bg-teal-500 py-3">
            This website was made by @Beondevvv        
      </div>
    </div>
  );
}

export default App;
