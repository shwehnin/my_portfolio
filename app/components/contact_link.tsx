import Link from "next/link";
import React from "react";

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}
const ContactLink: React.FC<ContactLinkProps> = ({ href, icon, text }) => {
  return (
    <a href={href} target="_blank" className="contact-link group">
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default ContactLink;
