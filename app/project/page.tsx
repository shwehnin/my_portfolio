import React from "react";
import ProjectCard from "../components/project_card";
import { title } from "process";

const ProjectPage = () => {
  const projectsData = [
    {
      icon: "📱",
      title: "E-commerce App",
      description:
        "The system includes features such as orders management system, write review, favorite, notifications, payment integration, my orders and vouchers.",
      technologies: ["PHP (Laravel)", "React(Next) JS", "Dart (Flutter)"],
    },
    {
      icon: "🎵",
      title: "Music Streaming App",
      description:
        "A beautiful music streaming application with offline playback, playlists, and social features.",
      technologies: ["Flutter", "SQLite", "REST API"],
    },

    {
      icon: "📊",
      title: "Production Management System",
      description:
        "The package supports a wide range of business functions, from inventory management to customer relationship management.",
      technologies: ["PHP(Laravel)", "Dart(Flutter)"],
    },
    {
      icon: "🎨",
      title: "Delivery & Pickup App",
      description:
        "A delivery office app allows the admin to efficiently manage pickups and deliveries.",
      technologies: ["PHP (Laravel)", "Dart (Flutter)"],
    },
    {
      icon: "🎨",
      title: "HR Management App",
      description:
        "This app allows employees to check their attendance history, leave balances, company policies and important announcements are easily accessible to all UMG employees.",
      technologies: ["Python (Oodoo)", "PHP (Laravel)", "Dart (Flutter)"],
    },
    {
      icon: "🎨",
      title: "E-commerce Food Delivery",
      description:
        "This app enables users to order food, track orders, and manage their cart. Users can register, view categorized products, and select recommended items. With Google Maps, they can save addresses and choose delivery locations. The order page allows payment selection, and Firebase provides order notifications.",
      technologies: ["PHP (Laravel)", "Dart (Flutter)"],
    },
    {
      icon: "🎨",
      title: "Social Media App",
      description:
        "This app enables users to call audio, video and chat features.",
      technologies: ["Firebase", "Dart (Flutter)"],
    },
    {
      icon: "🎨",
      title: "E-commerce Online Shop Multi-vendor App",
      description: "This app enables users to call audio and video features.",
      technologies: ["Node(Express) JS", "Dart (Flutter)", "Firebase"],
    },
    {
      icon: "🎨",
      title: "Book App",
      description:
        "This is a prayer for Buddhists, especially for people in Myanmar. It includes both audio and video files. You can download the book and save it to your download manager.",
      technologies: ["Kotlin"],
    },
  ];
  return (
    <>
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                icon={project.icon}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
