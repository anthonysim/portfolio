import Head from 'next/head';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      <section className="pt-8 px-4">
        <div className="flex flex-wrap lg:px-40 sm:px-28">
          <div className="md:w-1/3 px-3  mb-5 lg:mb-10">
            <Image className="rounded shadow-md" src="/berlin.jpg" width={400}
              height={250} alt="berlin" priority />
          </div>
          <div className="md:w-1/3 px-3 mb-3">
            <Image className="rounded shadow-md" src="/book.jpg" width={400}
              height={250} alt="book" priority />
          </div>
          <div className="md:w-1/3 px-3 mb-3">
            <Image className="rounded shadow-md" src="/saving.jpg" width={400}
              height={250} alt="saving" priority />
          </div>
          <div className="md:w-1/3 px-3 mb-3">
            <Image className="rounded shadow-md" src="/space.jpg" width={400}
              height={250} alt="space" />
          </div>
          <div className="md:w-1/3 px-3 mb-3">
            <Image className="rounded shadow-md" src="/coding.jpg" width={400}
              height={250} alt="coding" />
          </div>
          <div className="md:w-1/3 px-3 mb-3">
            <Image className="rounded shadow-md" src="/steak.jpg" width={400}
              height={250} alt="steak" />
          </div>
        </div>
      </section>
    </div>
  )
}