import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      picture
    </div >
  )
}

// <div className="max-w-5xl grid md:grid-cols-2">
// <div className="text-2xl font-extrabold md:col-span-3 bg-blue-500 md:w-1/2"></div>

// <div className="h-16 bg-pink-500 md:h-auto md:square"></div>
// <div className="h-16 bg-blue-500 md:h-auto md:square"></div>
// <div className="h-16 bg-pink-500 md:h-auto md:square"></div>
// <div className="h-16 bg-blue-500 md:h-auto md:square"></div>
// <div className="h-16 bg-pink-500 md:h-auto md:square"></div>
// <div className="h-16 bg-blue-500 md:h-auto md:square"></div>
// <div className="h-16 bg-blue-500 md:h-auto md:square"></div>
// <div className="h-16 bg-pink-500 md:h-auto md:square"></div>
// </div >