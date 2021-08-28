import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';


export default function ThankYou() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | Thank You!</title>
        <meta name="description" content="Anthony Sim Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.thankyou}>
          <p className="text-indigo-600">Thank you for your message!</p>
        </div>
      </main>
    </div>
  )
}