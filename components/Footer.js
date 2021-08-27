import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className="flex text-3xl space-x-8 justify-center pt-3">
          <FaGithub />
          <FaLinkedin />
          <AiOutlineMail />
        </div>
        <br />
        <div>© 2021 Anthony Sim | Forgetful SE</div>
      </footer>

    </div >
  )
}