import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import styles from '../styles/Intro.module.css';

export default function Intro() {
  return (
    <div className={styles.message}>
      <Fade duration={2500} >
        <p className="text-6xl font-bold">Anthony <span className="text-blue-600">Sim</span></p>
      </Fade>
      <Fade direction="right" duration={1000} delay={1000}>
        <p className="text-2xl "><span className="text-blue-600">Fullstack</span> Software Engineer</p>
      </Fade>
      <Fade direction="right" duration={1000} delay={2000}>
        <div>
          &nbsp;<a className={styles.button} target="_blank" rel="noreferrer" href="https://github.com/anthonysim">Github</a>
          &nbsp;<a className={styles.button} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sim-anthony/">LinkedIn</a>
          <a className={styles.resumeButton} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1FVjj5WApQ9lo2VrOYyE5nc0RBZy4UcbV/view?usp=sharing">Resume</a>
        </div>
      </Fade>
    </div >
  )
}