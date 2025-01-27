'use client';

import Link from 'next/link';
import Image from 'next/image';

import Container from '../components/Container';
import { Navbar } from '../components/Navbar';

const Header = () => {
  return (
    <header className='sticky top-0 z-50'>
      <div className='py-4 bg-black'>
        <Container className='flex items-center justify-between'>
          <div className='inline-flex relative before:content-[""] before:top-2 before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute before:blur-md'>
            <Link href='/' className='relative'>
              <Image
                src={'/images/logo/logo.png'}
                alt={'logo'}
                height={40}
                width={40}
              />
            </Link>
          </div>

          <div className='md:hidden cursor-pointer border border-white border-opacity-30 p-1 rounded-lg'>
            <Image
              src={'/images/icons/menu.svg'}
              alt={'logo'}
              height={30}
              width={30}
            />
          </div>
          <Navbar />
        </Container>
      </div>
    </header>
  );
};

export default Header;
