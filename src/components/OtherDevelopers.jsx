import React from "react";

const developers = [
  {
    name: "Jane Doe",
    devInitials: "JD",
    bio: "Full-Stack Developer passionate about building scalable web applications.",
    link: "https://github.com/janedoe",
  },
  {
    name: "John Smith",
    devInitials: "JS",
    bio: "Frontend Engineer specializing in React and modern UI/UX design.",
    link: "https://github.com/johnsmith",
  },
  {
    name: "Emily Johnson",
    devInitials: "EJ",
    bio: "Backend Developer with expertise in Node.js and cloud architecture.",
    link: "https://github.com/emilyjohnson",
  },
];

const OtherDevelopers = () => {
  return (
    <section id="developers" className="py-16 bg-gray-50 text-gray-800 section-blur">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Other Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Initials with Hover Effect */}
              <div className="relative w-20 h-20 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold cursor-pointer group">
                {dev.devInitials}
                <span className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dev.name}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{dev.bio}</p>
              <a
                href={dev.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherDevelopers;
