import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { myProjects } from "../constants/index.js";
import "@fortawesome/fontawesome-free/css/all.css";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">My Selected Work</p>

      <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
        <div className="absolute top-0 right-0">
          <img
            src={currentProject.spotlight}
            alt="spotlight"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        <div
          className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
          style={currentProject.logoStyle}
        >
          <img
            className="w-10 h-10 shadow-sm"
            src={currentProject.logo}
            alt="logo"
          />
        </div>

        <div className="flex flex-col gap-5 text-white-600 my-5">
          <p className="text-white text-2xl font-semibold animatedText">
            {currentProject.title}
          </p>

          <p className="animatedText">{currentProject.desc}</p>
          <p className="animatedText">{currentProject.subdesc}</p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-3">
            {currentProject.tags.map((tag, index) => (
              <div key={index} className="tech-logo">
                <img src={tag.path} alt={tag.name} />
              </div>
            ))}
          </div>

          {currentProject.href && (
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>Check Live Site</span>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          )}
        </div>

        <div className="flex justify-between items-center mt-7">
          <button
            className="arrow-btn"
            onClick={() => handleNavigation("previous")}
          >
            <i className="fas fa-arrow-left text-xl text-white-700 hover:text-black-500 transition-colors"></i>
          </button>

          <button
            className="arrow-btn"
            onClick={() => handleNavigation("next")}
          >
            <i className="fas fa-arrow-right text-xl text-white-700 hover:text-black-500 transition-colors"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
