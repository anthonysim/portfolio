import Head from 'next/head';
import Image from 'next/image';

export default function Info() {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <div >
        <Image className="rounded-full border border-gray-100 shadow-sm" src="/me.jpg" width={200}
          height={200} alt="berlin" priority />
      </div>
      <div>
        <p>Hello, my name is Anthony Sim, I am a Fullstack</p>
        <p>Software Engineer from Los Angeles, CA with a</p>
        <p> background in Accounting, Auditing and Finance.</p>
        <br />
        <p>Besides tech, I enjoy coffee, tacos, traveling, </p>
        <p>investing in crypto, different perspectives and</p>
        <p>reading memoirs.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}