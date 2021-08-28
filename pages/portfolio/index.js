import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Cards from '../../components/Cards';
import styles from '../../styles/Home.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | Portfolio</title>
        <meta name="description" content="Anthony Sim Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Resume</p>
      <br />
      <br />
      <Cards />
      <main className={styles.main}></main>
    </div>
  )
}