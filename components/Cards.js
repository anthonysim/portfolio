import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Cards() {
  return (
    <div className="flex space-x-6">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src="/gallery.png"
          alt="image gallery"
          width={400}
          height={250}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-indigo-600">Pathfinder App</div>
          <p className="text-gray-700 text-base">
            Image gallery service using React for a service-orientated architecture full-stack application.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#aws</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#styledcomponents</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#framermotion</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#docker</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#expres</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#mongo</span>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src="/title.png"
          alt="coursera title"
          width={400}
          height={250}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-indigo-600">Factory App</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>

  )
}