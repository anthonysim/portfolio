import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Background from './Background';
import { Fade } from "react-awesome-reveal";
import styles from '../styles/Intro.module.css';

export default function Intro() {
  return (
    <div className="background dark:bg-gray-900 bg-blue-600 relative">
      <div className="md:flex relative">
        <div className={styles.message}>
          <Fade duration={2500} >
            <p className="text-6xl font-bold">Anthony <span className="text-blue-300">Sim</span></p>
          </Fade>
          <Fade direction="right" duration={900} delay={800}>
            <p className="text-2xl font-extrabold">Fullstack <span className="text-blue-300">Software </span>Engineer</p>
          </Fade>
          <Fade direction="up" duration={900} delay={1800}>
            <div>
              <a className={styles.button} target="_blank" rel="noreferrer" href="https://github.com/anthonysim">Github</a>
              &nbsp;<a className={styles.button} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sim-anthony/">LinkedIn</a>
              <a className={styles.resumeButton} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1FVjj5WApQ9lo2VrOYyE5nc0RBZy4UcbV/view?usp=sharing">Resume</a>
            </div>
          </Fade>
        </div >
      </div>
      <Background />
    </div>
  )
}