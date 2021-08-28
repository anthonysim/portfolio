import Link from 'next/link';
import { useState } from 'react';


export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className=' text flex items-center flex-wrap bg-gray-900 p-3 opacity-80'>
        <Link href='/'>
          <a className='inline-flex items-center pl-12 p-2 mr-4'>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Anthony Sim | DEV
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-indigo-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='pr-12 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='pl-12 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 font-bold items-center justify-center  hover:text-indigo-300 uppercase'>
                Home
              </a>
            </Link>
            <Link href='/portfolio'>
              <a className='pl-12 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-100 font-bold items-center justify-center hover:text-indigo-300 uppercase'>
                Portfolio
              </a>
            </Link>
            <Link href='/about'>
              <a className='pl-12 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-200 font-bold items-center justify-center hover:text-indigo-300 uppercase'>
                About
              </a>
            </Link>
            <Link href='/contact'>
              <a className='pl-12 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-300 font-bold items-center justify-center hover:text-indigo-300 uppercase'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};