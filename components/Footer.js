import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Footer() {
  return (
    <div>
      <div>github logo, mail logo, linkedin logo, etc</div>
      <footer className={styles.footer}>
        <div>© 2021 Anthony Sim | Forgetful SE</div>
      </footer>

    </div >
  )
}