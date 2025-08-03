import { useEffect, useState } from 'react';
import Go from '/go.png';
import leftArrow from '/left-arrow.png';
import rightArrow from '/right-arrow.png';
import AmityImage from '/amity.png';
import PhishNetImage from '/phishnet.jpg';

export function BlogTloger() {
  const projects = [
    {
      title: "Amity App",
      description: "Manage school like a boss. Built by high schoolers, used by 300+ students & teachers.",
      github: "https://github.com/Kharaayo-Edu",
      live: "https://amity.kharaayo.com/",
      seeMoreLink: "https://blogs-ed8.pages.dev/projects/amity-app",
      image: AmityImage
    },
    {
      title: "PhishNet-Nepal",
      description: "How PhishNet Helps You Spot and Stop Phishing Attack",
      github: "https://github.com/Kharaayo-Edu",
      live: "https://www.phishnet.srijankharel.com.np/",
      seeMoreLink: "https://blogs-ed8.pages.dev/projects/phishnet",
      image: PhishNetImage
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLeft = () => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300); // animation duration
  };

  const handleRight = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-switch every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[currentIndex];

  return (
    <div className="flex flex-col items-center mt-16">

      {/* Image Box with Slide Animation */}
      <div className="relative w-[600px] h-[300px] overflow-hidden rounded-xl shadow-lg">
        <div
          key={currentIndex}
          className={`absolute w-full h-full transition-all duration-300 ease-in-out 
          ${slideDirection === "right" ? "translate-x-0 opacity-100" : "-translate-x-0 opacity-100"}`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover brightness-100 group-hover:brightness-75 transition duration-500"
          />
          <a
            href={project.seeMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 bg-black bg-opacity-40"
          >
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">
              See More
            </button>
          </a>
        </div>

        {/* Left & Right Buttons */}
        <button
          onClick={handleLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <img src={leftArrow} alt="left" className="h-4 w-4" />
        </button>

        <button
          onClick={handleRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
        >
          <img src={rightArrow} alt="right" className="h-4 w-4" />
        </button>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-bold mt-6">{project.title}</h2>
      <p className="text-gray-700 text-center text-2xl max-w-xl ">{project.description}</p>

      {/* GitHub & Live Links */}
      <div className="flex gap-6 mt-4">
        <a
          className="text-blue-800 font-semibold flex items-center hover:underline"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className='text-4xl'>  GitHub Repository</h1>  <img className="h-4 w-4 ml-2" src={Go} alt="GitHub" />
        </a>
        <a
          className="text-blue-800 font-semibold flex items-center hover:underline"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className='text-4xl'>See Live</h1> <img className="h-4 w-4 ml-2" src={Go} alt="Live" />
        </a>
      </div>
    </div>
  );
}
