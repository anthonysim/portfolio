import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'


export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | Contact</title>
        <meta name="description" content="Anthony Sim Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        contact
      </main>

    </div>
  )
}