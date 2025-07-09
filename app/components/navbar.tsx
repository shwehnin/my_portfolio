"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".mobile-menu-overlay") &&
        !target.closest("button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md"
          : "bg-slate-900/90 backdrop-blur-md"
      } border-b border-cyan-500/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
          >
            Hnin Hnin Wai
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experiences" className="nav-link">Experiences</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 z-50"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`hamburger-line ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`hamburger-line ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`hamburger-line ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
      >
        <div className="menu-bg flex flex-col items-center justify-center h-[calc(100vh)] space-y-8">
          <a href="#home" className="mobile-nav-link" onClick={handleMobileMenuClick}>Home</a>
          <a href="#skills" className="mobile-nav-link" onClick={handleMobileMenuClick}>Skills</a>
          <a href="#experiences" className="mobile-nav-link" onClick={handleMobileMenuClick}>Experiences</a>
          <a href="#projects" className="mobile-nav-link" onClick={handleMobileMenuClick}>Projects</a>
          <a href="#contact" className="mobile-nav-link" onClick={handleMobileMenuClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
