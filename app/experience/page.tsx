"use client";
import React, { useState } from "react";
import EducationPage from "../education/page";
import CertificateCard from "../components/certificate_card";
import ExperienceCard from "../components/experience_card";
import AboutCard from "../components/about_card";

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return <ExperienceCard />;

      case "education":
        return <EducationPage />;

      case "certificates":
        return <CertificateCard />;

      case "about":
        return <AboutCard/>;

      default:
        return null;
    }
  };

  interface TabButtonProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
  }

  const TabButton: React.FC<TabButtonProps> = ({
    id,
    label,
    isActive,
    onClick,
  }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform scale-105"
          : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
  return (
    <>
      <section
        id="experiences"
        className="bg-slate-800/50 backdrop-blur-sm py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experiences
            </h2>
            <p className="text-gray-400 text-lg">
              Discover my professional journey, achievements, and expertise
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TabButton
              id="experience"
              label="Experience"
              isActive={activeTab === "experience"}
              onClick={setActiveTab}
            />
            <TabButton
              id="education"
              label="Education"
              isActive={activeTab === "education"}
              onClick={setActiveTab}
            />
            <TabButton
              id="certificates"
              label="Certificates"
              isActive={activeTab === "certificates"}
              onClick={setActiveTab}
            />
            <TabButton
              id="about"
              label="About Me"
              isActive={activeTab === "about"}
              onClick={setActiveTab}
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in">{renderContent()}</div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
