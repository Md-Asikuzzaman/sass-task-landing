'use client';

import Link from 'next/link';
import Image from 'next/image';

import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from '../components/Button';
import Container from '../components/Container';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 overflow-clip'>
      {/* oval design */}
      <div className='oval-shape'></div>
      <Container className='relative'>
        <div className='flex items-center justify-center'>
          <Link
            href='/'
            className='border py-1 px-2 rounded-lg border-white/30 inline-flex items-center gap-3'
          >
            <span className='bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] bg-clip-text text-transparent'>
              Version 5.0 is here
            </span>
            <span className='flex items-center gap-1 text-white'>
              <span>Read more</span>
              <IoIosArrowRoundForward size={22} />
            </span>
          </Link>
        </div>

        <div className='relative max-w-[736px] mx-auto'>
          <h1 className='text-7xl md:text-9xl font-bold tracking-tight text-center mt-8'>
            One Task <br /> at a Time
          </h1>
          {/* UI images */}

          <motion.div
            className='absolute hidden md:inline top-[100px] -left-[60px]'
            drag
            dragSnapToOrigin
          >
            <Image
              src={'/images/ui/cursor.png'}
              alt={'image'}
              height={200}
              width={200}
              draggable='false'
            />
          </motion.div>

          <motion.div
            className='absolute hidden md:inline top-[80px] -right-[85px]'
            drag
            dragSnapToOrigin
          >
            <Image
              src={'/images/ui/message.png'}
              alt={'image'}
              height={200}
              width={200}
              draggable='false'
            />
          </motion.div>
        </div>

        <p className='mx-auto text-center text-xl mt-8 max-w-md'>
          Celebrate the joy accomplishment with an app designed to track
          progress, motive your efforts, and celebrate your successes.
        </p>
        <div className='text-center mt-8'>
          <Button type='large'>Get for free</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
