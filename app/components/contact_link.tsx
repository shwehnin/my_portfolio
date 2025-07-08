import Link from 'next/link'
import React from 'react'

interface ContactLinkProps {
    href: string, 
    icon: string, 
    text: string,
}
const ContactLink : React.FC<ContactLinkProps> = ({ href, icon, text }) => {
  return (
    <Link href={href} className="contact-link group">
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </Link>
  )
}

export default ContactLink