'use client';

import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import { logos } from '../utils/data';

import { motion } from 'framer-motion';

const LogoTicker = () => {
  return (
    <section className='bg-black text-white py-[72px] sm:py-24'>
      <Container>
        <h2 className='text-xl text-center text-white/70'>
          Trusted by the world&apos;s most innovative teams.
        </h2>
        <div className='relative overflow-hidden mt-9 mask-overlay'>
          <motion.div className='flex gap-16 flex-none'>
            {[...logos, ...logos].map(({ src, alt }, i) => (
              <Image
                key={i}
                src={src}
                alt={alt}
                height={140}
                width={140}
                className='h-8 w-auto flex-none'
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default LogoTicker;
