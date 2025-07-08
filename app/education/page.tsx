"use client";
import React from "react";
import { MapPin, Calendar, GraduationCap } from "lucide-react"; 

const EducationPage = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Degree in Computer Science",
      school: "Mandalay Computer University",
      location: "Mandalay, Myanmar",
      duration: "2012 - 2016",
      gpa: "3.8/4.0",
      description:
        "Specialized in Computer Science and Software Engineering with focus on distributed systems.",
      courses: [
        "Computer Science",
        "UML",
        "Algorithms",
        "Software Engineering",
      ],
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-cyan-400 font-medium mb-1">{edu.school}</p>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{edu.duration}</span>
              </div>
              <div className="text-yellow-400 text-sm font-medium">
                GPA: {edu.gpa}
              </div>
            </div>
            <GraduationCap className="w-8 h-8 text-cyan-400" />
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

          <div>
            <h4 className="text-white font-medium mb-2">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationPage;
