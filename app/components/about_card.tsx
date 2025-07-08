"use client";
import React from "react";
import {
  User,
  Calendar,
  Heart,
  Globe,
  Languages,
  Baby,
  Star,
  Briefcase,
} from "lucide-react";

const AboutCard = () => {
  const personalInfo = {
    name: "Hnin Hnin Wai",
    dob: "05 July 1994",
    gender: "Female",
    status: "Single",
    religion: "Buddhist",
    nationality: "Myanmar",
    experience: "5+ Years",
    languages: ["English (Intermediate)", "Japanese N4", "Burmese (Fluently)"],
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
          <User className="text-white w-8 h-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{personalInfo.name}</h2>
          <p className="text-cyan-400 text-sm">Personal Information</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-cyan-400" />
          <span>Date of Birth:</span>
          <strong className="ml-auto">{personalInfo.dob}</strong>
        </div>
        <div className="flex items-center gap-2">
          <Baby className="w-4 h-4 text-cyan-400" />
          <span>Gender:</span>
          <strong className="ml-auto">{personalInfo.gender}</strong>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-cyan-400" />
          <span>Status:</span>
          <strong className="ml-auto">{personalInfo.status}</strong>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-cyan-400" />
          <span>Religion:</span>
          <strong className="ml-auto">{personalInfo.religion}</strong>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Nationality:</span>
          <strong className="ml-auto">{personalInfo.nationality}</strong>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-cyan-400" />
          <span>Experience:</span>
          <strong className="ml-auto">{personalInfo.experience}</strong>
        </div>
      </div>

      {/* Language Skills */}
      <div>
        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
          <Languages className="w-5 h-5 text-cyan-400" /> Language Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {personalInfo.languages.map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
