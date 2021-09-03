import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Gallery from '../../components/Gallery';
import Info from '../../components/Info';
import styles from '../../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | About</title>
        <meta name="description" content="Anthony Sim Portfolio Site" />
        <link rel="icon" href="/AS.png" />
      </Head>
      <main className={styles.main}>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">About <span className="text-blue-600">Me</span>
        </h3>
        <br />
        <Info />
        <Gallery />
      </main>
    </div >
  )
}