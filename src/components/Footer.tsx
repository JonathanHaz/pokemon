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
          <div className={styles.iconContainer}>
            <FaGithub />
          </div>
        </Magnetic>
        <Magnetic>
          <div className={styles.iconContainer}>
            <FaLinkedin />
          </div>
        </Magnetic>
        <Magnetic>
          <div className={styles.iconContainer}>
            <FaInstagram />
          </div>
        </Magnetic>
      </div>
    </div>
  );
}
