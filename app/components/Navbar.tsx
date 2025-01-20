'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='hidden md:flex items-center gap-6'>
      <Link
        href='/'
        className='text-white/60 hover:text-white transition-colors'
      >
        About
      </Link>
      <Link
        href='/'
        className='text-white/60 hover:text-white transition-colors'
      >
        Features
      </Link>
      <Link
        href='/'
        className='text-white/60 hover:text-white transition-colors'
      >
        Updates
      </Link>
      <Link
        href='/'
        className='text-white/60 hover:text-white transition-colors'
      >
        Help
      </Link>
      <Link
        href='/'
        className='text-white/60 hover:text-white transition-colors'
      >
        Customers
      </Link>

      <button className='bg-white py-2 px-4 rounded-lg'>Get for free</button>
    </nav>
  );
};
