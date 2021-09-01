import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Cards from '../../components/Cards';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/Home.module.css';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | Portfolio</title>
        <meta name="description" content="ASIM Portfolio Site" />
        <link rel="icon" href="/AS.png" />
      </Head>
      <main className={styles.main}>
        <Fade duration="1500">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-blue-600">Projects</h3>
        </Fade>
        <br />
        <br />
        <Cards />
      </main>
    </div >
  )
}