import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Cards.scss";
import Link from "next/link";

let contactData = [
  {
    id: 1,
    icon: faPhone,
    description: "+503 7989-9172",
  },
  {
    id: 2,
    icon: faEnvelope,
    description: "isaac.arias07@gmail.com",
  },
  {
    id: 3,
    icon: faLinkedin,
    description: "Perfil de Linkedin",
    url: "https://www.linkedin.com/in/isaac-arias-6884a2149",
  },
  {
    id: 4,
    icon: faLocationDot,
    description: "Apopa, San Salvador",
  },
  {
    id: 5,
    icon: faGlobe,
    description: "Sitio Web",
    url: "https://isaac953.github.io/Portfolio_Angular/home"
  },
  {
    id: 6,
    icon: faFileLines,
    description: "Certificados",
    url: "https://drive.google.com/drive/folders/1TZRT3fDr4ssvVEgzzyvSfofsoNMXS9pU"
  },
];

export const Contact = () => {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      {contactData.map((item) => (
        <div key={item.id}>
          <FontAwesomeIcon icon={item.icon} className="font-icon" />

          {/* url Hidden no exist */}
          {item.url ? (
            <Link href={{ pathname: item.url }} target="_blank">
              {item.description}
            </Link>
          ) : (
            <span>{item.description}</span>
          )}
        </div>
      ))}
    </section>
  );
};
