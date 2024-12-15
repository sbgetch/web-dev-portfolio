import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from "lucide-react";
import "swiper/swiper-bundle.css";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Enhanced project data with more details and images
  const projects = [
    {
      title: "Explword",
      description: "API-integrated word guessing game",
      repo: "https://github.com/sbgetch/Explword",
      link: "https://projects-tqhy.onrender.com/",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/projects/Explword.png", // Placeholder image
    },
    {
      title: "BuddyBudget",
      description: "Expense Tracker App",
      repo: "https://github.com/sbgetch/BuddyBudget",
      link: "https://buddybudget-fe.onrender.com/",
      technologies: [
        "JavaScript",
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      image: "/projects/BuddyBudget.png", // Placeholder image
    },
    {
      title: "Sentinel",
      description: "Document Tracker App",
      repo: "https://github.com/sbgetch/Sentinel",
      link: "https://sentinel-ie0i.onrender.com/",
      technologies: [
        "JavaScript",
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      image: "/projects/Sentinel.png", // Placeholder image
    },
  ];

  const handleButtonAction = (action = "") => {
    const selectedProject = projects[currentIndex];

    switch (action) {
      case "github":
        window.open(selectedProject.repo, "_blank", "noopener,noreferrer");
        break;
      case "demo":
        window.open(selectedProject.link, "_blank", "noopener,noreferrer");
        break;
      default:
        break;
    }
  };

  return (
    <section id="projects" className="w-full py-4 md:py-8">
      <div className="w-full bg-gradient-to-b from-[#CCD8EF] via-blue-900 to-[#CCD8EF] h-auto mx-auto px-4">
        <h2 className="text-center text-3xl font-archivo-black font-bold text-blue-800 mb-4 md:text-4xl md:mb-8 lg:text-6xl">
          My Projects
        </h2>

        <div className="max-w-4xl mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="project-swiper pb-8"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col pb-2 h-fit">
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <Button
                        variant="ghost"
                        className="flex-1 text-[#6ccbc2] bg-white px-6 py-3 font-bold border border-[#6ccbc2] rounded-br-3xl rounded-tl-3xl md:text-lg md:py-6"
                        onClick={() => handleButtonAction("github")}
                      >
                        <FolderGit2 />
                        GitHub
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleButtonAction("demo")}
                        className="flex-1 text-white bg-[#6ccbc2] px-6 py-3 font-bold rounded-tr-3xl rounded-bl-3xl md:text-lg md:py-6"
                      >
                        <ExternalLink />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
