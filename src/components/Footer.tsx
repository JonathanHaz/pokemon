import React from 'react';
import styles from "@/styles/Footer.module.css";
import Magnetic from './magnetic';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <Magnetic>
          <a href="https://github.com/JonathanHaz" target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
            <FaGithub />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://www.linkedin.com/in/jonathanhaz/" target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
            <FaLinkedin />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://www.instagram.com/jonathan.hazan1/" target="_blank" rel="noopener noreferrer" className={styles.iconContainer}>
            <FaInstagram />
          </a>
        </Magnetic>
      </div>
    </div>
  );
}
