"use client";
import React from "react";
import { Calendar, Award, ExternalLink, Download } from "lucide-react";

const CertificateCard = () => {
  const certificates = [
    {
      id: 1,
      name: "Native Kotlin Android",
      issuer: "AD-Coder",
      date: "2024",
      description:
        "The course provided comprehensive training on Kotlin, covering all essential concepts and techniques.",
      link: "#",
    },
    {
      id: 2,
      name: "The Complete Flutter Development Bootcamp with Dart",
      issuer: "Udemy",
      date: "2022",
      description:
        "I've completed for this course on Udemy. The course provided comprehensive training on Flutter and Dart, covering all essential concepts and techniques.",
      link: "#",
    },
    {
      id: 3,
      name: "Flutter & Dart - The Complete Guide [2024 Edition]",
      issuer: "Udemy",
      date: "2020",
      description:
        "I've completed for this course on Udemy. The instructors were highly knowledgeable and provided clear, detailed explanations.",
      link: "#",
    },
    {
      id: 4,
      name: "Web Application Development",
      issuer: "MMS IT",
      date: "2019",
      description: "Develop Blog System with register, login, user permission and API features. Develop custom web application, for UI/UX development experience. I've completed for this course on MMS One Stop IT Solutions.",
      link: "#",
    },
    {
      id: 5,
      name: "PHP Web Development",
      issuer: "Myanmar IT Consulting",
      date: "2017",
      description: "I've completed the training course for PHP Web Development, and is awarded by Myanmar IT Consulting in 2017.",
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {certificates.map((certificate) => (
        <div
          key={certificate.id}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {certificate.name}
              </h3>
              <p className="text-cyan-400 font-medium mb-1">
                {certificate.issuer}
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Issued: {certificate.date}</span>
              </div>
              {/* <div className="text-yellow-400 text-sm font-medium">
                ID: {certificate.credentialId}
              </div> */}
            </div>
            <Award className="w-8 h-8 text-cyan-400" />
          </div>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {certificate.description}
          </p>

          {/* <div className="flex items-center justify-between">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View Certificate
            </a>
            <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
              <Download className="w-4 h-4 mr-1" />
              Download
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CertificateCard;
