import React from "react";
import SkillCard from "../components/skill_card";

const SkillPage = () => {
  const skillsData = [
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Cross-platform mobile app development with beautiful UI/UX",
      skills: ["Dart", "Flutter", "iOS", "Android", "Kotlin"],
    },
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications with modern technologies",
      skills: ["HTML", "CSS", "JavaScript", "React(Next)", "Tailwind CSS"],
    },

    {
      icon: "⚡",
      title: "Backend Development",
      description: "Scalable server-side applications and API development",
      skills: ["Node.js", "PHP(Laravel)"],
    },
    {
      icon: "🗄️",
      title: "Database Management",
      description: "Designing and managing robust database solutions for scalable applications",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    }
  ];
  return (
    <>
      <section id="skills" className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                skills={skill.skills}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillPage;
