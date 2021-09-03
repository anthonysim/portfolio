import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image className="rounded shadow-md" src="/berlin.jpg" width={400}
        height={250} alt="berlin" />
    </div >
  )
}
