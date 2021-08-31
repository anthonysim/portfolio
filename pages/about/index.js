import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | About</title>
        <meta name="description" content="ASIM Portfolio Site" />
        <link rel="icon" href="/AS.png" />
      </Head>

      <main className={styles.main}>
        ABOUT
      </main>

    </div>
  )
}