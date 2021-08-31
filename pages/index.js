import Head from 'next/head';
import Image from 'next/image';
import TechList from '../components/TechList';
import Intro from '../components/Intro';
import Logo from '../components/Logo';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anthony Sim | DEV</title>
        <meta name="description" content="ASIM Portfolio Site" />
        <link rel="icon" href="/AS.png" />
      </Head>
      <Intro />
      <div className={styles.container}>
        <main className={styles.main}>
          <TechList />
        </main>
      </div>
    </div>
  )
}
