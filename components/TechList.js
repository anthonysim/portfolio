import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { FaLaptop } from "react-icons/fa";

export default function TechList() {
  return (
    <div>
      <Fade duration="1500">
        <h3 className=" flex text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-blue-600">Technologies&nbsp;&nbsp;<FaLaptop /></h3>
      </Fade>
      <br />
      <br />
      <div className="lg:grid grid-flow-row grid-cols-4 gap-x-20 gap-y-2">
        {/* Titles */}
        <Fade direction="up">
          <div className="uppercase font-bold hidden lg:block">{`< FrontEnd />`}</div>
          <div className="uppercase font-bold hidden lg:block">{`< BackEnd />`}</div>
          <div className="uppercase font-bold hidden lg:block">{`< Testing />`}</div>
          <div className="uppercase font-bold hidden lg:block">{`< Other />`}</div>

          {/* Front-End */}
          <div>
            <ul className="list-disc">
              <li>React</li>
              <li>Javascript | Typescript</li>
              <li>HTML | CSS | SASS</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Styled Components</li>
            </ul>
          </div>

          {/* Back-End */}
          <div>
            <ul className="list-disc">
              <li>Express.js | Node.js</li>
              <li>MongoDB | Mongoose</li>
              <li>Postgres</li>
              <li>mySQL</li>
            </ul>
          </div>

          {/* Testing*/}
          <div>
            <ul className="list-disc">
              <li>Chai | Mocha</li>
              <li>New Relic</li>
              <li>LoaderIO</li>
              <li>Enzyme</li>
              <li>Jest</li>
            </ul>
          </div>

          {/* Dev-Tools */}
          <div>
            <ul className="list-disc">
              <li>Git | Github</li>
              <li>Webpack</li>
              <li>Babel</li>
              <li>NPM</li>
              <li>Azure DevOps</li>
            </ul>
          </div>
        </Fade>
      </div >
    </div>
  )
}