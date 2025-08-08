import Navbar from "./components/navbar";
import AboutPage from "./about/page";
import SkillPage from "./skill/page";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";
import ExperiencePage from "./experience/page";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from bg-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
        {/* Navbar */}
        <Navbar />
        {/* About Section */}
        <AboutPage />
        {/* Skill Section */}
        <SkillPage />
        {/* Project Section */}
        <ProjectPage />
        {/* Experience Section */}
        <ExperiencePage />
        {/* Contact Section */}
        <ContactPage />
      </div>
    </>
  );
}
