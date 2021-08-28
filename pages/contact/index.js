import { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import nodeMailer from '../../components/utils/nodeMailer.js';
import styles from '../../styles/Home.module.css';


export default function Contact() {
  const [thankyou, setThankyou] = useState(false);
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);

  const onButtonClick = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      email: emailInput.current.value,
      message: messageInput.current.value,
    }

    nodeMailer(data);
    setThankyou(true);
    setTimeout(() => setThankyou(false), 2750);

    firstNameInput.current.value = '';
    lastNameInput.current.value = '';
    emailInput.current.value = '';
    messageInput.current.value = '';
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Sim | Contact</title>
        <meta name="description" content="Anthony Sim Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-16">

            {/* GET IN TOUCH / THANK YOU  MESSAGE*/}
            {!thankyou ? <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">Get In <span className="text-indigo-600">Touch</span>
            </h3> : <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">Thank You for Your <span className="text-indigo-600">Message!</span>
            </h3>}
          </div>

          {/* FORM */}
          {!thankyou && <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input ref={firstNameInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="firstname" required />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input ref={lastNameInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="lastname" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Email Address
                </label>
                <input ref={emailInput} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Your Message
                </label>
                <textarea type="text" ref={messageInput} rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required />
              </div>
              <input type="hidden" name="_subject" value="Anthony Sim | DEV"></input>
              <input type="hidden" name="_next" value="https://anthonysim.dev/thanks"></input>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <span className="text-sm">
                      Send me a message!
                    </span>
                  </label>
                </div>
                <button onClick={onButtonClick} className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>}
        </div>
      </main>
    </div>
  )
}