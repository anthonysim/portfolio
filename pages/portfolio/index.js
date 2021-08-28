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
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        <span className="text-indigo-600">Projects</span>
      </h3>
      <br />
      <br />
      <Cards />
      <main className={styles.main}></main>
    </div>
  )
}