import { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styles from '../../styles/Home.module.css';

export default function Contact() {
  const [thankyou, setThankyou] = useState(false);
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);

  return (
    <div className={styles.container}>
      <Fade>
        <Head>
          <title>Anthony Sim | Contact</title>
          <meta name="description" content="Anthony Sim Portfolio Site" />
          <link rel="icon" href="/AS.png" />
        </Head>
        <main className={styles.main}>

          {/* Get In Touch */}
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">Get In <span className="text-blue-600">Touch</span>
          </h3>
          <br />

          {/* Email */}
          <div className="text-black text-3xl space-x-8 justify-center pt-4 dark:text-blue-600">
            <a href="mailto: anthonyysim@gmail.com">
              <span className="">email: </span> <AiOutlineMail className="inline-block dark:text-white" />
            </a>
          </div>
        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Fade>
    </div>
  )
}