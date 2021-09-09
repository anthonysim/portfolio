import Head from 'next/head';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Info() {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <Fade>
        <div className="">
          <Image className="rounded-full border border-gray-100 shadow-sm" src="/me.png" width={200}
            height={200} alt="me" priority />
        </div>
        <div className="text-center">
          <br />
          <p>Hello, my name is Anthony Sim, I am a Fullstack Software Engineer from Los Angeles, </p>
          <p>CA with a background in Accounting, Auditing and Finance.</p>
          <br />
          <p>Besides tech, I enjoy traveling, thinking, investing, eating good food, as well as quiet and open spaces.</p>
          <br />
        </div>
      </Fade>
    </div>
  )
}