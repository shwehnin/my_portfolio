"use client"
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element w-20 h-20 top-1/4 right-1/4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full backdrop-blur-sm"></div>
          <div className="floating-element w-16 h-16 top-3/5 right-1/12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full backdrop-blur-sm animation-delay-1000"></div>
          <div className="floating-element w-12 h-12 top-1/3 right-2/5 bg-gradient-to-br from-teal-400/20 to-cyan-500/20 rounded-full backdrop-blur-sm animation-delay-2000"></div>
          <div className="floating-element w-24 h-24 top-1/2 left-1/12 bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full backdrop-blur-sm animation-delay-3000"></div>
          <div className="floating-element w-14 h-14 top-1/5 left-1/3 bg-gradient-to-br from-pink-400/15 to-rose-500/15 rounded-full backdrop-blur-sm animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Profile Image */}
            <div className="relative animate-fade-in-up">
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-teal-400/30 rounded-3xl blur-xl transform rotate-6"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-3xl backdrop-blur-sm border border-slate-700/50">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://www.hninhninwai.com/assets/images/shwe.jpg"
                      alt="Hnin Hnin Wai - Mobile Application Developer"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="animate-fade-in-up animation-delay-200">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Hello, I'm Hnin Hnin Wai
                </h1>
                <h4 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-200 via-blue-400 to-teal-200 bg-clip-text text-transparent">Software Developer</h4>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
              </div>

              {/* Description */}
              <div className="space-y-4 animate-fade-in-up animation-delay-600">
                <p className="space-y-2 text-lg">
                  I have around 6 years of experience in software development, specializing in 
                  both back-end and front-end features, and 4 years of experience as Mobile 
                  Application Developer.
                </p>
                <p className="space-y-2 text-lg">
                  I've worked on various projects, including web applications, mobile apps, and 
                  large-scale data systems. I possess a solid understanding of requirement 
                  specifications and best practices across the software development lifecycle.
                </p>
                <p className="space-y-2 text-lg">
                  My primary programming languages are :
                  {/* <span className="text-cyan-400 font-semibold">Kotlin</span> and <span className="text-blue-400 font-semibold">Flutter</span>. */}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-800">
                {['Dart(Flutter)', 'Kotlin', 'Node(Express) JS', 'PHP(Laravel)', 'React(Next) JS'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
                    style={{animationDelay: `${800 + index * 100}ms`}}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
                <Link
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <a
                  href="/cv.pdf"
                  download="Hnin_Hnin_Wai_CV.pdf"
                  className="group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl font-semibold text-white border border-slate-600 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-3000 { animation-delay: 3000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
      `}</style>
    </>
  );
};

export default AboutPage;