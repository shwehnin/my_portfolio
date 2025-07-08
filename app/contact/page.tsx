import React from "react";
import ContactLink from "../components/contact_link";

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your mobile app idea to life? Let's connect and
            discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink
              href="mailto:your.email@example.com"
              icon="📧"
              text="Email"
            />
            <ContactLink href="#" icon="💼" text="LinkedIn" />
            <ContactLink href="#" icon="🐙" text="GitHub" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
