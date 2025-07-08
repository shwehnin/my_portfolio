"use client";
import React from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const ExperienceCard = () => {
  const experiences = [
    {
      id: 1,
      title: "Mobile Developer",
      company: "UMG Myanmar",
      location: "Yangon Myanmar",
      duration: "Oct 2023 - Apr 2024",
      description:
        "Developed mobile applications using Dart (Flutter). Managed a team of 5 developers and increased application performance by 40%.",
      technologies: ["Python(Odoo)", "Dart", "Flutter"],
      achievements: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Publish app on play store",
      ],
    },
    {
      id: 2,
      title: "Application Developer",
      company: "FreshMoe Myanmar",
      location: "Yangon Myanmar",
      duration: "Oct 2022 - Sep 2023",
      description:
        "Developed responsive web applications and collaborated with design teams to implement pixel-perfect UI components.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
      achievements: [
        "Delivered 15+ projects on time",
        "Improved user experience by 35%",
        "Mentored junior developers",
      ],
    },
    {
      id: 3,
      title: "Application Engineer",
      company: "Teclink Myanmar",
      location: "Yangon Myanmar",
      duration: "Sep 2020 - Aug 2022",
      description:
        "Built dynamic websites and gained experience in modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      achievements: [
        "Built 10+ websites from scratch",
        "Learned modern development practices",
        "Contributed to open source projects",
      ],
    },
    {
      id: 4,
      title: "Web Developer",
      company: "Vretailer Pte Ltd",
      location: "Yangon Myanmar",
      duration: "March 2019 - May 2020",
      description:
        "Built dynamic websites and gained experience in modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      achievements: [
        "Built 10+ websites from scratch",
        "Learned modern development practices",
        "Contributed to open source projects",
      ],
    },
    {
      id: 5,
      title: "Junior Engineer",
      company: "AcePlus Solutions Company Limited",
      location: "Yangon Myanmar",
      duration: "March 2018 - Feb 2019",
      description:
        "Built dynamic websites and gained experience in modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      achievements: [
        "Built 10+ websites from scratch",
        "Learned modern development practices",
        "Contributed to open source projects",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {experience.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-1">
                {experience.company}
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{experience.duration}</span>
              </div>
            </div>
            <Briefcase className="w-8 h-8 text-cyan-400" />
          </div>

          {/* <p className="text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p> */}

          {/* <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm flex items-start"
                >
                  <Star className="w-3 h-3 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div> */}

          {/* <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
