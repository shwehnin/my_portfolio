"use client";
import React from "react";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}
const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, skills }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50">
      {/* Gradient orb effect */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-150"></div>
      
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-slate-300 mb-6 text-sm leading-relaxed">{description}</p>
        
        {/* Skills tags */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800/80 rounded-full text-sm font-medium text-gray-200 border border-gray-600/50 transition-all duration-300 hover:bg-gray-700/80 hover:border-cyan-500/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
