import React from "react";

const About = () => {
  const skills = [
    { name: "Git", logo: "/skills/Git.png" },
    { name: "HTML", logo: "/skills/HTML.png" },
    { name: "CSS", logo: "/skills/CSS.png" },
    { name: "Tailwind", logo: "/skills/Tailwind.png" },
    { name: "JavaScript", logo: "/skills/JS.png" },
    { name: "React", logo: "/skills/React.png" },
    { name: "Express", logo: "/skills/Express.png" },
    { name: "Node", logo: "/skills/NodeJS.png" },
    { name: "MongoDB", logo: "/skills/Mongo.png" },
  ];

  return (
    <section id="about" className="md:h-[500px]">
      <div className=" bg-white flex flex-col justify-center h-full rounded-3xl gap-4 px-6 py-4 mt-4 md:gap-8 md:py-8 lg:px-20">
        <h2 className="text-center text-3xl font-archivo-black font-bold text-blue-800 md:text-4xl lg:mb-10 lg:text-6xl">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold text-slate-800 mb-4">Summary:</h3>
            <p className="text-slate-800 font-semibold border rounded-lg shadow-md p-2 md:p-4 ">
              Hello! I am a full-stack web developer specializing in the MERN
              stack (MongoDB, Express, React, Node.js). I recently completed a
              coding bootcamp, and I can't wait to apply my technical knowledge
              and creative problem-solving abilities to develop innovative
              digital products and services. As a strong believer in continuous
              learning, I am committed to keeping my skills sharp and staying
              current with the latest industry trends to ensure I’m always ready
              to tackle new challenges.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-6">Skills:</h3>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 justify-items-center text-slate-800">
              {skills.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center w-20"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={`${item.name}_logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
