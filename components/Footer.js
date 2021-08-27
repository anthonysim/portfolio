import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className="flex text-3xl space-x-8 justify-center pt-3">
          <a target="_blank" rel="noreferrer" href="https://github.com/anthonysim">
            <FaGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sim-anthony">
            <FaLinkedin />
          </a>
          <a href="mailto: anthonyysim@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
        <br />
        <div>© 2021 Anthony Sim | Forgetful SE</div>
      </footer>
    </div >
  )
}