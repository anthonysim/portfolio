import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | About</title>
        <meta name="description" content="ASIM Portfolio Site" />
        <link rel="icon" href="/AS.png" />
      </Head>
      <main className={styles.main}>
        <Fade duration="1500">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
            <span className="text-blue-600">About Me</span>
          </h3>
        </Fade>
        <section className="pt-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-3 mb-3">
              <Image className="rounded shadow-md" src="/berlin.jpg" width={400}
                height={250} alt="berlin" priority />
            </div>
            <div className="md:w-1/3 px-3 mb-3">
              <Image className="rounded shadow-md" src="/bitcoin.jpg" width={400}
                height={250} alt="bitcoin" priority />
            </div>
            <div className="md:w-1/3 px-3 mb-3">
              <Image className="rounded shadow-md" src="/coding.jpg" width={400}
                height={250} alt="coding" priority />
            </div>
            <div className="md:w-1/3 px-3 mb-3">
              <Image className="rounded shadow-md" src="/san-fran.jpg" width={400}
                height={250} alt="san-fran" />
            </div>
            <div className="md:w-1/3 px-3 mb-3">
              <Image className="rounded shadow-md" src="/steak.jpg" width={400}
                height={250} alt="steak" />
            </div>
            <div className="md:w-1/3 px-3 mb-3">
              <Image className="rounded shadow-md" src="/tacos.jpg" width={400}
                height={250} alt="tacos" />
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}