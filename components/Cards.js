import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaDesktop } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export default function Cards() {
  return (
    <div>
      <Fade duration="1500">
        <div className="md:flex md:space-x-12 sm:grid-cols-1">
          <div className="dark:bg-gray-900 max-w-sm rounded overflow-hidden shadow-lg">
            {/* Pathfinder */}
            <Image
              src="/gallery.png"
              alt="image gallery"
              width={400}
              height={250}
              priority
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-600 text-center">Pathfinder</div>
              {/* Pathfinder Links */}
              <div className="flex justify-center">
                <FaDesktop style={{ paddingTop: '2px' }} />
                <a target="_blank" rel="noreferrer" href="http://3.91.34.52:3000/1">&nbsp;
                  <span className="underline font-extrabold text-blue-600">Live</span>
                </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaGithub style={{ paddingTop: '2px' }} />
                <a target="_blank" rel="noreferrer" href="https://github.com/rpt26-fec-pathfinder/anthony-photo-gallery-service">&nbsp;
                  <span className="underline font-extrabold text-blue-600">Github</span>
                </a>
              </div>
              <br />
              <p className="text-gray-700 text-base text-center">
                Pathfinder is a React full-stack application for online video games purchases.
              </p>
            </div>

            {/* Pathfinder Tech Used */}
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">aws</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">styledcomponents</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">framermotion</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">docker</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">express</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">mongo</span>
            </div>
          </div>

          {/* Factory App */}
          <div className="dark:bg-gray-900 max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              src="/title.png"
              alt="title"
              width={400}
              height={250}
              priority
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-blue-600 text-center">Factory</div>
              {/* Factory Links */}
              <div className="flex justify-center">
                <FaGithub style={{ paddingTop: '2px' }} />
                <a target="_blank" rel="noreferrer" href="https://github.com/rpt26-sdc-factory/anthony-titleBanner-service">&nbsp;
                  <span className="underline font-extrabold text-blue-600">Github</span>
                </a>
              </div>
              <br />
              <p className="text-gray-700 text-base text-center">
                Factory is a React full-stack application for online courses for purchase.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">react</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">aws</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">express</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">postgres</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">k6</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">loaderio</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">loaderio</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">newrelic</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">redis</span>
            </div>
          </div>
        </div>
      </Fade>
    </div >
  )
}