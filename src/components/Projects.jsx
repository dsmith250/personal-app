import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of what Project One does.",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Details about Project Two and the technologies used.",
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "An overview of Project Three, highlighting key features.",
    link: "https://example.com/project-three",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white section-blur">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
