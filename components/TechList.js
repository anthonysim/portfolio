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
          <div className="uppercase font-bold hidden lg:block">{`< DevTools />`}</div>

          {/* Front-End */}
          <div>
            <ul className="list-disc">
              <li>Javascript</li>
              <li>HTML / CSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>jQuery</li>
              <li>Styled Components</li>
            </ul>
          </div>

          {/* Back-End */}
          <div>
            <ul className="list-disc">
              <li>Axios</li>
              <li>Express.js / Node.js</li>
              <li>Cassandra</li>
              <li>MongoDB / Mongoose</li>
              <li>mySQL</li>
              <li>Postgres</li>
              <li>Redis</li>
              <li>Restful API</li>
            </ul>
          </div>

          {/* Testing*/}
          <div>
            <ul className="list-disc">
              <li>Chai / Mocha</li>
              <li>Enzyme</li>
              <li>Jest</li>
              <li>K6</li>
              <li>LoaderIO</li>
              <li>New Relic</li>
            </ul>
          </div>

          {/* Dev-Tools */}
          <div>
            <ul className="list-disc">
              <li>Babel</li>
              <li>Git / Github</li>
              <li>NPM</li>
              <li>Webpack</li>
            </ul>
          </div>
        </Fade>
      </div >
    </div>
  )
}