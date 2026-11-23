import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const handleClick = () => {
    setActive(!active);
  };
  // bg-gray-900 p-3 opacity-80
  return (
    <div>
      <nav className='text flex items-center flex-wrap p-3 bg-blue-600 dark:bg-gray-900 relative'>
        <Link href='/' className='inline-flex items-center pl-12 p-2 mr-4'>
          <span className='text-xl text-white dark:hover:text-blue-600 hover:text-black font-bold uppercase tracking-wide'>
            {'< AnthonySim />'}
          </span>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-blue-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >

          {/* LIGHT AND DARK MODE */}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="pl-12 lg:p-0 h-12 w-12 order-2 md:order-3"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {/* CSS picks the icon so server and client markup always match */}
            <FiSun className="hidden dark:block" style={{ color: 'white', fontSize: '20px' }} />
            <FaMoon className="block dark:hidden" style={{ color: 'white' }} />
          </button>

          {/* LINKS */}
          <div className='pr-12 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            <Link href='/' className='navbar'>
              Home
            </Link>
            <Link href='/portfolio' className='navbar'>
              Portfolio
            </Link>
            <Link href='/about' className='navbar'>
              About
            </Link>
            <Link href='/contact' className='navbar'>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div >
  );
};