import Head from 'next/head';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

export default function Info() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 place-items-center">
      <Fade>
        <div className="md:ml-40">
          <Image className="rounded-full border border-gray-100 shadow-sm" src="/me.png" width={200}
            height={200} alt="me" priority />
        </div>
        <div className="text-center md:mr-40">
          <p>Hello, my name is Anthony Sim, I am a Fullstack Software Engineer from Los Angeles, CA with a background in Accounting, Auditing and Finance.</p>
          <br />
          <p>Besides tech, I enjoy coffee, tacos, traveling, investing in crypto, different perspectives and reading memoirs.</p>
        </div>
        <br />
        <br />
      </Fade>
    </div>
  )
}