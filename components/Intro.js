import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import styles from '../styles/Intro.module.css';

export default function Intro() {
  return (
    <div className={styles.message}>
      <Fade duration={3500} >
        <p className="text-6xl">Anthony Sim</p>
      </Fade>
      <Fade duration={2500} delay={1500}>
        <p className="text-2xl">Fullstack Software Engineer</p>
      </Fade>
      <Fade duration={2500} delay={2500}>
        <div>
          <span><a className={styles.button} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1FVjj5WApQ9lo2VrOYyE5nc0RBZy4UcbV/view?usp=sharing">Resume</a></span>
          <span>&nbsp;<a className={styles.button} target="_blank" rel="noreferrer" href="https://github.com/anthonysim">Github</a></span>
          <span>&nbsp;<a className={styles.button} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sim-anthony/">LinkedIn</a></span>
        </div>
      </Fade>
    </div >
  )
}