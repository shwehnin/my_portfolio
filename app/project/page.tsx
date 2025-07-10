import React from "react";
import ProjectCard from "../components/project_card";

const ProjectPage = () => {
  const projectsData = [
    {
      image: "/images/single-vendor.png",
      title: "E-commerce App",
      description:
        "The system includes features such as orders management system, write review, favorite, notifications, payment integration, my orders and vouchers.",
      technologies: ["PHP (Laravel)", "React(Next) JS", "Dart (Flutter)", "Firebase"],
    },
    // {
    //   image: "/images/social2.jpg",
    //   title: "Music Streaming App",
    //   description:
    //     "A beautiful music streaming application with offline playback, playlists, and social features.",
    //   technologies: ["Flutter", "SQLite", "REST API"],
    // },
    {
      image: "/images/product.png",
      title: "Product Management System",
      description:
        "The package supports a wide range of business functions, from inventory management to customer relationship management.",
      technologies: ["PHP(Laravel)", "Dart(Flutter)", "Firebase"],
    },
    {
      image: "/images/delivery.png",
      title: "Delivery & Pickup App",
      description:
        "A delivery office app allows the admin to efficiently manage pickups and deliveries.",
      technologies: ["PHP (Laravel)", "Dart (Flutter)", "Firebase"],
    },
    {
      image: "/images/hr.png",
      title: "HR Management App",
      description:
        "This app allows employees to check their attendance history, leave balances, company policies and important announcements are easily accessible to all UMG employees.",
      technologies: ["Python (Oodoo)", "PHP (Laravel)", "Dart (Flutter)", "Firebase"],
    },
    {
      image: "/images/foody.png",
      title: "E-commerce Food Delivery",
      description:
        "This app enables users to order food, track orders, and manage their cart. Users can register, view categorized products, and select recommended items. With Google Maps, they can save addresses and choose delivery locations. The order page allows payment selection, and Firebase provides order notifications.",
      technologies: ["PHP (Laravel)", "Dart (Flutter)", "Firebase"],
    },
    {
      image: "/images/social.png",
      title: "Social Media App",
      description:
        "This app allows users to make audio calls, video calls, and chat either one-on-one or in groups. It supports real-time communication and is designed for both personal and professional use. Users can easily create group chats, host video meetings, or have private conversations with high-quality audio and video. Whether you're connecting with friends or collaborating with a team, the app ensures a seamless and interactive communication experience.",
      technologies: ["Firebase", "Dart (Flutter)", "Zego Cloud"],
    },
    {
      image: "/images/shop.png",
      title: "E-commerce Online Shop Multi-vendor App",
      description:
        "This app is a feature-rich multi-vendor e-commerce platform that enables users to browse and purchase products from multiple sellers in one place. Vendors can manage their own stores, upload products, and handle orders independently, while the admin oversees the entire marketplace. The app includes user-friendly features such as product search and filtering, real-time order tracking, secure payment integration, and push notifications.",
      technologies: ["Node(Express) JS", "Dart (Flutter)", "Firebase"],
    },
    {
      image: "/images/buddhist.png",
      title: "Book App",
      description:
        "This is a prayer for Buddhists, especially those in Myanmar. It only displays information when you recite the prayer. You can download the book and save it to your download manager.",
      technologies: ["Kotlin", "Dummy Json"],
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
                image={project.image}
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
